/* Non-invasive link to independent physics machines.
 * Kept separate from the captured Svelte app to avoid touching the simulator.
 */
(function () {
  "use strict";
  var lab = location.pathname === "/lab" || location.pathname === "/lab/";
  var selector = lab ? "header.topbar .actions.desktop" : "main .hero .ctas";
  var css = document.createElement("style");
  css.textContent = [
    ".nbl-creator-link{display:inline-flex;align-items:center;justify-content:center;gap:7px;white-space:nowrap;border-radius:12px;border:1px solid #8aeaff;background:linear-gradient(110deg,#1e3758,#39204c);color:#fff!important;text-decoration:none!important;font-weight:800;font-size:13px;padding:11px 14px;box-shadow:0 3px 18px #12ddf220;transition:filter .15s,transform .15s}",
    ".nbl-creator-link:hover{filter:brightness(1.18);transform:translateY(-1px)}",
    ".nbl-creator-link:focus-visible{outline:3px solid #8af5ff;outline-offset:3px}",
    ".nbl-creator-link--mobile{font-size:12px;padding:8px 9px;border-radius:10px;box-shadow:none}",
    "@media(min-width:1000px){.nbl-creator-link--mobile{display:none}}",
    ".nbl-independent-divider{grid-column:1/-1;font-size:12px;letter-spacing:.08em;text-transform:uppercase;font-weight:900;color:#88efff;margin:12px 0 6px;padding-top:11px;border-top:1px solid #53638255}",
    ".nbl-independent-card{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:4px!important;min-height:114px!important;padding:12px 6px!important;cursor:pointer!important;text-align:center!important;background:#1b3045!important;border:1px solid #51d9ec99!important;color:#f5fbff!important;border-radius:12px!important;text-decoration:none!important}",
    ".nbl-independent-card:hover{filter:brightness(1.17)}.nbl-independent-card span{font-size:26px}.nbl-independent-card strong{font-size:12px;line-height:1.2}.nbl-independent-card small{font-size:10px;color:#9ad9ed}"
  ].join("");
  document.head.appendChild(css);
  function link(mobile) {
    var a = document.createElement("a");
    a.href = "/machines";
    a.className = "nbl-creator-link" + (mobile ? " nbl-creator-link--mobile" : "");
    a.textContent = mobile ? "⚙ New" : "⚙ New Machines";
    a.setAttribute("aria-label","Browse three independent physics machines");
    return a;
  }
  function mount() {
    var host=document.querySelector(selector);
    if(host&&!host.querySelector(".nbl-creator-link"))host.appendChild(link(false));
    if(lab){
      var mobileHost=document.querySelector("header.topbar .actions.mobile");
      if(mobileHost&&!mobileHost.querySelector(".nbl-creator-link"))mobileHost.insertBefore(link(true),mobileHost.firstChild);
    }
  }
  function machineCards() {
    if(!lab)return;
    var host=document.querySelector('[data-setting="machine"] .cards');
    if(!host||host.querySelector(".nbl-independent-divider"))return;
    var heading=document.createElement("div");
    heading.className="nbl-independent-divider";
    heading.textContent="Three new physics engines · Open dedicated lab";
    host.appendChild(heading);
    [
      ["pendulum","🔨","Pendulum Crusher"],
      ["gears","⚙️","Twin Gear Grinder"],
      ["magnet","🧲","Magnetic Vortex"]
    ].forEach(function(item){
      var a=document.createElement("a");
      a.className="nbl-independent-card";
      a.href="/machines?kind="+item[0];
      a.setAttribute("aria-label","Open "+item[2]+" in the new physics lab");
      var icon=document.createElement("span");icon.textContent=item[1];icon.setAttribute("aria-hidden","true");
      var title=document.createElement("strong");title.textContent=item[2];
      var desc=document.createElement("small");desc.textContent="New engine";
      a.append(icon,title,desc);host.appendChild(a);
    });
  }
  var scheduled=false;
  function update() {
    mount();machineCards();
  }
  function queueUpdate() {
    if(scheduled)return;
    scheduled=true;requestAnimationFrame(function(){scheduled=false;update();});
  }
  if(lab){
    var observer=new MutationObserver(queueUpdate);
    observer.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==="complete")update();
  else window.addEventListener("load",update,{once:true});
  setTimeout(update,700);
  setTimeout(update,2300);
  setTimeout(update,5500);
})();
