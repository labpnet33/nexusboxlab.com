"use strict";
const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
test("new-machine random runs always change seed, replay preserves it, export uses it",()=>{
 const src=fs.readFileSync(path.join(root,"independent-machines-ui.js"),"utf8");
 const names=["stage","status","progress","progress-bar","speed","density","palette","duration","quality","audio","speed-value","density-value","duration-value","pause","restart","replay","mute","render","cancel","download","live-label","seed-value","scene-name"];
 const nodes={};
 for(const id of names){
   const events={};
   nodes[id]={id,value:id==="speed"||id==="density"?"1":id==="duration"?"12":id==="quality"?"720":id==="palette"?"neon":"",
     checked:true,disabled:false,events,style:{},classList:{add(){},remove(){}},
     addEventListener(name,cb){events[name]=cb;},setAttribute(k,v){this[k]=v;},
     getContext(){return {};},width:720,height:1280};
 }
 nodes.cancel.hidden=true;
 const buttons=["pendulum","gears","magnet"].map(kind=>({dataset:{kind},events:{},
   addEventListener(name,cb){this.events[name]=cb;},setAttribute(k,v){this[k]=v;}}));
 const scenes=[];
 class FakeScene{
   constructor(options){this.set(options);scenes.push(this);}
   set(options){this.options={...options};this.t=0;}
   draw(){}step(){}
 }
 const posted=[];
 class FakeWorker{
   postMessage(msg){posted.push(msg);}
   terminate(){}
 }
 const urlUpdates=[];
 const sandbox={
   window:{NBLIndependentMachines:{KINDS:{pendulum:{name:"Pendulum Crusher"},gears:{name:"Twin Gear Grinder"},magnet:{name:"Magnetic Vortex"}},Scene:FakeScene},
     Worker:FakeWorker,OffscreenCanvas:class{},VideoEncoder:class{},addEventListener(){}},
   document:{getElementById:id=>nodes[id],querySelectorAll:()=>buttons,body:{appendChild(){}},createElement:()=>({click(){},remove(){}})},
   location:{href:"https://example.test/machines?kind=pendulum&seed=2222"},
   history:{replaceState(a,b,url){urlUpdates.push(url);}},
   URL,crypto:{getRandomValues(arr){arr[0]=2222;return arr;}},Worker:FakeWorker,Blob,
   requestAnimationFrame(){},performance:{now(){return 0;}},console
 };
 vm.runInNewContext(src,sandbox,{timeout:1000});
 assert.equal(nodes["seed-value"].textContent,"2222","deep link seed remains intact");
 assert.ok(urlUpdates.at(-1).includes("seed=2222"));
 nodes.restart.events.click();
 assert.equal(nodes["seed-value"].textContent,"2223","crypto collision still produces a new seed");
 assert.equal(scenes.at(-1).options.seed,2223);
 assert.equal(nodes.pause.textContent,"Pause","random run resumes preview");
 nodes.replay.events.click();
 assert.equal(nodes["seed-value"].textContent,"2223","replay uses same seed");
 assert.equal(scenes.at(-1).options.seed,2223);
 nodes.render.events.click();
 assert.equal(posted[0].seed,2223,"encoded export matches selected run");
 assert.equal(nodes.restart.disabled,true,"random button locked during render");
 nodes.restart.events.click();
 assert.equal(nodes["seed-value"].textContent,"2223","cannot randomize in progress");
 nodes.cancel.events.click();
 assert.equal(nodes.restart.disabled,false,"controls unlock after cancel");
 nodes.restart.events.click();
 assert.equal(nodes["seed-value"].textContent,"2222","next random seed differs from previous");
 buttons[1].events.click();
 assert.equal(scenes.at(-1).options.kind,"gears","new machine selected");
 assert.ok(urlUpdates.at(-1).includes("kind=gears&seed="),"seed tracked in share URL");
});
test("original lab shuffle updates the reactive seed and preserves same-run restart",()=>{
 const original=fs.readFileSync(path.join(root,"lab-capture/_app/immutable/nodes/3.BKRJJ3CC.js"),"utf8");
 assert.match(original,/function qe\(e\)\{let t=Number\(e\)>>>0\|\|1;N\(Z,\{\.\.\.V\(Z\),seed:t,time:0\}/);
 assert.match(original,/e\(\x60click\x60,ir,\(\)=>qe\(Gt\(\)\)\)/);
 assert.match(original,/e\(\x60click\x60,nr,\(\)=>N\(De,\{n:V\(De\).n\+1,mode:\x60same\x60\}/);
});
