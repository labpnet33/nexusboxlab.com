/* NexusBoxLab temporary guest-only mode.
 * No Supabase client, OAuth flow, session lookup, or authentication requests.
 */
(() => {
  if (window.__NBL_GUEST_MODE__) return;
  window.__NBL_GUEST_MODE__ = true;

  const authText = /\b(sign\s*in|log\s*in|google|anmelden|iniciar sesión|iniciar sesion|entrar|masuk|connexion)\b/i;
  const authHref = /(?:api\/auth|signin|sign-in|login)(?:\/|\?|$)/i;

  function clean() {
    document.querySelectorAll(".guest-bar,[data-auth-only],[data-signin-only]").forEach((node) => node.remove());

    document.querySelectorAll('a[href],button,[role="dialog"],.backdrop').forEach((node) => {
      const label = (node.innerText || node.textContent || "").replace(/\s+/g, " ").trim();
      const href = node.getAttribute("href") || "";

      if (node.matches("a") && authHref.test(href)) {
        node.setAttribute("href", "/lab");
        node.removeAttribute("data-sveltekit-reload");
        node.textContent = "Open lab";
        return;
      }

      if ((node.matches('[role="dialog"],.backdrop') && authText.test(label)) ||
          ((node.matches("button,a") || node.matches('[role="button"]')) && authText.test(label))) {
        node.remove();
      }
    });
  }

  if (/^\/api\/auth(?:\/|$)/i.test(location.pathname)) {
    location.replace("/lab");
    return;
  }

  clean();
  const observer = new MutationObserver(clean);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener("click", (event) => {
    const control = event.target.closest("a,button,[role='button']");
    if (!control) return;
    const href = control.getAttribute("href") || "";
    if (authHref.test(href)) {
      event.preventDefault();
      location.assign("/lab");
    }
  }, true);
})();
