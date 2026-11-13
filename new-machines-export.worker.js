/* Local MP4 export for independent machines.
   Uses fixed-step OffscreenCanvas + WebCodecs H.264/AAC, without live screen capture. */
"use strict";
importScripts("/new-machines-physics.js");
const {Scene,W,H}=self.NBLIndependentMachines;
const B={
 u8:(...xs)=>new Uint8Array(xs.map(x=>x&255)),
 u16:v=>new Uint8Array([(v>>8)&255,v&255]),
 u32:v=>new Uint8Array([(v>>>24)&255,(v>>>16)&255,(v>>>8)&255,v&255]),
 txt:s=>new TextEncoder().encode(s),
 zeros:n=>new Uint8Array(n)
};
function join(parts){
 const n=parts.reduce((a,p)=>a+p.length,0),out=new Uint8Array(n);
 let pos=0;for(const p of parts){out.set(p,pos);pos+=p.length;}return out;
}
function box(type,...payload){
 const bytes=join(payload),out=new Uint8Array(bytes.length+8);
 out.set(B.u32(out.length),0);out.set(B.txt(type),4);out.set(bytes,8);return out;
}
function full(type,version,flags,...payload){return box(type,B.u8(version,(flags>>16)&255,(flags>>8)&255,flags&255),...payload);}
const IDENTITY=join([B.u32(0x10000),B.u32(0),B.u32(0),B.u32(0),B.u32(0x10000),B.u32(0),B.u32(0),B.u32(0),B.u32(0x40000000)]);
function mvhd(timescale,duration){
 return full("mvhd",0,0,B.u32(0),B.u32(0),B.u32(timescale),B.u32(duration),B.u32(0x10000),B.u16(0x100),B.zeros(10),IDENTITY,B.zeros(24),B.u32(3));
}
function tkhd(trackId,duration,width,height,audio){
 return full("tkhd",0,7,B.u32(0),B.u32(0),B.u32(trackId),B.u32(0),B.u32(duration),B.zeros(8),
 B.u16(0),B.u16(0),B.u16(audio?0x100:0),B.u16(0),IDENTITY,B.u32(width*65536),B.u32(height*65536));
}
function mdhd(timescale,duration){
 return full("mdhd",0,0,B.u32(0),B.u32(0),B.u32(timescale),B.u32(duration),B.u16(0x55c4),B.u16(0));
}
function hdlr(kind){
 return full("hdlr",0,0,B.u32(0),B.txt(kind==="video"?"vide":"soun"),B.zeros(12),
 B.txt(kind==="video"?"NBL Video\0":"NBL Audio\0"));
}
function urlDinf(){return box("dinf",full("dref",0,0,B.u32(1),full("url ",0,1)));}
function avcSample(width,height,avcc){
 const compressor=new Uint8Array(32),name=B.txt("NBL Independent Machine");
 compressor[0]=Math.min(name.length,31);compressor.set(name.slice(0,31),1);
 return box("avc1",B.zeros(6),B.u16(1),B.zeros(16),B.u16(width),B.u16(height),
 B.u32(0x480000),B.u32(0x480000),B.u32(0),B.u16(1),compressor,B.u16(0x18),B.u16(0xffff),
 box("avcC",avcc));
}
function descriptor(tag,payload){
 const len=payload.length;if(len>0x0fffffff)throw Error("Descriptor too large");
 let n=len,a=[n&0x7f];n>>>=7;
 while(n){a.unshift((n&0x7f)|0x80);n>>>=7;}
 return join([B.u8(tag,...a),payload]);
}
function audioSample(asc,bitrate){
 const decoderSpecific=descriptor(5,asc);
 const decoderConfig=descriptor(4,join([B.u8(0x40,0x15,0,0,0),B.u32(bitrate),B.u32(bitrate),decoderSpecific]));
 const es=descriptor(3,join([B.u16(2),B.u8(0),decoderConfig,descriptor(6,B.u8(2))]));
 const esds=full("esds",0,0,es);
 return box("mp4a",B.zeros(6),B.u16(1),B.zeros(8),B.u16(1),B.u16(16),B.u16(0),
 B.u16(0),B.u32(48000*65536),esds);
}
function stbl(samples,offset,kind,width,height,codecConfig){
 const audio=kind==="audio",duration=audio?1024:3000,entries=samples.length;
 const codecEntry=audio?audioSample(codecConfig,128000):avcSample(width,height,codecConfig);
 const stsd=full("stsd",0,0,B.u32(1),codecEntry);
 const stts=full("stts",0,0,B.u32(1),B.u32(entries),B.u32(duration));
 const stsc=full("stsc",0,0,B.u32(1),B.u32(1),B.u32(entries),B.u32(1));
 const stsz=full("stsz",0,0,B.u32(0),B.u32(entries),join(samples.map(s=>B.u32(s.bytes.length))));
 const stco=full("stco",0,0,B.u32(1),B.u32(offset));
 const sync=audio?null:full("stss",0,0,B.u32(samples.filter(s=>s.key).length),
 join(samples.map((s,i)=>s.key?B.u32(i+1):B.zeros(0))));
 return box("stbl",stsd,stts,stsc,stsz,stco,...sync?[sync]:[]);
}
function track(kind,samples,startOffset,codecConfig,width,height,durationTicks){
 const audio=kind==="audio",timescale=audio?48000:90000;
 const mediaDuration=audio?samples.length*1024:durationTicks;
 const hd=box("mdia",mdhd(timescale,mediaDuration),hdlr(kind),
 box("minf",audio?full("smhd",0,0,B.u16(0),B.u16(0)):
 full("vmhd",0,1,B.u16(0),B.u16(0),B.u16(0),B.u16(0)),
 urlDinf(),stbl(samples,startOffset,kind,width,height,codecConfig)));
 return box("trak",tkhd(audio?2:1,audio?Math.ceil(mediaDuration*90000/48000):durationTicks,
 audio?0:width,audio?0:height,audio),hd);
}
function muxMp4(video,audio,videoDesc,audioDesc,width,height,fps){
 if(!video.length)throw Error("No frames were generated");
 if(!videoDesc||videoDesc.length<7)throw Error("H.264 codec headers missing");
 const ftyp=box("ftyp",B.txt("isom"),B.u32(512),B.txt("isom"),B.txt("iso2"),B.txt("avc1"),B.txt("mp41"));
 const videoBytes=video.reduce((a,s)=>a+s.bytes.length,0);
 const audioBytes=audio.reduce((a,s)=>a+s.bytes.length,0);
 const mdatLength=8+videoBytes+audioBytes;
 if(mdatLength>=0xffffffff)throw Error("Video too large for in-memory MP4");
 const mdatHeader=join([B.u32(mdatLength),B.txt("mdat")]);
 const durationTicks=Math.round(video.length*90000/fps);
 const audioTrack=audio.length&&audioDesc?track("audio",audio,ftyp.length+8+videoBytes,audioDesc,0,0,durationTicks):null;
 const moov=box("moov",mvhd(90000,durationTicks),track("video",video,ftyp.length+8,videoDesc,width,height,durationTicks),
 ...audioTrack?[audioTrack]:[]);
 return join([ftyp,mdatHeader,...video.map(s=>s.bytes),...audio.map(s=>s.bytes),moov]);
}
let cancelled=false;
function progress(stage,ratio){postMessage({type:"progress",stage,value:Math.max(0,Math.min(1,ratio))});}
function popPcm(events,seconds,kind){
 const rate=48000,n=Math.round(seconds*rate),out=new Float32Array(n);
 let noiseSeed=1732;
 const noise=()=>{noiseSeed=(Math.imul(noiseSeed,1664525)+1013904223)>>>0;return noiseSeed/4294967296*2-1;};
 for(const e of events){
   const start=Math.floor(e.t*rate),count=Math.min(Math.floor(.14*rate),n-start);if(count<=0)continue;
   let phase=0;
   for(let j=0;j<count;j++){
     const f=275-190*j/count;phase+=Math.PI*2*f/rate;
     const env=Math.exp(-j/(rate*.024));
     out[start+j]+=env*(Math.sin(phase)*.21+noise()*.13)*e.power;
   }
 }
 const base=kind==="magnet"?93:kind==="gears"?76:65;
 for(let i=0;i<n;i++){
   const t=i/rate;
   const hum=(Math.sin(TAU*base*t)+Math.sin(TAU*(base/2)*t)*.25)*.011;
   out[i]=Math.tanh((out[i]+hum)*1.25)*.82;
 }
 return out;
}
async function encodeAudio(events,seconds,kind){
 if(typeof AudioEncoder==="undefined"||typeof AudioData==="undefined")return {samples:[],description:null};
 const cfg={codec:"mp4a.40.2",sampleRate:48000,numberOfChannels:1,bitrate:128000};
 const supported=await AudioEncoder.isConfigSupported(cfg).catch(()=>({supported:false}));
 if(!supported.supported)return {samples:[],description:null};
 const samples=[];let desc=null,encError=null;
 const enc=new AudioEncoder({
   output(chunk,metadata){
     const data=new Uint8Array(chunk.byteLength);chunk.copyTo(data);
     samples.push({bytes:data,key:true});
     if(metadata?.decoderConfig?.description)desc=new Uint8Array(metadata.decoderConfig.description);
   },
   error(e){encError=e;}
 });
 try{
   enc.configure(cfg);const pcm=popPcm(events,seconds,kind);
   for(let i=0;i<pcm.length;i+=1024){
     if(cancelled)throw Error("Cancelled");
     const slice=new Float32Array(1024);slice.set(pcm.subarray(i,i+1024));
     const packet=new AudioData({format:"f32-planar",numberOfChannels:1,
       numberOfFrames:1024,sampleRate:48000,timestamp:Math.round(i*1e6/48000),data:slice.buffer});
     enc.encode(packet);packet.close();
     if(enc.encodeQueueSize>12)await new Promise(resolve=>setTimeout(resolve,5));
   }
   await enc.flush();if(encError)throw encError;
   return {samples,description:desc||B.u8(0x11,0x88)};
 }catch(e){
   // Never fail a complete video because this browser cannot encode AAC.
   postMessage({type:"warning",message:"Audio encoder unavailable; exporting video without sound."});
   return {samples:[],description:null};
 }finally{enc.close();}
}
async function exportVideo(data){
 const width=data.quality==="1080"?1080:720,height=width*16/9,
 fps=30,seconds=Math.max(3,Math.min(30,Math.round(Number(data.duration)||12)));
 if(typeof VideoEncoder==="undefined"||typeof VideoFrame==="undefined"||typeof OffscreenCanvas==="undefined")
   throw Error("This browser cannot use WebCodecs and OffscreenCanvas.");
 const candidates=["avc1.42002a","avc1.4d4028","avc1.640028"];
 let cfg=null;
 for(const codec of candidates){
   const test={codec,width,height,framerate:fps,bitrate:width===1080?12000000:6500000,
     avc:{format:"avc"},latencyMode:"realtime"};
   const result=await VideoEncoder.isConfigSupported(test).catch(()=>({supported:false}));
   if(result.supported){cfg=result.config||test;break;}
 }
 if(!cfg)throw Error("H.264 WebCodecs encoding is unavailable in this browser.");
 const canvas=new OffscreenCanvas(width,height),ctx=canvas.getContext("2d",{alpha:false});
 if(!ctx)throw Error("OffscreenCanvas 2D context unavailable.");
 const sim=new Scene({kind:data.kind,seed:data.seed,speed:data.speed,density:data.density,palette:data.palette,sound:data.sound});
 const samples=[];let desc=null,encError=null;
 const enc=new VideoEncoder({
   output(chunk,metadata){
     const bytes=new Uint8Array(chunk.byteLength);chunk.copyTo(bytes);
     samples.push({bytes,key:chunk.type==="key"});
     if(metadata?.decoderConfig?.description)desc=new Uint8Array(metadata.decoderConfig.description);
   },
   error(e){encError=e;}
 });
 try{
  enc.configure(cfg);progress("Rendering",0);
  const total=seconds*fps;
  for(let i=0;i<total;i++){
    if(cancelled)throw Error("Cancelled");
    sim.draw(ctx,width,height);
    const frame=new VideoFrame(canvas,{timestamp:Math.round(i*1e6/fps),duration:Math.round(1e6/fps)});
    enc.encode(frame,{keyFrame:i%fps===0});frame.close();
    sim.step(1/60);sim.step(1/60);
    if(enc.encodeQueueSize>6)await new Promise(resolve=>setTimeout(resolve,8));
    if(i%12===0){progress("Rendering",i/total*.83);await new Promise(resolve=>setTimeout(resolve,0));}
  }
  await enc.flush();
  if(encError)throw encError;
  if(samples.length!==total)throw Error("H.264 encoder returned "+samples.length+" of "+total+" frames; no incomplete MP4 was saved.");
  progress("Encoding audio",.85);
  let audio={samples:[],description:null};
  if(data.sound!==false)audio=await encodeAudio(sim.events.map(e=>({t:e.t/sim.options.speed,power:e.power})),seconds,data.kind);
  progress("Finalizing MP4",.96);
  const buffer=muxMp4(samples,audio.samples,desc,audio.description,width,height,fps);
  progress("Done",1);
  postMessage({type:"done",buffer:buffer.buffer,filename:"nexusbox-"+data.kind+".mp4",
    mime:"video/mp4",frames:samples.length,hasAudio:audio.samples.length>0},[buffer.buffer]);
 }finally{enc.close();}
}
self.onmessage=async event=>{
 const data=event.data||{};
 if(data.type==="cancel"){cancelled=true;return;}
 if(data.type!=="start")return;
 cancelled=false;
 try{await exportVideo(data)}
 catch(error){postMessage({type:"error",message:error instanceof Error?error.message:String(error)});}
};