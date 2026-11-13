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
    "@media(min-width:1000px){.nbl-creator-link--mobile{display:none}}"
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
  if(document.readyState==="complete")mount();
  else window.addEventListener("load",mount,{once:true});
  setTimeout(mount,700);
  setTimeout(mount,2300);
  setTimeout(mount,5500);
})();
