/* NexusBoxLab temporary guest-only mode.
 * No Supabase client, OAuth flow, session lookup, or authentication requests.
 */
(() => {
  if (window.__NBL_GUEST_MODE__) return;
  window.__NBL_GUEST_MODE__ = true;

  const authText = /\b(sign\s*in|log\s*in|google|anmelden|iniciar sesión|iniciar sesion|entrar|masuk|connexion)\b/i;
  const authHref = /(?:api\/auth|signin|sign-in|login)(?:\/|\?|$)/i;

  // Keep legacy account endpoints from sending the static guest app into 404s.
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const rawUrl = typeof input === "string" ? input : input?.url || "";
    let pathname = "";
    try { pathname = new URL(rawUrl, location.href).pathname; } catch {}
    if (/^\/api\/me(?:\/|$)/i.test(pathname)) {
      return Promise.resolve(new Response(JSON.stringify({ signed_in: false, guest: true, disabled: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }));
    }
    if (/^\/api\/(?:auth|payments)(?:\/|$)/i.test(pathname)) {
      return Promise.resolve(new Response(JSON.stringify({ signed_in: false, disabled: true }), {
        status: 410,
        headers: { "Content-Type": "application/json" }
      }));
    }

    // Free renders are entirely client-side. In guest mode there is no account
    // or credit service available, so let the renderer skip the save/charge
    // reservation for a zero-cost export and continue with its local worker.
    if (/^\/api\/credits\/export(?:\/|$)/i.test(pathname) &&
        String(init?.method || "GET").toUpperCase() === "POST") {
      let body = {};
      try { body = JSON.parse(init?.body || "{}"); } catch {}
      if (Number(body.expected_cost || 0) === 0) {
        return Promise.resolve(new Response(JSON.stringify({ video: null }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }));
      }
    }

    return originalFetch(input, init);
  };

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
    // Start creating is always a direct guest entry point. Never run a
    // sign-in/session/credit gate before opening the lab.
    if (control.matches(".btn.cta.svelte-d8j1hi,[data-cta]")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign("/lab");
      return;
    }
    if (authHref.test(href)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign("/lab");
    }
  }, true);
})();
