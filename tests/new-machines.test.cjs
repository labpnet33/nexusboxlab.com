"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const physicsJS=fs.readFileSync(path.join(root,"new-machines-physics.js"),"utf8");
const simSandbox={self:{}};
vm.runInNewContext(physicsJS,simSandbox,{timeout:1000});
const {Scene,KINDS,W,H}=simSandbox.self.NBLIndependentMachines;
const kinds=["pendulum","gears","magnet"];
function advance(scene,seconds){for(let i=0;i<seconds*60;i++)scene.step(1/60);}
function fakeCtx(){
 const ctx={createLinearGradient(){return {addColorStop(){}};}};
 for(const name of ["save","restore","setTransform","fillRect","beginPath","arc","fill","stroke","moveTo","lineTo","translate","rotate","fillText","setLineDash","closePath"]){
  ctx[name]=()=>{};
 }
 return ctx;
}
test("all three new machine engines are registered",()=>{
 assert.deepEqual(Object.keys(KINDS).sort(),[...kinds].sort());
 assert.equal(W,720);assert.equal(H,1280);
});
for(const kind of kinds){
 test(kind+" makes real crush events throughout a long render",()=>{
   const sim=new Scene({kind,seed:112358,speed:1,density:1,palette:"neon"});
   advance(sim,12);
   const crushed12=sim.crushed;
   advance(sim,18);
   assert.ok(crushed12>10,"at least 10 collisions in first 12 seconds");
   assert.ok(sim.crushed>crushed12,"collisions continue after 12 seconds");
   assert.ok(sim.balls.length>0 && sim.balls.length<=90,"ball count remains bounded");
   assert.ok(sim.events.length>0,"audio impact events are emitted");
   assert.ok(sim.balls.every(b=>Number.isFinite(b.x)&&Number.isFinite(b.y)&&Number.isFinite(b.vx)&&Number.isFinite(b.vy)),"no invalid coordinates");
   sim.draw(fakeCtx(),720,1280);
 });
 test(kind+" produces deterministic frames for the same seed",()=>{
   const a=new Scene({kind,seed:826281,density:1.2,speed:1.15});
   const b=new Scene({kind,seed:826281,density:1.2,speed:1.15});
   advance(a,8);advance(b,8);
   assert.equal(a.crushed,b.crushed);
   assert.equal(a.balls.length,b.balls.length);
   assert.equal(a.balls[0].x,b.balls[0].x);
   assert.equal(a.balls[0].y,b.balls[0].y);
 });
}
test("MP4 muxer produces valid top-level and track boxes",()=>{
 const workerJS=fs.readFileSync(path.join(root,"new-machines-export.worker.js"),"utf8");
 const sandbox={self:{NBLIndependentMachines:{Scene,W,H}},importScripts(){},postMessage(){},TextEncoder,Uint8Array,DataView,ArrayBuffer,Math};
 vm.runInNewContext(workerJS+"\nself.__test_mux=muxMp4;",sandbox,{timeout:1000});
 const mux=sandbox.self.__test_mux;
 const avcC=new Uint8Array([1,66,0,42,255,225,0,4,103,66,0,42,1,0,4,104,206,15,192]);
 const frames=Array.from({length:30},(_,i)=>({bytes:new Uint8Array([0,0,0,2,i===0?0x65:0x41,0x88]),key:i===0}));
 const audio=Array.from({length:47},()=>({bytes:new Uint8Array([33,255]),key:true}));
 const mp4=mux(frames,audio,avcC,new Uint8Array([0x11,0x88]),720,1280,30);
 const dv=new DataView(mp4.buffer,mp4.byteOffset,mp4.byteLength);
 const fourcc=n=>String.fromCharCode(...mp4.subarray(n+4,n+8));
 const boxes=[];let pos=0;
 while(pos<mp4.length){
   assert.ok(pos+8<=mp4.length);
   const size=dv.getUint32(pos);
   assert.ok(size>=8 && pos+size<=mp4.length);
   boxes.push(fourcc(pos));pos+=size;
 }
 assert.equal(pos,mp4.length);
 assert.deepEqual(boxes,["ftyp","mdat","moov"]);
 const text=String.fromCharCode(...mp4);
 for(const code of ["avc1","avcC","mp4a","esds","stss","stsz","stco","stts","trak","mdia"]){
   assert.ok(text.includes(code),"MP4 includes "+code);
 }
});
test("website navigation and worker URLs are wired",()=>{
 const html=fs.readFileSync(path.join(root,"independent-machines.html"),"utf8");
 const ui=fs.readFileSync(path.join(root,"independent-machines-ui.js"),"utf8");
 const config=JSON.parse(fs.readFileSync(path.join(root,"vercel.json"),"utf8"));
 const link=fs.readFileSync(path.join(root,"creator-machines-cta.js"),"utf8");
 assert.ok(html.includes("new-machines-physics.js") && html.includes("independent-machines-ui.js"));
 assert.ok(ui.includes("new-machines-export.worker.js"));
 assert.equal(config.rewrites.find(x=>x.source==="/machines")?.destination,"/independent-machines.html");
 assert.ok(link.includes("nbl-independent-card"));
});
