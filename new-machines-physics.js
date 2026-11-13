/* Independent deterministic physics engines for new NexusBoxLab machines.
   No dependency on the original, closed WASM simulator. */
(function (scope) {
"use strict";
const W=720,H=1280,CX=360,CY=708,R=291,TAU=Math.PI*2;
const KINDS={
  pendulum:{name:"Pendulum Crusher",subtitle:"A heavy swinging hammer",accent:"#ffba64",glow:"#f472b6"},
  gears:{name:"Twin Gear Grinder",subtitle:"Counter-rotating crushing gears",accent:"#74f4ff",glow:"#b3f267"},
  magnet:{name:"Magnetic Vortex",subtitle:"Orbiting magnets and a central core",accent:"#c1a8ff",glow:"#59e5ff"}
};
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const dist=(x,y)=>Math.hypot(x,y);
const hue=(h,a=1)=>"hsla("+h+",96%,67%,"+a+")";
class MachineScene {
  constructor(options){this.set(options||{});}
  set(options){
    this.options={kind:KINDS[options.kind]?options.kind:"pendulum",
      seed:(Number(options.seed)>>>0)||29187, speed:clamp(Number(options.speed)||1,.5,2.1),
      density:clamp(Number(options.density)||1,.5,1.7), palette:options.palette||"neon",
      sound:options.sound!==false};
    this.reset();
  }
  rand(){this.rng=(Math.imul(this.rng,1664525)+1013904223)>>>0;return this.rng/4294967296;}
  reset(){
    this.rng=this.options.seed;this.t=0;this.balls=[];this.bits=[];this.crushed=0;this.spawnCount=0;this.nextSpawn=0;this.events=[];this.frameEvents=[];
    for(let i=0;i<6*this.options.density;i++)this.spawn(true);
  }
  spawn(initial=false,x,y,r){
    if(this.balls.length>=90)return;
    const k=this.options.kind; let px,py;
    if(Number.isFinite(x)&&Number.isFinite(y)){px=x;py=y;}
    else if(k==="magnet"){const a=this.rand()*TAU,d=135+this.rand()*118;px=CX+Math.cos(a)*d;py=CY+Math.sin(a)*d;}
    else if(k==="gears"){px=CX+(this.rand()-.5)*180;py=445+this.rand()*75;}
    else {px=CX+(this.rand()-.5)*430;py=555+this.rand()*215;}
    const rad=Number.isFinite(r)?clamp(r,7,27):11+this.rand()*13;
    const base=this.options.palette==="candy"?[325,182,50,275,30,145]:this.options.palette==="fire"?[20,35,45,5,330,53]:[185,288,115,327,48,225];
    const h=base[Math.floor(this.rand()*base.length)];
    const a=this.rand()*TAU;
    this.balls.push({x:px,y:py,vx:Math.cos(a)*(35+this.rand()*100),vy:Math.sin(a)*(35+this.rand()*110),
      r:rad,h,age:0,lastCrush:-10,trail:[]});this.spawnCount++;
  }
  impulse(x,y,strength,count=14){
    for(let i=0;i<count;i++){
      const a=this.rand()*TAU,s=(this.rand()*.65+.35)*strength;
      this.bits.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,r:1.5+this.rand()*4,
        h:[49,173,295,333][Math.floor(this.rand()*4)],life:.3+this.rand()*.5});
    }
    if(this.bits.length>240)this.bits.splice(0,this.bits.length-240);
  }
  crushAt(index,x,y){
    const b=this.balls[index];if(!b)return;
    this.balls.splice(index,1);this.crushed++;this.impulse(b.x,b.y,210+b.r*7,13);
    if(this.events.length<800)this.events.push({t:this.t,power:clamp(b.r/21,.35,1)});
    this.frameEvents.push({x:b.x,y:b.y});
    if(this.balls.length<70){
      for(let j=0;j<2;j++){
        const rad=clamp(b.r*.78,7,22);
        this.spawn(false,b.x+(j===0?-1:1)*rad*1.1,b.y-rad*.25,rad);
        const child=this.balls[this.balls.length-1];
        if(child){child.vx=(j===0?-1:1)*(140+this.rand()*100);child.vy=-170-this.rand()*100;child.lastCrush=this.t+.20;}
      }
    }
  }
  step(delta){
    const dt=clamp(delta,0,1/40)*this.options.speed;
    this.t+=dt;this.frameEvents=[];
    if(this.t>=this.nextSpawn){
      const wait=(this.options.kind==="magnet"?.25:.37)/this.options.density;
      this.nextSpawn=this.t+wait;
      if(this.balls.length<55)this.spawn();
    }
    const mode=this.options.kind;
    const theta=Math.sin(this.t*2.25)*1.04;
    const hx=CX+Math.sin(theta)*335,hy=370+Math.cos(theta)*335;
    const hx2=CX+Math.sin(Math.sin((this.t-dt)*2.25)*1.04)*335;
    const hy2=370+Math.cos(Math.sin((this.t-dt)*2.25)*1.04)*335;
    const gears=[{x:244,y:700,turn:this.t*2.5},{x:476,y:700,turn:-this.t*2.5}];
    const magnets=[0,1,2].map(i=>{const a=this.t*1.58+i*TAU/3;return {x:CX+Math.cos(a)*193,y:CY+Math.sin(a)*193,a};});
    for(let i=this.balls.length-1;i>=0;i--){
      const b=this.balls[i];b.age+=dt;
      if(mode==="magnet"){
        b.vx+=(CY-b.y)*.62*dt; b.vy+=(b.x-CX)*.62*dt;
        for(const m of magnets){const dx=m.x-b.x,dy=m.y-b.y,d2=dx*dx+dy*dy+1800;
          const f=Math.min(40000/d2,7);b.vx+=dx*f*dt;b.vy+=dy*f*dt;}
        b.vx*=1-.095*dt;b.vy*=1-.095*dt;
      }else{
        b.vy+=315*dt;b.vx*=1-.1*dt;
      }
      b.x+=b.vx*dt;b.y+=b.vy*dt;
      const dd=dist(b.x-CX,b.y-CY),max=R-b.r;
      if(dd>max){const nx=(b.x-CX)/(dd||1),ny=(b.y-CY)/(dd||1);
        b.x=CX+nx*max;b.y=CY+ny*max;
        const vn=b.vx*nx+b.vy*ny;if(vn>0){b.vx-=1.82*vn*nx;b.vy-=1.82*vn*ny;}}
      let hit=false;
      if(mode==="pendulum"){
        const dx=b.x-hx,dy=b.y-hy,limit=b.r+74;
        if(dx*dx+dy*dy<limit*limit&&this.t>b.lastCrush){
          const rel=dist((hx-hx2)/dt,(hy-hy2)/dt);
          hit=rel>40||b.age>.5;
          if(!hit){const d=dist(dx,dy)||1;b.x=hx+dx/d*limit;b.y=hy+dy/d*limit;}
        }
      }else if(mode==="gears"){
        for(let j=0;j<gears.length;j++){
          const g=gears[j],dx=b.x-g.x,dy=b.y-g.y,d=dist(dx,dy)||1;
          if(d<108+b.r){
            const nx=dx/d,ny=dy/d;
            b.x=g.x+nx*(108+b.r);b.y=g.y+ny*(108+b.r);
            b.vx+=(-ny)*(j===0?1:-1)*170*dt*9;
            b.vy+=nx*(j===0?1:-1)*170*dt*9;
            if(Math.abs(b.x-CX)<95&&b.y>595&&b.y<810&&this.t>b.lastCrush){hit=true;break;}
            b.vx+=nx*80*dt;b.vy+=ny*80*dt;
          }
        }
      }else{
        if(dist(b.x-CX,b.y-CY)<68+b.r&&this.t>b.lastCrush)hit=true;
        for(const m of magnets){
          const dx=b.x-m.x,dy=b.y-m.y,d=dist(dx,dy);
          if(d<b.r+38){const n=d||1;b.vx+=dx/n*55;b.vy+=dy/n*55;}
        }
      }
      if(hit){this.crushAt(i,b.x,b.y);continue;}
      const vel=dist(b.vx,b.vy),maxSpeed=700;
      if(vel>maxSpeed){b.vx*=maxSpeed/vel;b.vy*=maxSpeed/vel;}
      if((this.spawnCount%2===0||b.age<3)&&this.t-(b.trailAt||0)>.058){
        b.trail.push({x:b.x,y:b.y});if(b.trail.length>5)b.trail.shift();b.trailAt=this.t;
      }
    }
    // Equal-mass sphere impulses maintain motion and avoid overlapping piles.
    for(let i=0;i<this.balls.length;i++)for(let j=i+1;j<this.balls.length;j++){
      const a=this.balls[i],b=this.balls[j],dx=b.x-a.x,dy=b.y-a.y,lim=a.r+b.r,d2=dx*dx+dy*dy;
      if(d2>=lim*lim||d2<.001)continue;
      const d=Math.sqrt(d2),nx=dx/d,ny=dy/d,over=(lim-d)/2;
      a.x-=nx*over;a.y-=ny*over;b.x+=nx*over;b.y+=ny*over;
      const va=a.vx*nx+a.vy*ny,vb=b.vx*nx+b.vy*ny;
      if(va>vb){const impulse=(va-vb)*.87;a.vx-=nx*impulse;a.vy-=ny*impulse;b.vx+=nx*impulse;b.vy+=ny*impulse;}
    }
    for(let i=this.bits.length-1;i>=0;i--){const b=this.bits[i];
      b.x+=b.vx*dt;b.y+=b.vy*dt;b.vy+=260*dt;b.life-=dt;if(b.life<=0)this.bits.splice(i,1);}
  }
  draw(ctx,width,height){
    const k=this.options.kind,cfg=KINDS[k];ctx.save();ctx.setTransform(width/W,0,0,height/H,0,0);
    const bg=ctx.createLinearGradient(0,0,W,H);
    bg.addColorStop(0,"#111a39");bg.addColorStop(.5,"#0a1129");bg.addColorStop(1,"#1b1040");
    ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    ctx.globalAlpha=.07;ctx.strokeStyle="#a3d6ff";ctx.lineWidth=1;
    for(let x=0;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    ctx.globalAlpha=1;
    ctx.textAlign="center";ctx.fillStyle="#f2f4ff";ctx.font="900 43px system-ui,sans-serif";ctx.fillText(cfg.name.toUpperCase(),CX,160);
    ctx.font="19px system-ui,sans-serif";ctx.fillStyle="#aebad8";ctx.fillText(cfg.subtitle,CX,199);
    ctx.save();ctx.shadowBlur=24;ctx.shadowColor=cfg.glow;ctx.strokeStyle=cfg.accent;ctx.lineWidth=10;
    ctx.beginPath();ctx.arc(CX,CY,R,0,TAU);ctx.stroke();ctx.restore();
    ctx.strokeStyle="#3f5179";ctx.lineWidth=2;ctx.beginPath();ctx.arc(CX,CY,R+17,0,TAU);ctx.stroke();
    if(k==="pendulum")this.drawPendulum(ctx);
    else if(k==="gears")this.drawGears(ctx);
    else this.drawMagnets(ctx);
    for(const b of this.balls){
      for(let i=0;i<b.trail.length;i++){const q=b.trail[i];ctx.fillStyle=hue(b.h,(i+1)/b.trail.length*.1);ctx.beginPath();ctx.arc(q.x,q.y,b.r*.7,0,TAU);ctx.fill();}
      ctx.save();ctx.shadowColor=hue(b.h,.65);ctx.shadowBlur=14;ctx.fillStyle=hue(b.h);ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,TAU);ctx.fill();ctx.restore();
      ctx.fillStyle="rgba(255,255,255,.67)";ctx.beginPath();ctx.arc(b.x-b.r*.27,b.y-b.r*.31,Math.max(2,b.r*.22),0,TAU);ctx.fill();
    }
    for(const p of this.bits){ctx.fillStyle=hue(p.h,Math.min(1,p.life*2));ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,TAU);ctx.fill();}
    ctx.textAlign="center";ctx.fillStyle="#ecf3ff";ctx.font="bold 29px system-ui,sans-serif";ctx.fillText(this.crushed.toLocaleString("en-US")+" CRUSHED",CX,1090);
    ctx.fillStyle="#a9b6d8";ctx.font="19px system-ui,sans-serif";ctx.fillText("Built for satisfying motion",CX,1130);
    ctx.restore();
  }
  drawPendulum(ctx){
    const t=Math.sin(this.t*2.25)*1.04,px=CX,py=370,x=px+Math.sin(t)*335,y=py+Math.cos(t)*335;
    ctx.save();ctx.strokeStyle="#c2cbe0";ctx.lineWidth=22;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(x,y);ctx.stroke();
    ctx.strokeStyle="#475a7a";ctx.lineWidth=9;ctx.stroke();
    ctx.fillStyle="#3a4363";ctx.beginPath();ctx.arc(px,py,31,0,TAU);ctx.fill();ctx.strokeStyle="#ffe1a3";ctx.lineWidth=8;ctx.stroke();
    ctx.shadowBlur=28;ctx.shadowColor="#ff7a51";ctx.fillStyle="#ffad63";ctx.beginPath();ctx.arc(x,y,74,0,TAU);ctx.fill();
    ctx.shadowBlur=0;ctx.strokeStyle="#ffe4b4";ctx.lineWidth=9;ctx.stroke();
    ctx.fillStyle="#914b37";ctx.beginPath();ctx.arc(x,y,44,0,TAU);ctx.fill();ctx.restore();
  }
  drawGears(ctx){
    for(let j=0;j<2;j++){
      const x=j===0?244:476,y=700,r=108,turn=(j===0?1:-1)*this.t*2.5;
      ctx.save();ctx.translate(x,y);ctx.rotate(turn);ctx.shadowBlur=22;ctx.shadowColor=j===0?"#4af3ff":"#a3fa7e";
      ctx.beginPath();const teeth=14;
      for(let a=0;a<teeth*4;a++){const phi=a*TAU/(teeth*4),rr=(a%4===0||a%4===1)?120:100;
        const px=Math.cos(phi)*rr,py=Math.sin(phi)*rr;if(a===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}
      ctx.closePath();ctx.fillStyle=j===0?"#5cdceb":"#b5e87d";ctx.fill();
      ctx.shadowBlur=0;ctx.beginPath();ctx.arc(0,0,70,0,TAU);ctx.fillStyle="#202f44";ctx.fill();
      ctx.lineWidth=12;ctx.strokeStyle="#c8e4f0";ctx.stroke();
      for(let i=0;i<5;i++){const a=i*TAU/5;ctx.beginPath();ctx.moveTo(Math.cos(a)*24,Math.sin(a)*24);ctx.lineTo(Math.cos(a)*62,Math.sin(a)*62);ctx.lineWidth=12;ctx.strokeStyle=j===0?"#60bed6":"#9fcf81";ctx.stroke();}
      ctx.beginPath();ctx.arc(0,0,24,0,TAU);ctx.fillStyle="#cddcf1";ctx.fill();ctx.restore();
    }
  }
  drawMagnets(ctx){
    ctx.save();ctx.strokeStyle="#4a577e";ctx.lineWidth=3;ctx.setLineDash([11,9]);ctx.beginPath();ctx.arc(CX,CY,193,0,TAU);ctx.stroke();ctx.setLineDash([]);
    for(let i=0;i<3;i++){const a=this.t*1.58+i*TAU/3,x=CX+Math.cos(a)*193,y=CY+Math.sin(a)*193;
      ctx.save();ctx.translate(x,y);ctx.rotate(a+Math.PI/2);
      ctx.shadowBlur=22;ctx.shadowColor="#93c3ff";ctx.fillStyle=i===0?"#eb78b9":i===1?"#70ecff":"#b39eff";
      ctx.fillRect(-45,-32,90,64);ctx.fillStyle="#252b50";ctx.fillRect(-14,-32,28,64);
      ctx.fillStyle="#fff";ctx.font="bold 18px system-ui";ctx.fillText("N",-30,6);ctx.fillText("S",30,6);ctx.restore();
    }
    ctx.shadowBlur=30;ctx.shadowColor="#ba77fb";ctx.fillStyle="#5c3aa3";ctx.beginPath();ctx.arc(CX,CY,63,0,TAU);ctx.fill();
    ctx.strokeStyle="#f1b0fe";ctx.lineWidth=9;ctx.stroke();ctx.shadowBlur=0;
    ctx.fillStyle="#f7edff";ctx.font="bold 30px system-ui";ctx.textAlign="center";ctx.fillText("✦",CX,CY+11);
    ctx.restore();
  }
}
scope.NBLIndependentMachines={Scene:MachineScene,KINDS,W,H};
})(typeof self!=="undefined"?self:globalThis);
