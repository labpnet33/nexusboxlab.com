const e=[{id:`basic`,label:`Basic`,kind:`palette`,colors:[`#d9534f`,`#e8b84a`,`#4a86d4`,`#4caf6e`]},{id:`pastel`,label:`Pastel`,kind:`palette`,colors:[`#fbcfe8`,`#bfdbfe`,`#bbf7d0`,`#fde68a`,`#ddd6fe`,`#fecaca`]},{id:`mono`,label:`Snow`,kind:`palette`,colors:[`#ffffff`,`#e4e4e7`,`#c4c4cc`]},{id:`electric`,label:`Electric`,kind:`palette`,colors:[`#22d3ee`,`#f472b6`,`#a3e635`,`#facc15`,`#a855f7`]},{id:`sunset`,label:`Sunset`,kind:`palette`,colors:[`#fde047`,`#fb923c`,`#f43f5e`,`#db2777`,`#7c3aed`]},{id:`ocean`,label:`Ocean`,kind:`palette`,colors:[`#a5f3fc`,`#22d3ee`,`#3b82f6`,`#1d4ed8`,`#67e8f9`]},{id:`forest`,label:`Forest`,kind:`palette`,colors:[`#d9f99d`,`#84cc16`,`#16a34a`,`#065f46`,`#facc15`]},{id:`gold`,label:`Gold rush`,kind:`palette`,colors:[`#fff3b0`,`#fde047`,`#eab308`,`#ca8a04`,`#fbbf24`]},{id:`disco`,label:`Disco`,kind:`golden`,colors:[`#ff3d9e`,`#3dd9ff`,`#ffe03d`,`#7cff3d`,`#c33dff`],fx:`disco`},{id:`heartbeat`,label:`Heartbeat`,kind:`palette`,colors:[`#f43f5e`,`#fb7185`,`#e11d48`,`#fda4af`],fx:`heartbeat`},{id:`glitter`,label:`Glitter`,kind:`palette`,colors:[`#fde68a`,`#f9a8d4`,`#a5f3fc`,`#e9d5ff`],fx:`glitter`},{id:`aurora`,label:`Aurora`,kind:`palette`,colors:[`#34d399`,`#22d3ee`,`#a855f7`],fx:`aurora`},{id:`lava`,label:`Lava`,kind:`palette`,colors:[`#7f1d1d`,`#f97316`,`#fde047`],fx:`lava`},{id:`holo`,label:`Hologram`,kind:`palette`,colors:[`#a5f3fc`,`#f0abfc`,`#fde68a`],fx:`holo`},{id:`skyline`,label:`Skyline`,kind:`palette`,colors:[`#fde047`,`#f472b6`,`#4c1d95`],fx:`skyline`},{id:`classic`,label:`Signature`,kind:`golden`,colors:[`#ff6b3d`,`#3dd9ff`,`#c33dff`,`#7cff3d`,`#ff3d9e`,`#3d6bff`],signature:!0}],t={disco:1,heartbeat:2,glitter:3,aurora:4,lava:5,holo:6,skyline:7},n=t=>e.find(e=>e.id===t)??e[0],r=new Map([{id:`indigo`,label:`Indigo`,kind:`solid`,colors:[`#818cf8`],group:`Solid`},{id:`white`,label:`White`,kind:`solid`,colors:[`#f4f4f5`],group:`Solid`},{id:`pink`,label:`Pink`,kind:`solid`,colors:[`#f472b6`],group:`Solid`},{id:`red`,label:`Red`,kind:`solid`,colors:[`#ef4444`],group:`Solid`},{id:`orange`,label:`Orange`,kind:`solid`,colors:[`#fb923c`],group:`Solid`},{id:`yellow`,label:`Yellow`,kind:`solid`,colors:[`#e0a21f`],group:`Solid`},{id:`lime`,label:`Lime`,kind:`solid`,colors:[`#a3e635`],group:`Solid`},{id:`green`,label:`Green`,kind:`solid`,colors:[`#22c55e`],group:`Solid`},{id:`cyan`,label:`Cyan`,kind:`solid`,colors:[`#22d3ee`],group:`Solid`},{id:`blue`,label:`Blue`,kind:`solid`,colors:[`#3b82f6`],group:`Solid`},{id:`purple`,label:`Purple`,kind:`solid`,colors:[`#a855f7`],group:`Solid`},{id:`charcoal`,label:`Charcoal`,kind:`solid`,colors:[`#3f3f46`],group:`Solid`},{id:`walnut`,label:`Walnut`,kind:`solid`,colors:[`#9a6334`],group:`Solid`},{id:`silver`,label:`Silver`,kind:`metal`,colors:[`#ffffff`,`#c7cdd6`,`#5f6672`],group:`Metal`},{id:`gold`,label:`Gold`,kind:`metal`,colors:[`#fff6bf`,`#f5c518`,`#8a6100`],group:`Metal`},{id:`copper`,label:`Copper`,kind:`metal`,colors:[`#ffd3b5`,`#c96d3c`,`#5a2a12`],group:`Metal`},{id:`rosegold`,label:`Rose gold`,kind:`metal`,colors:[`#ffe6de`,`#e8a598`,`#8f5a50`],group:`Metal`},{id:`gunmetal`,label:`Signature gray`,kind:`metal`,colors:[`#d5d9e0`,`#848992`,`#3a3e46`],group:`Metal`},{id:`sunset`,label:`Sunset`,kind:`gradient`,colors:[`#fbbf24`,`#f97316`,`#db2777`],group:`Gradient`},{id:`ocean`,label:`Ocean`,kind:`gradient`,colors:[`#67e8f9`,`#3b82f6`,`#1e3a8a`],group:`Gradient`},{id:`toxic`,label:`Toxic`,kind:`gradient`,colors:[`#d9f99d`,`#22c55e`,`#065f46`],group:`Gradient`},{id:`candy`,label:`Candy`,kind:`gradient`,colors:[`#f9a8d4`,`#fde68a`,`#93c5fd`],group:`Gradient`},{id:`vapor`,label:`Vaporwave`,kind:`gradient`,colors:[`#22d3ee`,`#a78bfa`,`#f472b6`],group:`Gradient`},{id:`inferno`,label:`Inferno`,kind:`gradient`,colors:[`#fde047`,`#f97316`,`#991b1b`],group:`Gradient`},{id:`midnight`,label:`Midnight`,kind:`gradient`,colors:[`#6366f1`,`#312e81`,`#0f0c2b`],group:`Gradient`},{id:`rainbow`,label:`Rainbow flow`,kind:`rainbow`,colors:[],period:3,group:`Animated`},{id:`lava`,label:`Lava flow`,kind:`flow`,colors:[`#fde047`,`#f97316`,`#b91c1c`],period:2.5,group:`Animated`},{id:`aurora`,label:`Aurora`,kind:`flow`,colors:[`#4ade80`,`#22d3ee`,`#a855f7`],period:4,group:`Animated`},{id:`plasma`,label:`Plasma`,kind:`flow`,colors:[`#f472b6`,`#8b5cf6`,`#22d3ee`],period:1.6,group:`Animated`},{id:`pulse`,label:`Heartbeat`,kind:`pulse`,colors:[`#f43f5e`,`#fda4af`],period:.9,group:`Animated`},{id:`disco`,label:`Disco`,kind:`cycle`,colors:[`#f472b6`,`#facc15`,`#22d3ee`,`#a855f7`],period:2,group:`Animated`}].map(e=>[e.id,e])),i=e=>r.get(e);function a(e){let t=parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}const o=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n];function s(e,t){if(e.startsWith(`#`)){let t=a(/^#[0-9a-fA-F]{6}$/.test(e)?e:`#818cf8`);return{mode:0,a:t,b:t,c:t,offset:0}}let n=i(e)??i(`indigo`),r=n.colors.map(a),s=n.period?t/n.period%1:0;switch(n.kind){case`solid`:return{mode:0,a:r[0],b:r[0],c:r[0],offset:0};case`metal`:return{mode:4,a:r[0],b:r[1],c:r[2],offset:t/3.5%1};case`gradient`:return{mode:1,a:r[0],b:r[1],c:r[2]??r[1],offset:0};case`flow`:return{mode:2,a:r[0],b:r[1],c:r[2]??r[0],offset:s};case`rainbow`:return{mode:3,a:r[0]??[1,1,1],b:[1,1,1],c:[1,1,1],offset:s};case`pulse`:{let e=.5-.5*Math.cos(s*Math.PI*2),t=o(r[0],r[1],e);return{mode:0,a:t,b:t,c:t,offset:0}}case`cycle`:{let e=s*r.length,t=Math.floor(e),n=e-t,i=n*n*(3-2*n),a=o(r[t%r.length],r[(t+1)%r.length],i);return{mode:0,a,b:a,c:a,offset:0}}}}const c=[`machine`,`ramScale`,`arenaShape`,`startBalls`],l={ARENA_SHAPE:0,BALL_RADIUS:1,START_BALLS:2,BALL_SPEED:3,DUPS_PER_SIDE:4,RAM_SPEED:5,ESCALATION:6,OFFSET_X:7,OFFSET_Y:8,ROTATION:9,COLOR_MODE:10,COLOR_R:11,COLOR_G:12,COLOR_B:13,END_MODE:14,END_VALUE:15,ARENA_R:16,ARENA_G:17,ARENA_B:18,MACHINE:19,SPIN:20,RAM_SCALE:21,BURST:22,BALL_GROW:23,BALL_SPEEDUP:24,COPIES_GROW:25,PALETTE_N:26,PALETTE:27,ARENA_ROTATION:51,ARENA_SPIN:52,ARENA_SCALE:53,COUNT:54},u={ring:0,triangle:3,square:4,hexagon:6,octagon:8,diamond:10,stadium:11,tshape:12,lshape:13,cross:14,star:15,flower:16,heart:17},d={spinsquare:24,spincross:34,spinstar:35,spinflower:36},f={cpress:0,quadsmash:1,revolver:2,diagodupper:3,thehawk:4,hookcrush:5,upperhookcrush:6,eggofdup:7,shapedupper:8},p={none:0,flash:1,shards:2,confetti:3,sparks:4,ring:5,pixels:6,bubbles:7,stars:8,splash:9};function m(e){if(e?.startsWith(`#`))return h(e);let t=i(e);return!t||!t.colors.length?[1,1,1]:h(t.colors[+(t.colors.length>1)])}function h(e){let t=parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function ee(e){let t=new Float32Array(l.COUNT);t[l.ARENA_SHAPE]=u[e.arenaShape]??d[e.arenaShape]??0,t[l.ARENA_ROTATION]=e.arenaRotation??0,t[l.ARENA_SCALE]=e.arenaScale??1,t[l.ARENA_SPIN]=e.arenaSpin?e.arenaSpinSpeed??0:0,t[l.MACHINE]=f[e.machine]??0,t[l.SPIN]=e.spin?e.spinSpeed??0:0,t[l.RAM_SCALE]=e.ramScale??1,t[l.BALL_RADIUS]=e.ballSize,t[l.START_BALLS]=e.startBalls,t[l.BALL_SPEED]=e.ballSpeed,t[l.DUPS_PER_SIDE]=Math.max(1,Math.round(e.copies/2)),t[l.RAM_SPEED]=e.ramSpeed,t[l.ESCALATION]=e.escalation/100,t[l.OFFSET_X]=e.offsetX,t[l.OFFSET_Y]=e.offsetY,t[l.ROTATION]=e.rotation;let r=e,i=n(e.ballTheme??(r.colorMode===`rainbow`?`rainbow`:`classic`));t[l.COLOR_MODE]=i.kind===`golden`?0:i.kind===`rainbow`?2:3;let a=i.colors.slice(0,8);t[l.PALETTE_N]=i.kind===`palette`?a.length:0,a.forEach((e,n)=>t.set(h(e),l.PALETTE+n*3)),t[l.BURST]=p[e.burst]??p.flash,t[l.BALL_GROW]=(e.ballGrow??0)/100,t[l.BALL_SPEEDUP]=(e.ballSpeedup??0)/100,t[l.COPIES_GROW]=(e.copiesGrow??0)/100,t[l.END_MODE]=e.endMode===`time`?1:e.endMode===`balls`?2:e.endMode===`full`?3:0,t[l.END_VALUE]=e.endMode===`time`?e.endTime:Number(e.endBalls);let[o,s,c]=m(e.arenaColor);return t[l.ARENA_R]=o,t[l.ARENA_G]=s,t[l.ARENA_B]=c,t}const g=1080,_=1920,v=1024;function te(e){let r=y(e),i=r.arenaStyle===`signature`,a=D(r.backgroundColor),o=n(r.ballTheme),s=[0,1,2].map(e=>D(o.colors[e%o.colors.length]));return{ballStyle:r.ballStyle,theme:{fx:o.fx?t[o.fx]:0,colors:s},burst:r.burst,arena:{style:i?`basic`:r.arenaStyle??`basic`,paint:r.arenaColor,scale:(r.arenaLineScale??1)*(i?.5:1)},background:{mode:ne[r.background]??1,top:a,bottom:D(r.backgroundColor2??r.backgroundColor)},ram:{style:r.ramStyle,paint:r.ramColor}}}const ne={solid:0,gradient:1,radial:2,diagonal:3,grid:4,dots:5,stars:6,aurora:7,sunburst:8,waves:9};function y(e){let t=e,n={...e};if(!e.ramStyle){let e={basic:[`flat`,`#818cf8`],candy:[`flat`,`#f472b6`],gunmetal:[`metal`,`#848992`],neon:[`neon`,`#22d3ee`],gold:[`metal`,`#e0a21f`]};[n.ramStyle,n.ramColor]=e[t.ramSkin??``]??[`metal`,`#848992`]}let r={black:`#000000`,ink:`#0f0c2b`,grape:`#2e1065`};return t.background&&r[t.background]?(n.background=`solid`,n.backgroundColor=r[t.background]):t.background===`color`?n.background=`solid`:t.background===`gradient`&&!e.backgroundColor2&&(n.backgroundColor=`#1e1b4b`,n.backgroundColor2=`#5b21b6`),e.arenaStyle||(n.arenaStyle=Number(t.arenaWidth??10)<=5?`signature`:`basic`),n}const b={rubber:0,flat:1,outline:2,glossy:3,neon:4,glass:6,marble:7,pixel:8},x={base:1,rim:2,shine:3,rivet:4,flatRim:5,accent:6,core:7,shadow:8,light:9},S=(e,t,n)=>[e/255,t/255,n/255,1],C={base:S(132,137,146),rim:S(58,62,70),shine:S(196,201,210),rivet:S(74,78,86)},re=S(247,196,110),ie=[.06,.05,.17,1],ae=[.04,.05,.11,.86],w=[0,0,0,1],T=[1,1,1,1];function E(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n,1]}function D(e){let[t,n,r]=h(/^#[0-9a-fA-F]{6}$/.test(e??``)?e:`#000000`);return[t,n,r]}const oe=(e,t)=>[e[0],e[1],e[2],(e[3]??1)*t];function se(e,t,n,r=0){let i=e===`metal`&&(t===`gunmetal`||t.toLowerCase()===`#848992`);return{style:e,solid:n.mode===0?[...n.a,1]:null,signatureGray:i,time:r}}function O(e,t,n=1){if(e.signatureGray&&C[t])return oe(C[t],n);if(!e.solid)return[x[t],n];let r=e.solid,i=t===`rim`?E(r,w,.56):t===`shine`?E(r,T,.5):t===`rivet`?E(r,w,.45):t===`flatRim`?E(r,w,.6):t===`accent`?E(r,T,.45):t===`core`?E(r,T,.8):t===`shadow`?E(r,w,.32):t===`light`?E(r,T,.28):r;return oe(i,n)}const ce=()=>[[],[],[],[],[],[]];function le(e,t,n,r){r[0].push([e,t,n+5,n+5,ie,2.5,0,0,0,0,Math.PI/4]),r[0].push([e,t,n,n,[.98,.97,.92,1],1.5,0,0,0,0,Math.PI/4])}function ue(e,t,n){let{cx:r,cy:i,w:a,h:o}=t,s=t.role===`hub`,c=t.role===`rod`?0:t.role===`hub`||t.round?Math.min(a,o)/2:pe;switch(e.style){case`flat`:n[1].push([r,i,a+4,o+4,O(e,`flatRim`),c+2]),n[2].push([r,i,a,o,O(e,`base`),c]);return;case`outline`:n[2].push([r,i,a,o,O(e,`base`,.14),c]),n[4].push([r,i,a-3,o-3,O(e,`base`),c,0,3]);return;case`metal`:{n[1].push([r,i,a+(c?4:0),o+4,O(e,`rim`),c?c+2:0]),n[2].push([r,i,a,o,O(e,`base`),c]);let s=t.role===`arm`&&!!t.round,l=t.rich&&s?1:t.rich&&t.role===`arm`&&t.inward?-t.inward:-1;if(t.role===`rod`){let t=Math.floor(o*.32);n[3].push([r,i+Math.floor(-o*.18)+t/2,a,t,O(e,`shine`),0])}else a-2*c>0&&n[3].push([r,i+l*(o/2-3.5),a-2*c,3,O(e,`shine`),1]);if(t.role===`face`){n[4].push([r+t.toward*(a/2-3),i,4,Math.floor(o*.86),re,2]);for(let t of[-o*.32,0,o*.32])n[4].push([r,i+t,7,7,O(e,`rivet`),3.5])}if(t.rich&&t.role===`arm`){if(s)for(let t=1;t<=7;t++)n[4].push([r-a/2+a*t/8,i,5,5,O(e,`rivet`),2.5]);else{let s=t.inward||1;a-2*c-8>0&&n[4].push([r,i+s*(o/2-4.5),a-2*c-8,3,re,1.5]);let l=Math.max(1,Math.round(a/70)-1);for(let t=1;t<=l;t++)n[4].push([r-a/2+a*t/(l+1),i,7,7,O(e,`rivet`),3.5])}}t.rich&&t.role===`hub`&&a>=24&&Math.abs(a-o)<1&&(n[4].push([r,i,a*.32,a*.32,O(e,`rivet`),a*.16]),n[5].push([r-a*.05,i-a*.05,a*.1,a*.1,O(e,`shine`),a*.05]));return}case`neon`:{let s=t.role===`rod`?o*.35:c,l=t.role===`rod`?o*.7:o;n[0].push([r,i,a,l,O(e,`base`,.5),s,16,4.5]),n[2].push([r,i,a,l,ae,s]),n[4].push([r,i,a-3,l-3,O(e,`base`),s,0,4.5]),n[5].push([r,i,a-3,l-3,O(e,`core`),s,0,1.6]),t.role===`face`&&(n[4].push([r,i,a-18,o-18,O(e,`base`,.9),c-3,0,2.6]),n[5].push([r,i,a-18,o-18,O(e,`core`,.9),c-3,0,1]));return}case`gummy`:{let t=c+6;n[1].push([r,i,a+3,o+3,O(e,`rim`,.6),t+1]),n[2].push([r,i,a,o,O(e,`base`,.84),t]),n[3].push([r,i,a-10,o-10,O(e,`shadow`,.45),t-3,5,4]);let l=Math.max(3,Math.min(14,o*.16));s||n[4].push([r-a*.1,i-o/2+l*.9+3,a*.62,l,[1,1,1,.55],l/2]),a>30&&o>30&&n[5].push([r+a*(s?-.18:.3),i-o*(s?.18:.5)+(s?0:10),6,6,[1,1,1,.85],3]);return}case`toon`:{let t=e.solid?E(e.solid,[.5,.5,.52,1],.5):O(e,`base`);n[1].push([r,i,a+3,o+3,e.solid?E(t,w,.55):O(e,`rim`),c+1.5]),n[2].push([r,i,a,o,t,c,0,0,9,3.2]),s?n[3].push([r-a*.18,i-o*.18,a*.3,o*.3,[1,1,1,.08],a*.15,4]):n[3].push([r,i-o*.2,a-8,o*.22,[1,1,1,.07],Math.min(c,o*.11),5]);return}case`wood`:{let l=e.solid?E(e.solid,[.45,.28,.14,1],.35):O(e,`base`);if(n[1].push([r,i,a+4,o+4,e.solid?E(l,w,.55):O(e,`rim`),Math.min(c,6)+2]),n[2].push([r,i,a,o,l,Math.min(c,6),0,0,6,11]),a>26&&!s&&n[3].push([r,i-o/2+2,a-6,2,oe(e.solid?E(l,T,.3):O(e,`light`),.7),1]),t.role!==`hub`&&!t.round&&a>40&&o>16){let t=e.solid?E(l,w,.6):O(e,`rivet`);for(let e of[-1,1])n[4].push([r+e*(a/2-8),i,5,5,t,2.5])}return}case`plastic`:n[1].push([r,i,a+2.5,o+2.5,O(e,`shadow`),c+1.25]),n[2].push([r,i,a,o,O(e,`base`),c]),s?(n[3].push([r+a*.1,i+o*.12,a*.55,o*.55,O(e,`shadow`,.3),a*.27,6]),n[4].push([r-a*.18,i-o*.2,a*.22,o*.22,[1,1,1,.35],a*.11,4])):(n[3].push([r,i+o*.22,a-6,o*.4,O(e,`shadow`,.32),Math.min(c,o*.2),7]),n[4].push([r-a*.08,i-o*.24,a*.62,Math.max(2,o*.12),[1,1,1,.28],Math.max(1,o*.06),6]));return;case`carbon`:n[1].push([r,i,a+4,o+4,O(e,`base`),c+2]),n[2].push([r,i,a,o,[.11,.115,.13,1],c,0,0,7,6]),s||n[3].push([r,i-o*.22,a-4,o*.3,[1,1,1,.1],Math.min(c,o*.15)]),n[4].push([r,i,a-7,o-7,O(e,`base`,.75),Math.max(0,c-3),0,1.4]);return;case`tech`:{let t=e.solid?E(e.solid,[.08,.09,.12,1],.84):[.1,.11,.14,1];if(n[0].push([r,i,a,o,O(e,`base`,.35),c,9,3]),n[1].push([r,i,a+3,o+3,[.03,.03,.05,1],c+1.5]),n[2].push([r,i,a,o,t,c]),s||n[3].push([r,i-o/2+2.5,a-2*c-4,2,[1,1,1,.12],1]),a>60&&!s)for(let e of[-.25,.25])n[3].push([r+a*e,i,1.5,o-8,[0,0,0,.55],0]);n[4].push([r,i,a-8,o-8,O(e,`base`),Math.max(0,c-4),0,1.6]),n[5].push([r,i,a-8,o-8,O(e,`core`,.7),Math.max(0,c-4),0,.6]),a>30&&o>20&&!s&&n[5].push([r+a/2-10,i,5,5,O(e,`core`),2.5]);return}case`chomper`:if(t.role===`face`){let e=Math.max(2,Math.floor((o-24)/22.5));for(let s=0;s<e;s++){let c=i-(o-24)/2+(s+.5)*(o-24)/e;le(r+t.toward*(a/2),c,15,n)}}else if(t.role===`arm`&&t.inward){let e=Math.max(1,Math.floor((a-16)/22.5));for(let s=0;s<e;s++)le(r-(a-16)/2+(s+.5)*(a-16)/e,i+t.inward*(o/2),15,n)}n[1].push([r,i,a+8,o+8,ie,c+4]),n[2].push([r,i,a,o,O(e,`base`),c]),t.role!==`hub`&&!t.round&&n[3].push([r,i+o/2-Math.min(10,o*.2)/2,a-2*Math.min(c,4),Math.min(10,o*.2),O(e,`shadow`),Math.min(c,4)]);return;case`crystal`:{let l=t.role===`rod`?[]:t.role===`arm`&&t.inward?[[r-a*.22,i-t.inward*o/2,10],[r+a*.2,i-t.inward*o/2,7]]:t.role===`face`?[[r-t.toward*a/2,i-o*.3,11],[r-t.toward*a/2,i+o*.12,8],[r-t.toward*a/2,i+o*.38,10]]:[];t.swatch&&l.push([r+a/2,i-o*.2,11],[r-a/2,i+o*.25,9],[r+a*.15,i-o/2,8]);for(let[t,r,i]of l)n[1].push([t,r,i*1.4,i*1.4,O(e,`light`,.8),2,0,0,0,0,Math.PI/4]);n[1].push([r,i,a+2,o+2,[1,1,1,.75],c+1,0,2]),n[2].push([r,i,a,o,O(e,`light`,.5),c]),n[3].push([r,i,a-8,o-8,O(e,`base`,.35),c-2,6,3]);let u=Math.min(a,o);u>20&&!s&&(n[4].push([r-a*.12,i-o*.08,2,u*.7,[1,1,1,.4],1,0,0,0,0,.6]),n[4].push([r+a*.16,i+o*.12,2,u*.45,[1,1,1,.3],1,0,0,0,0,-.5])),a>30&&o>30&&(n[5].push([r+a*.22,i-o*.28,7,7,T,1,0,0,0,0,Math.PI/4]),n[5].push([r-a*.25,i+o*.3,4,4,[1,1,1,.85],1,0,0,0,0,Math.PI/4]));return}}}const de={basic:10,neon:9,double:14,dashed:9,dotted:11,pipe:16,rope:12,rails:16,aura:10,echo:18};function fe(e,t,n,r,i,a,o=1){let s=(a??de[t])*o,c=s/de[t],l=s/2,u=e=>n+e;switch(t){case`basic`:i[2].push([0,l,u(s),s,O(e,`base`),s/2]);return;case`neon`:i[0].push([0,l,n,s,O(e,`base`,.55),s/2,15*Math.sqrt(c)]),i[2].push([0,l,u(s*.7),s*.7,O(e,`base`),s*.35]),i[4].push([0,l,u(2.4*c),2.4*c,O(e,`core`),1.2*c]);return;case`double`:{let t=4.5*c;i[2].push([0,t/2,u(t),t,O(e,`base`),t/2]),i[2].push([0,s-t/2,u(t),t,O(e,`base`),t/2]);return}case`dashed`:i[2].push([0,l,n,s,O(e,`base`),s/2,0,0,3,34*c,0,r]);return;case`dotted`:i[2].push([0,l,n,s,O(e,`base`),s/2,0,0,4,24*c,0,r]);return;case`rope`:i[1].push([0,l,u(s),s,O(e,`rim`),s/2]),i[2].push([0,l,n,s-2*c,O(e,`base`),(s-2*c)/2,0,0,5,14*c,0,r]);return;case`rails`:{let t=3.2*c;i[2].push([0,l,n,s*.86,O(e,`shadow`),1.5*c,0,0,3,13*c,0,r]),i[4].push([0,t/2+.5*c,u(t),t,O(e,`light`),t/2]),i[4].push([0,s-t/2-.5*c,u(t),t,O(e,`light`),t/2]);return}case`aura`:i[0].push([0,l,n,s,O(e,`base`,.7),s/2,26*Math.sqrt(c)]),i[2].push([0,l,u(s*.32),s*.32,O(e,`light`),s*.16]),i[4].push([0,l,u(s*.12),s*.12,O(e,`core`),s*.06]);return;case`echo`:{let t=3.6*c,n=(s-3*t)/2;i[2].push([0,t/2,u(t),t,O(e,`base`),t/2]),i[2].push([0,t*1.5+n,u(t),t,O(e,`shadow`),t/2]),i[2].push([0,s-t/2,u(t),t,O(e,`rim`),t/2]);return}case`pipe`:{let t=2*c,n=3*c;i[1].push([0,l,u(s),s,O(e,`rim`),s/2]),i[2].push([0,l,u(s-2*t),s-2*t,O(e,`base`),(s-2*t)/2]),i[3].push([0,l-s*.18,u(n),n,O(e,`shine`),n/2]);return}}}const pe=7,k=`#version 300 es
layout(location=0) in vec2 a_corner;
uniform vec2 u_world;
uniform vec4 u_rect; // x, y, w, h in world px
out vec2 v_world; out vec2 v_uv;
void main() {
  v_uv = a_corner * 0.5 + 0.5;
  v_world = u_rect.xy + vec2(v_uv.x, v_uv.y) * u_rect.zw;
  vec2 clip = v_world / u_world * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
}`;function A(e,t,n){let r=e.createProgram();for(let[i,a]of[[e.VERTEX_SHADER,t],[e.FRAGMENT_SHADER,n]]){let t=e.createShader(i);if(e.shaderSource(t,a),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(t)??`shader error`);e.attachShader(r,t)}if(e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(e.getProgramInfoLog(r)??`link error`);return r}const me=[`rod`,`block`,`arm`,`face`,`hub`];var he=class{canvas;gl;circleProgram;shardProgram;rectProgram;backgroundProgram;arenaProgram;textureProgram;circleVao;shardVao;rectVao;quadVao;blurProgram;ballBlur=0;blurTargets=null;circleBuffer;shardBuffer;rectBuffer;rectData=new Float32Array(v*21);rects=[];origins=[];u=/* @__PURE__ */ new Map;overlayTextures=/* @__PURE__ */ new Map;constructor(e,t={}){this.canvas=e;let n=e.getContext(`webgl2`,{alpha:t.transparent??!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:`high-performance`,desynchronized:!t.preserveDrawingBuffer,preserveDrawingBuffer:t.preserveDrawingBuffer??!1});if(!n)throw Error(`WebGL2 is not available`);this.gl=n,this.circleProgram=A(n,`#version 300 es
layout(location=0) in vec2 a_corner;
layout(location=1) in vec2 a_pos;
layout(location=2) in float a_radius;
layout(location=3) in vec4 a_color;
uniform vec2 u_world;
uniform vec2 u_origin; // the world point at the view's top-left (0 = the whole frame)
uniform float u_pxToWorld;
uniform float u_extentMult;
out vec2 v_local; out vec4 v_color; out float v_aa; out float v_radius; out vec2 v_world; out vec2 v_center;
void main() {
  float extent = a_radius * u_extentMult + u_pxToWorld;
  v_local = a_corner * extent / a_radius;
  v_aa = u_pxToWorld / a_radius;
  v_radius = a_radius;
  v_color = a_color;
  v_world = a_pos + a_corner * extent;
  v_center = a_pos;
  vec2 clip = (v_world - u_origin) / u_world * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
}`,`#version 300 es
precision mediump float;
in vec2 v_local; in vec4 v_color; in float v_aa; in float v_radius; in highp vec2 v_world; in highp vec2 v_center;
uniform int u_style;
uniform int u_fx;
uniform highp float u_time;
uniform float u_fxScale;
uniform vec3 u_t0; uniform vec3 u_t1; uniform vec3 u_t2;
out vec4 o;
float cover(float d, float r, float aa) { return clamp((r - d) / aa + 0.5, 0.0, 1.0); }
float hash(highp float x) { return fract(sin(x * 91.17) * 43758.55); }
vec3 hueShift(vec3 c, float a) {
  const mat3 toYIQ = mat3(0.299, 0.596, 0.211, 0.587, -0.274, -0.523, 0.114, -0.322, 0.312);
  const mat3 toRGB = mat3(1.0, 1.0, 1.0, 0.956, -0.272, -1.106, 0.621, -0.647, 1.703);
  vec3 yiq = toYIQ * c;
  float h = atan(yiq.z, yiq.y) + a, ch = length(yiq.yz);
  return clamp(toRGB * vec3(yiq.x, ch * cos(h), ch * sin(h)), 0.0, 1.0);
}
vec3 three(float f) { return f < 0.5 ? mix(u_t0, u_t1, f * 2.0) : mix(u_t1, u_t2, f * 2.0 - 1.0); }
vec3 themed(vec3 c) {
  if (u_fx == 0) return c;
  highp float t = u_time;
  float ph = fract(dot(c, vec3(3.17, 5.71, 9.33)));  // a per-color phase
  if (u_fx == 1) return hueShift(c, float(mod(t * 2.2, 6.2831853)) + ph * 6.2831853);
  if (u_fx == 2) {
    float beat = pow(max(0.0, sin(float(mod(t * 6.5, 6.2831853)) + ph)), 10.0);
    return mix(c * (0.72 + 0.45 * beat), vec3(1.0), 0.18 * beat);
  }
  if (u_fx == 3) {
    float tw = step(0.86, hash(floor(t * 9.0) + ph * 97.0 + floor(v_center.x * 0.05) * 13.0 + floor(v_center.y * 0.05) * 7.0));
    return mix(c, vec3(1.0), 0.8 * tw);
  }
  highp vec2 p = v_world * u_fxScale / 1080.0;
  if (u_fx == 4) {
    float f = 0.5 + 0.5 * sin(float(p.x * 5.0 + t * 0.8 + sin(float(p.y * 4.0 - t * 0.6)) * 1.5));
    float g = 0.5 + 0.5 * sin(float(p.y * 6.0 - t * 0.5));
    return mix(mix(u_t0, u_t1, f), u_t2, g * 0.65);
  }
  if (u_fx == 5) {
    float n = sin(float(p.x * 7.0 + sin(float(p.y * 5.0 + t)) * 2.0)) * sin(float(p.y * 6.0 - t * 0.7 + sin(float(p.x * 4.0)) * 1.5));
    return three(0.5 + 0.5 * n);
  }
  if (u_fx == 6) {
    float h = fract(float((p.x + p.y) * 2.0 - t * 0.25));
    vec3 k = clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return mix(vec3(1.0), k, 0.5) * mix(vec3(1.0), three(h), 0.25);
  }
  return three(clamp(float(p.y / 1.78), 0.0, 1.0));  // 7 skyline: fixed to the screen, top to bottom
}
void main() {
  float d = length(v_local);
  vec3 c = themed(v_color.rgb);
  if (u_style == 4) { // neon: dim glass, a glowing tube at the edge with a hot core line, a halo
    float body = cover(d, 1.0, v_aa);
    float tube = body * (1.0 - cover(d, 0.72, v_aa));
    float line = exp(-pow((d - 0.86) / 0.05, 2.0)) * body;
    float halo = (1.0 - body) * pow(clamp(1.0 - (d - 1.0) / 0.65, 0.0, 1.0), 2.4) * 0.7;
    float glass = cover(d, 0.72, v_aa) * (0.16 + 0.3 * smoothstep(0.25, 0.72, d));
    vec3 col = c * glass + min(c * 1.25, vec3(1.0)) * tube + vec3(1.0) * line * 0.8 + c * halo;
    float a = clamp(glass * 0.95 + tube + halo, 0.0, 1.0) * v_color.a;
    if (a <= 0.003) discard;
    o = vec4(col * v_color.a, a);
    return;
  }
  if (u_style == 5) { // effect ring: a thin band at the edge (shockwave, bubbles)
    float ring = cover(d, 1.0, v_aa) * (1.0 - cover(d, 0.86, v_aa));
    float a = ring * v_color.a;
    if (a <= 0.0) discard;
    o = vec4(c * a, a);
    return;
  }
  if (u_style == 8) { // pixel: 8-bit blocks, hard edges, a dark outline, a block highlight
    vec2 q = (floor(v_local * 5.0) + 0.5) / 5.0;
    float dq = length(q);
    if (dq > 1.0) discard;
    vec3 col = c;
    if (dq > 0.8) col = c * 0.38;
    else if (q.x + q.y < -0.75 && q.x < -0.15 && q.y < -0.15) col = mix(c, vec3(1.0), 0.6);
    else if (q.x + q.y > 0.55) col = c * 0.72;
    o = vec4(col * v_color.a, v_color.a);
    return;
  }
  float outer = cover(d, 1.0, v_aa);
  if (outer <= 0.0) discard;
  vec3 col = c;
  float alpha = 1.0;
  if (u_style == 0) {
    col = c * 0.45;
    col = mix(col, c, cover(d, floor(v_radius * 0.91) / v_radius, v_aa));
    col = mix(col, c * 0.70, cover(length(v_local - vec2(0.16, 0.18)), floor(v_radius * 0.62) / v_radius, v_aa));
    float e = length((v_local - vec2(-0.32, -0.34)) / vec2(0.22, 0.14));
    col = mix(col, c + (1.0 - c) * 0.8, clamp((1.0 - e) * 0.14 / v_aa + 0.5, 0.0, 1.0));
  } else if (u_style == 2) {
    col = mix(c * 0.35, c, cover(d, 0.78, v_aa));
  } else if (u_style == 3) {
    col = c * (1.08 - 0.38 * (v_local.y * 0.5 + 0.5));
    float shine = 1.0 - smoothstep(0.0, 0.5, length((v_local - vec2(-0.25, -0.42)) / vec2(0.62, 0.34)));
    col = mix(col, vec3(1.0), shine * 0.7);
    col *= 1.0 - 0.35 * smoothstep(0.85, 1.0, d);
  } else if (u_style == 6) { // glass: a see-through tinted bubble with a bright rim and reflections
    float rim = 1.0 - cover(d, 0.84, v_aa);
    float spot = 1.0 - smoothstep(0.0, 1.0, length((v_local - vec2(-0.36, -0.42)) / vec2(0.3, 0.17)));
    float arc = exp(-pow((d - 0.7) / 0.07, 2.0)) * smoothstep(0.1, 0.6, v_local.y) * smoothstep(-0.2, 0.4, v_local.x);
    col = mix(c * 0.6, min(c * 1.4 + 0.15, vec3(1.0)), rim);
    col = mix(col, vec3(1.0), max(spot * 0.9, arc * 0.6));
    alpha = clamp(0.32 + rim * 0.6 + spot * 0.6 + arc * 0.4, 0.0, 1.0);
  } else if (u_style == 7) { // marble: a swirl of the color and a lighter vein, with a gloss
    float ph = fract(dot(v_color.rgb, vec3(3.1, 5.7, 9.3))) * 6.2831853;
    float ang = atan(v_local.y, v_local.x);
    float sw = sin(ang * 2.0 + d * 7.0 + ph + sin(d * 5.0 + ph * 1.7) * 1.4);
    col = mix(c * 0.68, mix(c, vec3(1.0), 0.6), smoothstep(-0.15, 0.7, sw));
    col *= 1.0 - 0.3 * smoothstep(0.75, 1.0, d);
    float shine = 1.0 - smoothstep(0.0, 0.45, length((v_local - vec2(-0.3, -0.38)) / vec2(0.5, 0.3)));
    col = mix(col, vec3(1.0), shine * 0.55);
  }
  float a = v_color.a * outer * alpha;
  o = vec4(col * a, a);
}`),this.shardProgram=A(n,`#version 300 es
layout(location=1) in vec2 a_pos;
layout(location=2) in float a_size;
layout(location=3) in float a_angle;
layout(location=4) in vec4 a_fracs;
layout(location=5) in vec4 a_color;
uniform vec2 u_world;
uniform vec2 u_origin;
out vec4 v_color;
const int ORDER[6] = int[6](0, 1, 2, 0, 2, 3);
void main() {
  bool tri = a_fracs.w < 0.0;
  int k = ORDER[gl_VertexID];
  if (tri && k == 3) k = 2;
  float n = tri ? 3.0 : 4.0;
  float f = k == 0 ? a_fracs.x : k == 1 ? a_fracs.y : k == 2 ? a_fracs.z : a_fracs.w;
  float ang = a_angle + float(k) * 6.28318530718 / n;
  vec2 world = a_pos + vec2(cos(ang), sin(ang)) * a_size * f;
  v_color = a_color;
  vec2 clip = (world - u_origin) / u_world * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
}`,`#version 300 es
precision mediump float;
in vec4 v_color;
out vec4 o;
void main() { o = vec4(v_color.rgb * v_color.a, v_color.a); }`),this.rectProgram=A(n,`#version 300 es
layout(location=0) in vec2 a_corner;
layout(location=1) in vec2 a_center;
layout(location=2) in vec2 a_half;
layout(location=3) in vec4 a_color;
layout(location=4) in float a_cornerRadius;
layout(location=5) in float a_angle;
layout(location=6) in vec2 a_local;
layout(location=7) in float a_paint;
layout(location=8) in vec2 a_fx; // x: soft glow radius (halo), y: ring width (outline only; 0 = filled)
layout(location=9) in vec2 a_pattern; // x: 0 none, 1 diagonal stripes, 2 pixel checker; y: size
layout(location=11) in float a_phase; // pattern position along the line (dashes, dots run on across segments)
layout(location=10) in vec3 a_bend; // x: radius of curvature (0 = straight); yz: this rect's center in its part's (along, across) frame
uniform vec4 u_view; // the part of the world shown: x, y, w, h (whole world normally)
uniform float u_pxToWorld;
out vec2 v_p; out vec2 v_half; out vec4 v_color; out float v_cornerRadius; out vec2 v_local; out float v_paint; out vec2 v_fx; out vec2 v_pattern; out float v_phase;
void main() {
  v_pattern = a_pattern;
  v_phase = a_phase;
  vec2 extent = a_half + a_fx.y * 0.5 + a_fx.x * 1.6 + u_pxToWorld;
  v_fx = a_fx;
  v_p = a_corner * extent;
  v_half = a_half;
  v_color = a_color;
  v_cornerRadius = a_cornerRadius;
  v_local = a_local + v_p;
  v_paint = a_paint;
  vec2 world;
  if (a_bend.x != 0.0) {
    // Bent: a_center = the arc's center, a_angle = the angle at the part's middle;
    // along the part = along the arc, across = outward from its center.
    vec2 st = a_bend.yz + v_p;
    float th = a_angle + st.x / a_bend.x;
    world = a_center + (a_bend.x + st.y) * vec2(cos(th), sin(th));
  } else {
    float c = cos(a_angle), s = sin(a_angle);
    world = a_center + vec2(v_p.x * c - v_p.y * s, v_p.x * s + v_p.y * c);
  }
  vec2 clip = (world - u_view.xy) / u_view.zw * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
}`,`#version 300 es
precision mediump float;
in vec2 v_p; in vec2 v_half; in vec4 v_color; in float v_cornerRadius; in vec2 v_local; in float v_paint; in vec2 v_fx; in vec2 v_pattern; in float v_phase;
uniform highp float u_pxToWorld;
uniform int u_paintMode;      // 1 gradient, 2 looping gradient, 3 rainbow, 4 polished metal (a light, b base, c dark)
uniform vec3 u_pa; uniform vec3 u_pb; uniform vec3 u_pc;
uniform float u_paintOffset;
uniform vec2 u_paintSpan;     // local y where the paint starts, and its length
out vec4 o;
vec3 hue(float h) {
  vec3 k = clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return mix(vec3(1.0), k, 0.78);
}
vec3 paintAt(float t) {
  if (u_paintMode == 1) return t < 0.5 ? mix(u_pa, u_pb, t * 2.0) : mix(u_pb, u_pc, t * 2.0 - 1.0);
  if (u_paintMode == 2) {
    float x = fract(t + u_paintOffset) * 3.0;
    return x < 1.0 ? mix(u_pa, u_pb, x) : x < 2.0 ? mix(u_pb, u_pc, x - 1.0) : mix(u_pc, u_pa, x - 2.0);
  }
  if (u_paintMode == 4) {
    // Heavy, expensive metal (owner: the old hard 'horizon' stripe and strong
    // streaks looked goofy): a SOFT reflection - mostly the mid tone, a gentle
    // lighter top, a darker bottom, a broad faint highlight. No hard line.
    vec3 m = mix(mix(u_pa, u_pb, 0.62), u_pb, smoothstep(0.0, 0.45, t));
    m = mix(m, mix(u_pb, u_pc, 0.55), smoothstep(0.42, 1.0, t));
    return m + vec3(0.07) * exp(-pow((t - 0.18) / 0.12, 2.0));
  }
  return hue(fract(t * 0.8 - u_paintOffset));
}
float hash(float x) { return fract(sin(x * 91.17) * 43758.55); }
void main() {
  float r = min(v_cornerRadius, min(v_half.x, v_half.y));
  vec2 q = abs(v_p) - v_half + r;
  float sd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  if (v_fx.y > 0.0) sd = abs(sd) - v_fx.y * 0.5;          // ring: just the outline
  float cover;
  if (v_fx.x > 0.0) {                                       // halo: soft falloff outward
    float g = max(sd, 0.0) / v_fx.x;
    cover = exp(-g * g * 2.5);
  } else {
    cover = clamp(-sd / u_pxToWorld + 0.5, 0.0, 1.0);
  }
  if (v_pattern.x > 2.5 && v_pattern.x < 3.5) {        // dashes along the line
    if (fract((v_p.x + v_phase) / v_pattern.y) > 0.56) cover = 0.0;
  } else if (v_pattern.x > 3.5 && v_pattern.x < 5.5) { // round dots along the line (and the rope, as it always was) - not the ram textures 6-8
    float u = mod(v_p.x + v_phase, v_pattern.y) - v_pattern.y * 0.5;
    cover = min(cover, clamp((v_half.y - length(vec2(u, v_p.y))) / u_pxToWorld + 0.5, 0.0, 1.0));
  }
  if (cover <= 0.004) discard;
  vec3 color = v_color.rgb;
  float alpha = v_color.a;
  if (v_paint > 0.5) {
    vec3 p = paintAt(clamp((v_local.y - u_paintSpan.x) / u_paintSpan.y, 0.0, 1.0));
    int code = int(v_paint + 0.5);
    if (u_paintMode == 4) {
      // Faint, uneven brushing (barely there - real metal, not a pattern).
      p *= 0.975 + 0.035 * (hash(floor(v_local.y * 1.7)) * 0.5 + hash(floor(v_local.y * 0.35) + 17.0) * 0.5);
      // Low-contrast mottle: wear and tiny unevenness, so it isn't perfectly smooth.
      vec2 cell = floor(v_local / 22.0);
      vec2 f = fract(v_local / 22.0);
      f = f * f * (3.0 - 2.0 * f);
      float n00 = hash(cell.x * 7.1 + cell.y * 131.7), n10 = hash((cell.x + 1.0) * 7.1 + cell.y * 131.7);
      float n01 = hash(cell.x * 7.1 + (cell.y + 1.0) * 131.7), n11 = hash((cell.x + 1.0) * 7.1 + (cell.y + 1.0) * 131.7);
      p *= 0.955 + 0.06 * mix(mix(n00, n10, f.x), mix(n01, n11, f.x), f.y);
      // A soft machined edge: lit top-left, shaded bottom-right.
      vec2 e = v_half - abs(v_p);
      float edge = 1.0 - smoothstep(0.0, 4.0, min(e.x, e.y));
      vec2 dir = normalize(v_p / max(v_half, vec2(1.0)) + 1e-4);
      p += edge * dot(dir, vec2(-0.55, -0.83)) * 0.16;
      // The glint: a sheen sweeping across now and then (simulation clock) - kept (owner likes it).
      float sweep = fract((v_local.x * 0.5 + v_local.y) / 900.0 - u_paintOffset);
      p += vec3(0.26) * exp(-pow((sweep - 0.5) / 0.02, 2.0));
      p = clamp(p, 0.0, 1.0);
    }
    color = code == 2 ? p * 0.44 : code == 3 ? mix(p, vec3(1.0), 0.5) : code == 4 ? p * 0.55 : code == 5 ? p * 0.4
      : code == 6 ? mix(p, vec3(1.0), 0.45) : code == 7 ? mix(p, vec3(1.0), 0.8) : code == 8 ? p * 0.68
      : code == 9 ? mix(p, vec3(1.0), 0.28) : p;
  }
  if (v_pattern.x > 5.5 && v_pattern.x < 6.5) {        // wood grain: wavy rings along the plank, a few darker streaks
    float y = v_p.y + sin(v_p.x / 41.0) * 3.2 + sin(v_p.x / 13.0 + v_p.y * 0.05) * 1.1;
    float ring = 0.5 + 0.5 * sin(y * 6.2831853 / v_pattern.y);
    float streak = smoothstep(0.82, 1.0, fract(sin(floor(y / v_pattern.y) * 37.7) * 4375.5));
    color *= 0.86 + 0.16 * ring - 0.12 * streak;
  } else if (v_pattern.x > 6.5 && v_pattern.x < 7.5) { // carbon fiber: a 2x2 twill weave, each tow lit across its width
    vec2 c = floor(v_p / v_pattern.y), f = fract(v_p / v_pattern.y);
    float t = mod(c.x + c.y, 2.0) < 1.0 ? f.y : f.x;
    color *= 0.72 + 0.42 * sin(t * 3.14159);
  } else if (v_pattern.x > 8.5 && v_pattern.x < 9.5) { // granite: mineral grains at two scales over a cloudy stone
    vec2 g1 = floor(v_p / v_pattern.y), g2 = floor(v_p / (v_pattern.y * 0.5)), g3 = floor(v_p / (v_pattern.y * 6.0));
    float a = hash(g1.x * 13.1 + g1.y * 271.7), b = hash(g2.x * 7.7 + g2.y * 157.3 + 3.0), c = hash(g3.x * 3.3 + g3.y * 91.1 + 9.0);
    color *= 0.9 + 0.14 * c;                                    // cloudy variation
    if (a > 0.84) color = mix(color, vec3(0.06, 0.06, 0.07), 0.78);  // dark mica / hornblende grains
    else if (a < 0.09) color = mix(color, vec3(0.93, 0.92, 0.9), 0.62);  // light quartz grains
    color *= 0.93 + 0.12 * b;                                   // fine grit
  }
  if (v_pattern.x > 4.5 && v_pattern.x < 5.5) {
    float u = fract((v_p.x + v_phase + v_p.y * 1.6) / v_pattern.y);
    color *= 0.62 + 0.38 * smoothstep(0.0, 0.18, u) * (1.0 - smoothstep(0.44, 0.62, u));  // dark grooves between the strands
  }
  if (v_pattern.x > 0.5 && v_pattern.x < 2.5) {
    if (v_pattern.x < 1.5) {
      // Diagonal warning stripes: every other band near black.
      if (fract((v_p.x + v_p.y) / (2.0 * v_pattern.y)) < 0.5) color *= 0.12; // pinned to this rect
    } else {
      // Pixel checker: a faint two-tone grid.
      vec2 cell = floor(v_p / v_pattern.y);
      color *= mod(cell.x + cell.y, 2.0) < 0.5 ? 0.93 : 1.05;
    }
  }
  o = vec4(color * cover * alpha, cover * alpha);
}`),this.backgroundProgram=A(n,k,`#version 300 es
precision mediump float;
in highp vec2 v_world; in vec2 v_uv;
uniform vec3 u_top; uniform vec3 u_bottom;
uniform int u_mode;
uniform highp float u_time;
out vec4 o;
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec3 c = u_top;
  if (u_mode == 1) c = mix(u_top, u_bottom, v_uv.y);
  else if (u_mode == 2) c = mix(u_bottom, u_top, smoothstep(0.0, 0.85, length((v_uv - 0.5) * vec2(1.0, 1.7))));
  else if (u_mode == 3) c = mix(u_top, u_bottom, clamp((v_uv.x + v_uv.y) * 0.5, 0.0, 1.0));
  else if (u_mode == 4) {
    vec2 g = abs(fract(v_world / 60.0 - 0.5) - 0.5) * 60.0;   // distance to the nearest line, px
    float w = fwidth(v_world.x) * 1.2 + 0.8;
    float line = 1.0 - smoothstep(w * 0.5, w * 0.5 + fwidth(v_world.x), min(g.x, g.y));
    c = mix(u_top, u_bottom, line * 0.55);
  } else if (u_mode == 5) {
    vec2 q = fract(v_world / 48.0) - 0.5;
    float d = length(q) * 48.0;
    c = mix(u_top, u_bottom, (1.0 - smoothstep(3.0, 3.0 + fwidth(v_world.x) * 1.5, d)) * 0.6);
  } else if (u_mode == 6) {
    c = mix(u_top, u_top * 0.55 + u_bottom * 0.15, v_uv.y);
    vec2 cell = floor(v_world / 26.0);
    float h = hash2(cell);
    if (h > 0.86) {
      vec2 at = (cell + vec2(hash2(cell + 7.0), hash2(cell + 13.0))) * 26.0;
      float r = 0.7 + 1.6 * hash2(cell + 3.0);
      float tw = 0.55 + 0.45 * sin(float(u_time) * (1.5 + 3.0 * hash2(cell + 5.0)) + h * 40.0);
      float star = (1.0 - smoothstep(r * 0.4, r + fwidth(v_world.x), length(v_world - at))) * tw;
      c = mix(c, mix(vec3(1.0), u_bottom, 0.25), star);
    }
  } else if (u_mode == 7) {
    highp float t = u_time * 0.25;
    float b1 = 0.5 + 0.5 * sin(float(v_uv.y * 5.0 + sin(float(v_uv.x * 3.0 + t)) * 1.4 + t));
    float b2 = 0.5 + 0.5 * sin(float(v_uv.y * 8.0 - v_uv.x * 2.0 - t * 1.3));
    c = mix(u_top, u_bottom, pow(b1 * 0.75 + b2 * 0.25, 2.0) * 0.85);
  } else if (u_mode == 8) {
    vec2 p = (v_uv - 0.5) * vec2(1.0, 1.78);
    float ray = 0.5 + 0.5 * cos(atan(p.y, p.x) * 14.0 + float(mod(u_time * 0.35, 6.2831853)));
    float glow = 1.0 - smoothstep(0.0, 0.9, length(p));
    c = mix(u_top, u_bottom, smoothstep(0.35, 0.65, ray) * (0.35 + 0.4 * glow) + glow * 0.25);
  } else if (u_mode == 9) {
    highp float t = u_time * 0.6;
    float w = sin(float(v_world.y / 70.0 + sin(float(v_world.x / 160.0 + t)) * 1.3 + t * 0.5));
    c = mix(u_top, u_bottom, smoothstep(-0.2, 0.9, w) * 0.65);
  }
  o = vec4(c, 1.0);
}`),this.arenaProgram=A(n,k,`#version 300 es
precision mediump float;
in vec2 v_world;
uniform vec2 u_center;
uniform float u_inner;
uniform float u_width;
uniform float u_sides;
uniform highp float u_pxToWorld;
uniform vec4 u_color;
uniform float u_glow;
out vec4 o;
void main() {
  vec2 p = v_world - u_center;
  float dist;
  if (u_sides < 3.0) {
    dist = length(p);
  } else {
    dist = -1e9;
    for (int k = 0; k < 8; k++) {
      if (float(k) >= u_sides) break;
      float a = 6.28318530718 * float(k) / u_sides;
      dist = max(dist, dot(p, vec2(cos(a), sin(a))));
    }
  }
  float mid = u_inner + u_width * 0.5;
  float sd = abs(dist - mid) - u_width * 0.5;
  float band = clamp(-sd / u_pxToWorld + 0.5, 0.0, 1.0);
  float a = band;
  if (u_glow > 0.0) a = max(a, pow(clamp(1.0 - sd / u_glow, 0.0, 1.0), 2.2) * 0.55);
  if (a <= 0.0) discard;
  a *= u_color.a;
  o = vec4(u_color.rgb * a, a);
}`),this.textureProgram=A(n,k,`#version 300 es
precision mediump float;
in vec2 v_uv;
uniform sampler2D u_tex;
out vec4 o;
void main() { o = texture(u_tex, v_uv); }`),this.blurProgram=A(n,k,`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_tex;
uniform vec2 u_step;
out vec4 o;
void main() {
  vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);
  vec4 c = texture(u_tex, uv) * 0.2270270;
  c += (texture(u_tex, uv + u_step * 1.3846154) + texture(u_tex, uv - u_step * 1.3846154)) * 0.3162162;
  c += (texture(u_tex, uv + u_step * 3.2307692) + texture(u_tex, uv - u_step * 3.2307692)) * 0.0702703;
  o = c;
}`);for(let e of[`u_world`,`u_rect`,`u_tex`,`u_step`])this.u.set(`blur.${e}`,n.getUniformLocation(this.blurProgram,e));let r=/* @__PURE__ */ `u_world.u_mode.u_origin.u_fx.u_time.u_fxScale.u_t0.u_t1.u_t2.u_view.u_paintMode.u_pa.u_pb.u_pc.u_paintOffset.u_paintSpan.u_pxToWorld.u_style.u_extentMult.u_rect.u_top.u_bottom.u_center.u_inner.u_width.u_sides.u_color.u_glow.u_tex`.split(`.`),i={c:this.circleProgram,s:this.shardProgram,r:this.rectProgram,b:this.backgroundProgram,a:this.arenaProgram,t:this.textureProgram};for(let[e,t]of Object.entries(i))for(let i of r)this.u.set(`${e}.${i}`,n.getUniformLocation(t,i));let a=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,a),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW);let o=()=>{n.bindBuffer(n.ARRAY_BUFFER,a),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0)};this.circleBuffer=n.createBuffer(),this.circleVao=n.createVertexArray(),n.bindVertexArray(this.circleVao),o(),n.bindBuffer(n.ARRAY_BUFFER,this.circleBuffer),this.circleAttribs(0),this.shardBuffer=n.createBuffer(),this.shardVao=n.createVertexArray(),n.bindVertexArray(this.shardVao),n.bindBuffer(n.ARRAY_BUFFER,this.shardBuffer);let s=(e,t,r,i,a)=>{n.enableVertexAttribArray(e),n.vertexAttribPointer(e,t,r,i,36,a),n.vertexAttribDivisor(e,1)};s(1,2,n.FLOAT,!1,0),s(2,1,n.FLOAT,!1,8),s(3,1,n.FLOAT,!1,12),s(4,4,n.FLOAT,!1,16),s(5,4,n.UNSIGNED_BYTE,!0,32),this.rectBuffer=n.createBuffer(),this.rectVao=n.createVertexArray(),n.bindVertexArray(this.rectVao);let c=/* @__PURE__ */ new Float32Array(100);for(let e=0;e<=24;e++){let t=-1+2*e/24;c.set([t,-1,t,1],e*4)}let l=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l),n.bufferData(n.ARRAY_BUFFER,c,n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this.rectBuffer),n.bufferData(n.ARRAY_BUFFER,this.rectData.byteLength,n.DYNAMIC_DRAW);for(let[e,t,r]of[[1,2,0],[2,2,8],[3,4,16],[4,1,32],[5,1,36],[6,2,40],[7,1,48],[8,2,52],[9,2,60],[10,3,68],[11,1,80]])n.enableVertexAttribArray(e),n.vertexAttribPointer(e,t,n.FLOAT,!1,84,r),n.vertexAttribDivisor(e,1);this.quadVao=n.createVertexArray(),n.bindVertexArray(this.quadVao),o(),n.bindVertexArray(null),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA)}circleAttribs(e){let t=this.gl,n=e*16,r=(e,r,i,a,o)=>{t.enableVertexAttribArray(e),t.vertexAttribPointer(e,r,i,a,16,n+o),t.vertexAttribDivisor(e,1)};r(1,2,t.FLOAT,!1,0),r(2,1,t.FLOAT,!1,8),r(3,4,t.UNSIGNED_BYTE,!0,12)}resize(e,t){this.canvas.width=e,this.canvas.height=t}moveOverlay(e,t,n){let r=this.overlayTextures.get(e);r&&(r.overlay.x=t,r.overlay.y=n)}setOverlay(e,t){let n=this.overlayTextures.get(e);if(!t){n&&(this.gl.deleteTexture(n.texture),this.overlayTextures.delete(e));return}if(n){n.overlay=t,n.dirty=!0;return}let r=this.gl.createTexture();this.overlayTextures.set(e,{texture:r,overlay:t,dirty:!0})}draw(e,t,n,r,i=0){let a=this.gl,o=g/this.canvas.width;a.viewport(0,0,this.canvas.width,this.canvas.height),this.drawBackground(r.background,i,g,_),!e.arenaBroken&&e.arena.length&&this.drawArena(e.arena,r.arena,i,[e.centerX,e.centerY],[0,0,g,_],o),this.drawRams(e,r,i,[0,0,g,_],o,0);let s=this.ballBlur>.01&&e.ballInstances>0;if(s&&this.beginBallLayer(),a.useProgram(this.circleProgram),a.bindVertexArray(this.circleVao),a.uniform2f(this.u.get(`c.u_world`),g,_),a.uniform2f(this.u.get(`c.u_origin`),0,0),a.uniform1f(this.u.get(`c.u_pxToWorld`),o),a.bindBuffer(a.ARRAY_BUFFER,this.circleBuffer),a.bufferData(a.ARRAY_BUFFER,t,a.STREAM_DRAW),e.ballInstances>0){let t=b[r.ballStyle];this.setTheme(r.theme,i,1),this.circleAttribs(0),a.uniform1i(this.u.get(`c.u_style`),t),a.uniform1f(this.u.get(`c.u_extentMult`),t===4?1.7:1),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,4,e.ballInstances)}if(s&&this.endBallLayer(),this.drawRams(e,r,i,[0,0,g,_],o,1),e.shockAlpha>0){let t=e.shockRadius;a.useProgram(this.arenaProgram),a.bindVertexArray(this.quadVao),a.uniform2f(this.u.get(`a.u_world`),g,_),a.uniform4f(this.u.get(`a.u_rect`),e.centerX-t-80,e.centerY-t-80,(t+80)*2,(t+80)*2),a.uniform2f(this.u.get(`a.u_center`),e.centerX,e.centerY),a.uniform1f(this.u.get(`a.u_inner`),t),a.uniform1f(this.u.get(`a.u_width`),14),a.uniform1f(this.u.get(`a.u_sides`),0),a.uniform1f(this.u.get(`a.u_pxToWorld`),o),a.uniform4f(this.u.get(`a.u_color`),1,1,1,e.shockAlpha),a.uniform1f(this.u.get(`a.u_glow`),30),a.drawArrays(a.TRIANGLE_STRIP,0,4)}if(this.drawEffects(e,n,[0,0],[g,_]),this.overlayTextures.size>0){a.useProgram(this.textureProgram),a.bindVertexArray(this.quadVao),a.uniform2f(this.u.get(`t.u_world`),g,_),a.uniform1i(this.u.get(`t.u_tex`),0),a.activeTexture(a.TEXTURE0);for(let e of this.overlayTextures.values()){a.bindTexture(a.TEXTURE_2D,e.texture),e.dirty&&=(a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,e.overlay.canvas),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),!1);let t=e.overlay;a.uniform4f(this.u.get(`t.u_rect`),t.x,t.y,t.w,t.h),a.drawArrays(a.TRIANGLE_STRIP,0,4)}}a.bindVertexArray(null)}beginBallLayer(){let e=this.gl,t=Math.max(1,Math.ceil(this.canvas.width/2)),n=Math.max(1,Math.ceil(this.canvas.height/2));if(!this.blurTargets||this.blurTargets.w!==t||this.blurTargets.h!==n){if(this.blurTargets){for(let t of this.blurTargets.tex)e.deleteTexture(t);for(let t of this.blurTargets.fbo)e.deleteFramebuffer(t)}let r=[],i=[];for(let a=0;a<2;a++){let a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),r.push(a),i.push(o)}this.blurTargets={w:t,h:n,tex:r,fbo:i}}e.bindFramebuffer(e.FRAMEBUFFER,this.blurTargets.fbo[0]),e.viewport(0,0,t,n),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)}endBallLayer(){let e=this.gl,t=this.blurTargets,n=Math.min(1,this.ballBlur)*1.6;e.useProgram(this.blurProgram),e.bindVertexArray(this.quadVao),e.uniform2f(this.u.get(`blur.u_world`),g,_),e.uniform4f(this.u.get(`blur.u_rect`),0,0,g,_),e.uniform1i(this.u.get(`blur.u_tex`),0),e.activeTexture(e.TEXTURE0),e.disable(e.BLEND);for(let[r,i,a]of[[0,1,0],[1,0,1],[0,1,0]])e.bindFramebuffer(e.FRAMEBUFFER,t.fbo[i]),e.bindTexture(e.TEXTURE_2D,t.tex[r]),e.uniform2f(this.u.get(`blur.u_step`),a?0:n/t.w,a?n/t.h:0),e.drawArrays(e.TRIANGLE_STRIP,0,4);e.enable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,this.canvas.width,this.canvas.height),e.bindTexture(e.TEXTURE_2D,t.tex[1]),e.uniform2f(this.u.get(`blur.u_step`),0,n/t.h),e.drawArrays(e.TRIANGLE_STRIP,0,4)}drawRams(e,t,n,r,i,a){let o=s(t.ram.paint,n),c=se(t.ram.style,t.ram.paint,o,n);this.rects.length=0,this.origins.length=0;let l=e.parts,u=e.machineKind>=2&&e.machineKind<=6;for(let e=0;e+10<=l.length;e+=10){if(l[e+8]!==a)continue;let t=l[e+5]===5,n=t?`arm`:me[l[e+5]]??`face`,r={cx:0,cy:0,w:l[e+3],h:l[e+4],role:n,toward:l[e+6]||1,round:t,rich:u};l[e+7]&&(r.inward=l[e+7]);let i=ce();ue(c,r,i);for(let t of i)for(let n of t)this.rects.push(n),this.origins.push([l[e],l[e+1],l[e+2],l[e+9]])}this.rects.length!==0&&this.drawRects({x:e.machineX,y:e.machineY,angle:e.machineAngle},o,[e.paintY0,e.paintLen],r,i)}drawRects(e,t,n,r,i){let a=this.gl,o=this.rectData,s=Math.min(this.rects.length,v),c=Math.cos(e.angle),l=Math.sin(e.angle);for(let t=0;t<s;t++){let[n,r,i,a,s,u]=this.rects[t],[d,f,p,m]=this.origins[t]??[e.x,e.y,e.angle,0],h=Math.cos(p),ee=Math.sin(p),g=t*21,_,v;if(m){let e=p+n/m;_=d+(m+r)*Math.cos(e),v=f+(m+r)*Math.sin(e),o[g]=d,o[g+1]=f}else _=d+n*h-r*ee,v=f+n*ee+r*h,o[g]=_,o[g+1]=v;o[g+17]=m,o[g+18]=n,o[g+19]=r,o[g+20]=this.rects[t][11]??0,o[g+2]=i/2,o[g+3]=a/2;let te=this.rects[t][6]??0,ne=this.rects[t][7]??0,y=s.length===2,b=y?s[0]:0,x=y?[0,0,0,s[1]]:s;o[g+4]=x[0],o[g+5]=x[1],o[g+6]=x[2],o[g+7]=x[3]??1,o[g+8]=u,o[g+9]=p+(m?0:this.rects[t][10]??0);let S=_-e.x,C=v-e.y;o[g+10]=S*c+C*l,o[g+11]=-S*l+C*c,o[g+12]=b,o[g+13]=te,o[g+14]=ne,o[g+15]=this.rects[t][8]??0,o[g+16]=this.rects[t][9]??0}a.useProgram(this.rectProgram),a.bindVertexArray(this.rectVao),a.uniform4f(this.u.get(`r.u_view`),r[0],r[1],r[2],r[3]),a.uniform1f(this.u.get(`r.u_pxToWorld`),i),a.uniform1i(this.u.get(`r.u_paintMode`),t.mode),a.uniform3fv(this.u.get(`r.u_pa`),t.a),a.uniform3fv(this.u.get(`r.u_pb`),t.b),a.uniform3fv(this.u.get(`r.u_pc`),t.c),a.uniform1f(this.u.get(`r.u_paintOffset`),t.offset),a.uniform2f(this.u.get(`r.u_paintSpan`),n[0],n[1]),a.bindBuffer(a.ARRAY_BUFFER,this.rectBuffer),a.bufferSubData(a.ARRAY_BUFFER,0,o,0,s*21),a.drawArraysInstanced(a.TRIANGLE_STRIP,0,50,s)}drawArena(e,t,n,r,i,a){let o=this.gl,c=s(t.paint,n),l={style:`flat`,solid:c.mode===0?[...c.a,1]:null,signatureGray:!1,time:n},u=[0,1,2,3,4,5].map(()=>({rects:[],origins:[]}));for(let n=0;n+5<=e.length;n+=5){let r=e[n],i=e[n+1],a=e[n+2],o=e[n+3],s=Math.hypot(a-r,o-i);if(s<.01)continue;let c=ce();fe(l,t.style,s,e[n+4]+s/2,c,t.thickness,t.scale??1);let d=[(r+a)/2,(i+o)/2,Math.atan2(o-i,a-r),0];c.forEach((e,t)=>{for(let n of e)u[t].rects.push(n),u[t].origins.push(d)})}for(let e=0;e<u.length;e++)if(u[e].rects.length){e===0&&o.blendEquation(o.MAX);for(let t=0;t<u[e].rects.length;t+=v)this.rects=u[e].rects.slice(t,t+v),this.origins=u[e].origins.slice(t,t+v),this.drawRects({x:r[0],y:r[1],angle:0},c,[-470,940],i,a);e===0&&o.blendEquation(o.FUNC_ADD)}this.rects=[],this.origins=[]}drawArenaSwatch(e,t,n){let r=this.gl,i=this.canvas.height;r.enable(r.SCISSOR_TEST),r.scissor(n*i,0,i,i),r.viewport(n*i,0,i,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.disable(r.SCISSOR_TEST);let a=1100;this.drawArena(e,{style:`basic`,paint:`#e9e4ff`,thickness:60},0,t,[t[0]-a/2,t[1]-a/2,a,a],a/i)}drawLineSwatch(e,t,n=0){let r=this.gl;r.viewport(0,0,this.canvas.width,this.canvas.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT);let i=[];for(let e=0;e<=24;e++){let t=e/24,n=-10+t*140;i.push([n,48+30*Math.sin(t*Math.PI*1.1-.3)])}let a=/* @__PURE__ */ new Float32Array(120),o=0;for(let e=0;e<24;e++)a.set([i[e][0],i[e][1],i[e+1][0],i[e+1][1],o],e*5),o+=Math.hypot(i[e+1][0]-i[e][0],i[e+1][1]-i[e][1]);this.drawArena(a,{style:e,paint:t},n,[60,60],[0,0,120,120],120/this.canvas.width)}drawBackground(e,t,n,r){let i=this.gl;e.mode===0?(i.clearColor(e.top[0],e.top[1],e.top[2],1),i.clear(i.COLOR_BUFFER_BIT)):(i.useProgram(this.backgroundProgram),i.bindVertexArray(this.quadVao),i.uniform2f(this.u.get(`b.u_world`),n,r),i.uniform4f(this.u.get(`b.u_rect`),0,0,n,r),i.uniform3fv(this.u.get(`b.u_top`),e.top),i.uniform3fv(this.u.get(`b.u_bottom`),e.bottom),i.uniform1i(this.u.get(`b.u_mode`),e.mode),i.uniform1f(this.u.get(`b.u_time`),t),i.disable(i.BLEND),i.drawArrays(i.TRIANGLE_STRIP,0,4),i.enable(i.BLEND))}drawBackgroundSwatch(e,t,n,r=0){this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.drawBackground({mode:e,top:D(t),bottom:D(n)},r,400,400)}drawEffects(e,t,n,r){let i=this.gl;i.useProgram(this.circleProgram),i.uniform1i(this.u.get(`c.u_fx`),0),i.bindVertexArray(this.circleVao),i.bindBuffer(i.ARRAY_BUFFER,this.circleBuffer),i.uniform2f(this.u.get(`c.u_world`),r[0],r[1]),i.uniform2f(this.u.get(`c.u_origin`),n[0],n[1]),i.uniform1f(this.u.get(`c.u_extentMult`),1),e.flashInstances>0&&(this.circleAttribs(e.ballInstances),i.uniform1i(this.u.get(`c.u_style`),1),i.drawArraysInstanced(i.TRIANGLE_STRIP,0,4,e.flashInstances)),e.ringInstances>0&&(this.circleAttribs(e.ballInstances+e.flashInstances),i.uniform1i(this.u.get(`c.u_style`),5),i.drawArraysInstanced(i.TRIANGLE_STRIP,0,4,e.ringInstances)),e.shardInstances>0&&(i.useProgram(this.shardProgram),i.bindVertexArray(this.shardVao),i.uniform2f(this.u.get(`s.u_world`),r[0],r[1]),i.uniform2f(this.u.get(`s.u_origin`),n[0],n[1]),i.bindBuffer(i.ARRAY_BUFFER,this.shardBuffer),i.bufferData(i.ARRAY_BUFFER,t,i.STREAM_DRAW),i.drawArraysInstanced(i.TRIANGLES,0,6,e.shardInstances))}setTheme(e,t,n){let r=this.gl;r.useProgram(this.circleProgram),r.uniform1i(this.u.get(`c.u_fx`),e.fx),r.uniform1f(this.u.get(`c.u_time`),t),r.uniform1f(this.u.get(`c.u_fxScale`),n),r.uniform3fv(this.u.get(`c.u_t0`),e.colors[0]),r.uniform3fv(this.u.get(`c.u_t1`),e.colors[1]),r.uniform3fv(this.u.get(`c.u_t2`),e.colors[2])}drawBallSwatch(e,t,n=0){let r=this.gl,i=this.canvas.height;r.enable(r.SCISSOR_TEST),r.scissor(n*i,0,i,i),r.viewport(n*i,0,i,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.disable(r.SCISSOR_TEST);let a=e=>{let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]},o=(e,n)=>t?a(t.colors[e%t.colors.length]):n,s=120/52,c=t?[[13,17],[26,14],[39,17],[13,36],[26,39],[39,36]].map(([e,t],n)=>[e*s,t*s,9*s,o(n,[255,255,255])]):[[52,62,30,o(0,[244,114,182])],[88,34,18,o(1,[34,211,238])],[92,88,15,o(2,[250,204,21])]],l=t?[0,1,2].map(e=>a(t.colors[e%t.colors.length]).map(e=>e/255)):[[1,1,1],[1,1,1],[1,1,1]];this.setTheme({fx:t?.fx??0,colors:l},t?.time??0,9);let u=/* @__PURE__ */ new ArrayBuffer(c.length*16),d=new Float32Array(u),f=new Uint8Array(u);c.forEach(([t,n,r,i],a)=>{d[a*4]=t,d[a*4+1]=n,d[a*4+2]=e===`neon`?r*.75:r,f.set([i[0],i[1],i[2],255],a*16+12)});let p=b[e];r.useProgram(this.circleProgram),r.bindVertexArray(this.circleVao),r.uniform2f(this.u.get(`c.u_world`),120,120),r.uniform2f(this.u.get(`c.u_origin`),0,0),r.uniform1f(this.u.get(`c.u_pxToWorld`),120/i),r.uniform1i(this.u.get(`c.u_style`),p),r.uniform1f(this.u.get(`c.u_extentMult`),p===4?1.7:1),r.bindBuffer(r.ARRAY_BUFFER,this.circleBuffer),r.bufferData(r.ARRAY_BUFFER,f,r.STREAM_DRAW),this.circleAttribs(0),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,c.length)}drawMachineFrame(e,t,n,r,i,a){let o=this.gl;o.viewport(0,0,this.canvas.width,this.canvas.height),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT);let s=[n-i/2,r-i/2,i,i];this.drawRams(e,t,a,s,i/this.canvas.width,0),this.drawRams(e,t,a,s,i/this.canvas.width,1)}drawBurstFrame(e,t,n,r,i,a,o,s){let c=this.gl;c.enable(c.SCISSOR_TEST),c.scissor(o,0,s,s),c.viewport(o,0,s,s),c.clearColor(0,0,0,0),c.clear(c.COLOR_BUFFER_BIT),c.disable(c.SCISSOR_TEST);let l=[r-a/2,i-a/2];c.useProgram(this.circleProgram),c.bindVertexArray(this.circleVao),c.bindBuffer(c.ARRAY_BUFFER,this.circleBuffer),c.bufferData(c.ARRAY_BUFFER,t,c.STREAM_DRAW),c.uniform2f(this.u.get(`c.u_world`),a,a),c.uniform2f(this.u.get(`c.u_origin`),l[0],l[1]),c.uniform1f(this.u.get(`c.u_pxToWorld`),a/s),e.ballInstances>0&&(this.circleAttribs(0),c.uniform1i(this.u.get(`c.u_fx`),0),c.uniform1i(this.u.get(`c.u_style`),b.rubber),c.uniform1f(this.u.get(`c.u_extentMult`),1),c.drawArraysInstanced(c.TRIANGLE_STRIP,0,4,e.ballInstances)),this.drawEffects(e,n,l,[a,a])}drawStyleSwatch(e,t=0){let n=this.gl;n.viewport(0,0,this.canvas.width,this.canvas.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT);let r=s(e.paint,t),i=se(e.style,e.paint,r,t),a=60-(e.style===`neon`?18:e.style===`chomper`?14:e.style===`crystal`?10:e.style===`tech`?12:e.style===`plastic`?6:4),o=ce();ue(i,{cx:0,cy:0,w:a*2,h:a*2,role:`face`,toward:1,swatch:!0},o),this.rects.length=0,this.origins.length=0;for(let e of o)this.rects.push(...e);this.drawRects({x:0,y:0,angle:0},r,[-a,a*2],[-60,-60,120,120],120/this.canvas.width)}};const ge=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function _e(){let e=WebAssembly.validate(ge),t=(await(e?import(`./chunks/CRcv9A1D.js`):import(`./chunks/DQhlgjg6.js`))).default,n=await t();if(n._sim_config_count()!==l.COUNT)throw Error(`Engine and site are out of sync (settings layout). Rebuild the engine.`);return{engine:n,simd:e}}function ve(e,t){new Float32Array(e.HEAPU8.buffer,e._sim_config(),l.COUNT).set(ee(t))}function ye(e){let t=new Float32Array(e.HEAPU8.buffer,e._sim_info(),e._sim_info_count());return{arenaSides:t[0],centerX:t[1],centerY:t[2],arenaSize:t[3],arenaWall:t[4],machineX:t[5],machineY:t[6],machineAngle:t[7],leftFace:t[8],rightFace:t[9],faceWidth:t[10],openingHeight:t[11],armLength:t[12],armThickness:t[13],jointOverlap:t[14],balls:t[15],ballInstances:t[16],flashInstances:t[17],shardInstances:t[18],crushed:t[19],speedMult:t[20],population:e._sim_population(),physCap:t[21],arenaBroken:t[22]>0,shockRadius:t[23],shockAlpha:t[24],endedSeconds:t[25],paintY0:t[28],paintLen:t[29],machineKind:t[30],ringInstances:t[31],machineSpeed:t[34],layer:t[36],parts:/* @__PURE__ */ new Float32Array,arena:/* @__PURE__ */ new Float32Array}}function be(e){let t=e._sim_sounds_count(),n=t?new Float32Array(e.HEAPU8.buffer,e._sim_sounds(),t*4).slice():/* @__PURE__ */ new Float32Array;return e._sim_sounds_clear(),n}function xe(e){e._sim_pack();let t=ye(e),n=new Float32Array(e.HEAPU8.buffer,e._sim_info(),e._sim_info_count());t.parts=new Float32Array(e.HEAPU8.buffer,e._sim_parts(),n[27]*10).slice(),t.arena=new Float32Array(e.HEAPU8.buffer,e._sim_arena(),n[33]*5).slice();let r=e.HEAPU8.buffer;return{info:t,circles:new Uint8Array(r,e._sim_circles(),(t.ballInstances+t.flashInstances+t.ringInstances)*16),shards:new Uint8Array(r,e._sim_shards(),t.shardInstances*36)}}const j=`NBL Russo One`,Se=`#0f0c2b`,M={y:250,h:210},Ce={y:1610,h:120},we={y:1440,h:150},Te=1270;function Ee(e,t,n,r){if(e.length<5)return null;let i=-1/0,a=0;for(let r=0;r+5<=e.length;r+=5)i=Math.max(i,e[r+1],e[r+3]),a=Math.max(a,Math.hypot(e[r]-t,e[r+1]-n));return r?n+a:i}function De(e){return e===null?Te:Math.min(e-115,Te)}let Oe=null;function ke(){return Oe??=fetch(`/brand/watermark-logo.png`).then(e=>e.blob()).then(e=>createImageBitmap(e)).catch(()=>null),Oe}function Ae(e,t){let n=2*Math.PI*e/7;return[Math.cos(n)*22,t-Fe+Math.sin(n)*22]}let N=null;function je(){return N??=(async()=>{try{let e=new FontFace(j,`url(/fonts/RussoOne-Regular.woff2)`);self.fonts.add(e),await e.load()}catch{N=null}})(),N}function P(e,t,n){let r=new OffscreenCanvas(Math.max(1,Math.round(g*e)),Math.max(1,Math.round(n*e))),i=r.getContext(`2d`);return i.scale(e,e),i.textAlign=`center`,i.textBaseline=`middle`,i.lineJoin=`round`,{canvas:r,ctx:i,overlay:{canvas:r,x:0,y:t,w:g,h:n}}}function F(e,t,n,r,i,a,o=1){let s=i;for(e.font=`${s}px "${j}", sans-serif`;e.measureText(t).width>960&&s>20;)s-=2,e.font=`${s}px "${j}", sans-serif`;e.globalAlpha=o,e.lineWidth=Math.max(4,s*.14),e.strokeStyle=Se,e.strokeText(t,n,r),e.fillStyle=a,e.fillText(t,n,r),e.globalAlpha=1}function Me(e,t,n,r,i){let a=[e.trim(),t.trim()].filter(Boolean);if(a.length===0)return null;let{ctx:o,overlay:s}=P(i,M.y,M.h);return a.length===1?F(o,a[0].toUpperCase(),g/2,M.h/2,66,n):(F(o,a[0].toUpperCase(),g/2,M.h*.3,66,n),F(o,a[1].toUpperCase(),g/2,M.h*.72,66,r)),s}const Ne=new Intl.NumberFormat(`en`);function Pe(e,t,n){let{ctx:r,overlay:i}=P(n,Ce.y,Ce.h);return F(r,`${Ne.format(e)} ${e===1?`BALL`:`BALLS`}`,g/2,Ce.h/2,76,t),i}const Fe=20;we.h;async function Ie(e){let t=await ke(),{canvas:n,ctx:r,overlay:i}=P(e,we.y-20,we.h+40);r.translate(0,20),r.shadowColor=`rgba(0, 0, 0, 0.55)`,r.shadowBlur=10;let a=t?470*t.height/t.width:98,o=a*.2631578947368421/.53;r.font=`${o}px "${j}", sans-serif`,r.textAlign=`left`,r.textBaseline=`alphabetic`;let s=[`Nexus`,`BoxLab`,`.com`],c=s.map(e=>r.measureText(e).width),l=t?215/t.width*470:0,u=t?o*.45:0,d=c.reduce((e,t)=>e+t,0),f=540-(l+u+d)/2,p=a*.6698564593301436;t&&r.drawImage(t,0,0,215,t.height,f,0,l,a),f+=l+u,r.lineJoin=`round`,r.lineWidth=4,r.strokeStyle=Se,r.strokeText(s.join(``),f,p);let m=r.createLinearGradient(f+c[0],0,f+c[0]+c[1],0);m.addColorStop(0,`#f472b6`),m.addColorStop(.5,`#fb923c`),m.addColorStop(1,`#22d3ee`);let h=[`#ffffff`,m,`#ffffff`];return s.forEach((e,t)=>{r.fillStyle=h[t],r.fillText(e,f,p),f+=c[t]}),r.textAlign=`center`,r.textBaseline=`middle`,F(r,`MADE WITH`,540,a+26,28,`#ffffff`),r.setTransform(1,0,0,1,0,0),r.shadowColor=`transparent`,r.globalCompositeOperation=`destination-in`,r.fillStyle=`rgba(0, 0, 0, 0.85)`,r.fillRect(0,0,n.width,n.height),r.globalCompositeOperation=`source-over`,i}const I=(e,t=[])=>self.postMessage(e,t);let captureOn=!1,lastCapture=0,L=null,R=null,z=null,B=1,V=1/120,Le=.5,H=0,Re=!0,ze=!0,U=0,Be=0,W=0,G=0,Ve=0,He=0,K=!1,Ue=0,q=-1,J=g;const We=typeof self.requestAnimationFrame==`function`?e=>self.requestAnimationFrame(e):e=>setTimeout(()=>e(performance.now()),16),Ge=e=>typeof self.cancelAnimationFrame==`function`?self.cancelAnimationFrame(e):clearTimeout(e),Ke=()=>Math.random()*4294967295>>>0||1;function qe(){L&&z&&(ve(L,z),L._sim_init(B),H=0,W=0,q=-1)}function Je(){R&&z&&(R.setOverlay(`title`,Me(z.title1,z.title2,z.titleColor,z.accentColor,J/g)),Xe())}let Y=!0,Ye=De(null);async function Xe(){if(!R)return;if(!Y){R.setOverlay(`watermark`,null);return}let e=await Ie(J/g);R&&Y&&R.setOverlay(`watermark`,e),U||Z()}let X=!1,Ze=0,Qe;function $e(e){if(X)return 1;let t=(e-Ze)/350;return t>=1?0:(1-t)*(1-t)}function et(){clearTimeout(Qe),K||X||(Z(),$e(performance.now())>0&&(Qe=setTimeout(et,16)))}function Z(){if(!L||!R||!z)return;R.ballBlur=$e(performance.now());let{info:e,circles:t,shards:n}=xe(L),r=performance.now();z.counter&&e.population!==q&&r-Ue>100&&(q=e.population,Ue=r,R.setOverlay(`counter`,Pe(e.population,z.titleColor,J/g)));let i=Ee(e.arena,e.centerX,e.centerY,!!z.arenaSpin);if(i!==null&&(Ye=De(i)),Y&&R.moveOverlay(`watermark`,...Ae(H*V,Ye)),R.draw(e,t,n,te(z),H*V),captureOn&&r-lastCapture>=33&&(lastCapture=r,createImageBitmap(R.canvas).then(e=>I({type:`capture-frame`,bitmap:e,time:r},[e])).catch(()=>{})),r-G>200){let t=(r-G)/1e3,n=G&&K?Ve/t:0,i=G&&K?(H-He)*V/t:1;G=r,Ve=0,He=H,I({type:`stats`,balls:e.population,crushed:e.crushed,seed:B,time:H*V,fps:n,speed:i,wmTop:Ye})}}function tt(e){if(U=0,!L)return;W+=Math.min((e-Be)/1e3,.1),Be=e;let t=Math.floor(W/V),n=Math.max(1,Math.min(16,Math.floor(34/Le))),r=Math.min(t,n);if(W=r<t?0:W-r*V,r>0){let e=performance.now();L._sim_step(r),H+=r,Le=Le*.8+(performance.now()-e)/r*.2}if(Ve++,Z(),r>0){let e=be(L),t=new Float32Array(L.HEAPU8.buffer,L._sim_info(),L._sim_info_count());I({type:`sounds`,events:e,speed:t[34],machine:t[30]},[e.buffer])}Q()}function Q(){let e=Re&&ze&&L!==null;e&&!U?(K||(Be=performance.now()),K=!0,U=We(at)):e||(K=!1,U&&=(Ge(U),0))}function nt(e){let t=z;z=e,L&&R&&(t&&t.title1===e.title1&&t.title2===e.title2&&t.titleColor===e.titleColor&&t.accentColor===e.accentColor||Je(),e.counter?t&&t.counter&&t.titleColor===e.titleColor||(q=-1):R.setOverlay(`counter`,null),!t||c.some(n=>t[n]!==e[n])?qe():(ve(L,e),L._sim_apply()),U||Z())}async function rt(e){let t=e.data;switch(t.type){case`capture`:captureOn=!!t.on;break;case`init`:try{R=new he(t.canvas),R.resize(t.width,t.height),J=t.width,z=t.scene,B=t.seed?t.seed>>>0||1:Ke();let[e]=await Promise.all([_e(),je()]);L=e.engine,V=L._sim_tick_seconds(),qe(),Je(),Z(),I({type:`ready`,simd:e.simd,seed:B}),Q()}catch(e){I({type:`error`,message:e instanceof Error?e.message:String(e)})}break;case`scene`:nt(t.scene);break;case`resize`:R?.resize(t.width,t.height),J=t.width,Je(),q=-1,Z();break;case`playing`:Re=t.playing,Q();break;case`watermark`:Y=t.on,Xe();break;case`blur`:if(t.on===X)break;X=t.on,X||(Ze=performance.now()),K||(X?Z():et());break;case`visible`:ze=t.visible,Q();break;case`restart`:t.mode===`random`?B=Ke():t.mode===`set`&&t.seed!==void 0&&(B=t.seed>>>0||1),qe(),G=0,Z()}}let it=!1;function $(e){it||(it=!0,L=null,U&&=(Ge(U),0),I({type:`error`,message:e instanceof Error?e.message:String(e)}))}function at(e){try{tt(e)}catch(e){$(e)}}self.onmessage=e=>{it||rt(e).catch($)},self.addEventListener(`unhandledrejection`,e=>$(e.reason)),self.addEventListener(`error`,e=>$(e.error??e.message));