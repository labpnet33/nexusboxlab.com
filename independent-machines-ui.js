/* Browser controller for three new independent machine engines. */
(function () {
"use strict";
const $=id=>document.getElementById(id);
const physics=window.NBLIndependentMachines;
if(!physics){$("status").textContent="The new physics engine did not load.";return;}
const canvas=$("stage"),ctx=canvas.getContext("2d",{alpha:false});
const cfg={kind:"pendulum",seed:randomSeed(),speed:1,density:1,palette:"neon",sound:true};
const initialUrl=new URL(location.href);
const kindFromUrl=initialUrl.searchParams.get("kind");
if(physics.KINDS[kindFromUrl])cfg.kind=kindFromUrl;
const seedFromUrl=initialUrl.searchParams.get("seed");
if(seedFromUrl&&/^\d{1,10}$/.test(seedFromUrl)){
 const parsed=Number(seedFromUrl);
 if(parsed>0&&parsed<=0xffffffff)cfg.seed=parsed>>>0;
}
let scene=new physics.Scene(cfg),running=true,previousTime=0,accumulator=0;
let audioContext=null,muted=false,lastPop=0,worker=null,lastDownloadUrl=null,renderInProgress=false,restorePlay=true;
function randomSeed(previous=0){
 let next=0;
 try{next=crypto.getRandomValues(new Uint32Array(1))[0]>>>0;}
 catch{next=(Math.random()*0x100000000)>>>0;}
 next=next||1;
 const old=Number(previous)>>>0;
 return next===old?((old+1)>>>0)||1:next;
}
function updateRunInfo(){
 $("seed-value").textContent=String(cfg.seed>>>0);
 try{history.replaceState(null,"","/machines?kind="+encodeURIComponent(cfg.kind)+"&seed="+(cfg.seed>>>0));}catch{}
}
function status(msg,type=""){
 const node=$("status");node.textContent=msg;node.className="status"+(type?" "+type:"");
}
function setProgress(p){
 const value=Math.max(0,Math.min(100,Math.round(p*100)));
 $("progress").setAttribute("aria-valuenow",String(value));$("progress-bar").style.width=value+"%";
}
function readConfig(){
 cfg.speed=Number($("speed").value);
 cfg.density=Number($("density").value);
 cfg.palette=$("palette").value;
 cfg.sound=$("audio").checked;
 $("speed-value").textContent=cfg.speed.toFixed(2)+"×";
 $("density-value").textContent=cfg.density.toFixed(2)+"×";
 $("duration-value").textContent=$("duration").value+" sec";
 return {...cfg};
}
function resetScene(newSeed=false){
 if(renderInProgress)return;
 if(newSeed)cfg.seed=randomSeed(cfg.seed);
 scene.set(readConfig());accumulator=0;previousTime=0;lastPop=0;
 updateRunInfo();
 if(ctx)scene.draw(ctx,canvas.width,canvas.height);
}
function select(kind,newSeed=true){
 if(!physics.KINDS[kind]||renderInProgress)return;
 cfg.kind=kind;
 if(newSeed)cfg.seed=randomSeed(cfg.seed);
 resetScene(false);
 $("scene-name").textContent=physics.KINDS[kind].name;
 document.querySelectorAll("button[data-kind]").forEach(btn=>btn.setAttribute("aria-pressed",String(btn.dataset.kind===kind)));
 status("Selected "+physics.KINDS[kind].name+". Run seed: "+cfg.seed+".");
}
document.querySelectorAll("button[data-kind]").forEach(btn=>btn.addEventListener("click",()=>{
 ensureAudio();select(btn.dataset.kind);
}));
function ensureAudio(){
 if(audioContext||!window.AudioContext&&!window.webkitAudioContext)return;
 try{
   const Klass=window.AudioContext||window.webkitAudioContext;
   audioContext=new Klass();
 }catch{}
}
function playPop(){
 if(muted||!cfg.sound||!audioContext||audioContext.state!=="running")return;
 const now=performance.now();if(now-lastPop<65)return;lastPop=now;
 try{
 const osc=audioContext.createOscillator(),gain=audioContext.createGain(),t=audioContext.currentTime;
 osc.type="sine";osc.frequency.setValueAtTime(320,t);
 osc.frequency.exponentialRampToValueAtTime(95,t+.095);
 gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.11,t+.008);
 gain.gain.exponentialRampToValueAtTime(.0001,t+.11);
 osc.connect(gain);gain.connect(audioContext.destination);osc.start(t);osc.stop(t+.115);
 }catch{}
}
function frame(t){
 if(!previousTime)previousTime=t;
 let dt=Math.min((t-previousTime)/1000,.085);previousTime=t;
 if(running){
 accumulator+=dt;let stepped=0;
 while(accumulator>=1/60&&stepped<6){
   scene.step(1/60);accumulator-=1/60;stepped++;
   if(scene.frameEvents.length)playPop();
 }
 if(stepped>=6)accumulator=0;
 }
 try{scene.draw(ctx,canvas.width,canvas.height);}
 catch(e){status("Preview error: "+(e?.message||String(e)),"error");running=false;}
 requestAnimationFrame(frame);
}
function setPlaying(value){
 running=!!value;$("pause").textContent=running?"Pause":"Resume";
 $("live-label").textContent=running?"LIVE PHYSICS":"PAUSED";
}
function setRendering(value){
 renderInProgress=!!value;
 $("render").disabled=value;$("render").textContent=value?"Rendering…":"Render MP4 video";
 $("cancel").hidden=!value;
 document.querySelectorAll("button[data-kind]").forEach(btn=>btn.disabled=value);
 ["speed","density","palette","duration","quality","audio","restart","replay","pause","mute"].forEach(id=>{$(id).disabled=value;});
}
function cleanupWorker(){
 if(worker){worker.terminate();worker=null;}
 setRendering(false);setPlaying(restorePlay);
}
function offerDownload(data){
 if(lastDownloadUrl)URL.revokeObjectURL(lastDownloadUrl);
 const blob=new Blob([data.buffer],{type:data.mime||"video/mp4"});
 const url=URL.createObjectURL(blob),a=$("download");
 lastDownloadUrl=url;a.href=url;a.download=data.filename||"new-machine.mp4";
 a.classList.add("visible");
 a.textContent="Download "+(blob.size/1024/1024).toFixed(1)+" MB MP4 again";
 const clicker=document.createElement("a");clicker.href=url;clicker.download=a.download;
 document.body.appendChild(clicker);clicker.click();clicker.remove();
 const soundNote=cfg.sound&&!data.hasAudio?" (this browser exported without AAC audio)":"";
 status(data.frames+" frames exported. Your MP4 is ready"+soundNote+".","good");
}
function startRender(){
 if(renderInProgress)return;
 if(!window.Worker||!window.OffscreenCanvas||!window.VideoEncoder){
   status("This browser does not support offline WebCodecs export. Try current Chrome or Edge on desktop.","error");return;
 }
 readConfig();restorePlay=running;setPlaying(false);setRendering(true);
 setProgress(0);$("download").classList.remove("visible");
 status("Preparing frame-by-frame H.264 export…");
 try{worker=new Worker("/new-machines-export.worker.js");}
 catch(error){cleanupWorker();status("Failed to start renderer: "+error.message,"error");return;}
 worker.onmessage=({data})=>{
  if(data.type==="progress"){
    setProgress(data.value);status(data.stage+" · "+Math.round(data.value*100)+"%");
  }else if(data.type==="warning"){status(data.message);}
  else if(data.type==="done"){
    cleanupWorker();setProgress(1);
    try{offerDownload(data);}
    catch(e){status("Video generated but download failed: "+e.message,"error");}
  }else if(data.type==="error"){
    cleanupWorker();status("Export failed: "+data.message,"error");
  }
 };
 worker.onerror=e=>{
    cleanupWorker();status("Render worker error: "+(e.message||"Unknown error"),"error");
 };
 worker.postMessage({type:"start",kind:cfg.kind,seed:cfg.seed,speed:cfg.speed,density:cfg.density,
   palette:cfg.palette,sound:cfg.sound,duration:Number($("duration").value),quality:$("quality").value});
}
$("speed").addEventListener("input",()=>resetScene(false));
$("density").addEventListener("input",()=>resetScene(false));
$("palette").addEventListener("change",()=>resetScene(false));
$("duration").addEventListener("input",readConfig);
$("audio").addEventListener("change",readConfig);
$("pause").addEventListener("click",()=>{ensureAudio();audioContext?.resume?.().catch(()=>{});setPlaying(!running);});
$("restart").addEventListener("click",()=>{
 if(renderInProgress)return;
 ensureAudio();audioContext?.resume?.().catch(()=>{});
 const previous=cfg.seed;resetScene(true);setPlaying(true);
 status("New random run: seed "+cfg.seed+" (previous: "+previous+").","good");
});
$("replay").addEventListener("click",()=>{
 if(renderInProgress)return;
 ensureAudio();audioContext?.resume?.().catch(()=>{});
 resetScene(false);setPlaying(true);
 status("Replaying seed "+cfg.seed+" with the same settings.","good");
});
$("mute").addEventListener("click",()=>{ensureAudio();audioContext?.resume?.().catch(()=>{});muted=!muted;$("mute").textContent="Sound: "+(muted?"off":"on");});
$("render").addEventListener("click",()=>{ensureAudio();audioContext?.resume?.().catch(()=>{});startRender();});
$("cancel").addEventListener("click",()=>{if(!worker)return;cleanupWorker();status("Export cancelled. No project settings were lost.");setProgress(0);});
window.addEventListener("beforeunload",()=>{worker?.terminate();if(lastDownloadUrl)URL.revokeObjectURL(lastDownloadUrl);});
readConfig();select(cfg.kind,false);requestAnimationFrame(frame);
})();