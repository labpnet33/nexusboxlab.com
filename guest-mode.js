/* NexusBoxLab temporary guest-only mode.
 * No Supabase client, OAuth flow, session lookup, or authentication requests.
 */
(() => {
  if (window.__NBL_GUEST_MODE__) return;
  window.__NBL_GUEST_MODE__ = true;

  const authText = /\b(sign\s*in|log\s*in|google|anmelden|iniciar sesión|iniciar sesion|entrar|masuk|connexion)\b/i;
  const authHref = /(?:api\/auth|signin|sign-in|login)(?:\/|\?|$)/i;

  // Browser-only guest library: render locally and keep video recipes on this device.
  const VIDEO_KEY = "nbl-guest-videos-v1";
  const readVideos = () => {
    try {
      const value = JSON.parse(localStorage.getItem(VIDEO_KEY) || "[]");
      return Array.isArray(value) ? value : [];
    } catch { return []; }
  };
  let guestVideos = readVideos();
  window.__NBL_GUEST_VIDEOS = guestVideos;

  const VIDEO_DB = "nbl-guest-video-blobs-v1";
  const openVideoDb = () => new Promise((resolve, reject) => {
    const request = indexedDB.open(VIDEO_DB, 1);
    request.onupgradeneeded = () => request.result.createObjectStore("videos");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  window.__NBL_SAVE_GUEST_VIDEO_BLOB = async (id, blob) => {
    const db = await openVideoDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction("videos", "readwrite");
      tx.objectStore("videos").put(blob, id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  };

  const json = (value, status = 200) => new Response(JSON.stringify(value), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
  const persistVideos = (videos) => {
    guestVideos = videos.slice(0, 50);
    window.__NBL_GUEST_VIDEOS = guestVideos;
    try { localStorage.setItem(VIDEO_KEY, JSON.stringify(guestVideos)); } catch {}
  };
  const requestBody = async (input, init) => {
    try {
      const raw = init?.body ?? (input instanceof Request ? await input.clone().text() : "");
      return typeof raw === "string" ? JSON.parse(raw || "{}") : {};
    } catch { return {}; }
  };
  const makeVideo = (payload, previous = {}) => ({
    ...previous,
    id: previous.id || (crypto.randomUUID?.() || ("guest-" + Date.now() + "-" + Math.random().toString(36).slice(2))),
    config: payload.config || previous.config || {},
    seed: Number(payload.seed ?? previous.seed ?? 1),
    export: payload.export || previous.export || {},
    paid: [],
    credits_spent: 0,
    created_at: previous.created_at || new Date().toISOString()
  });

  // No account or payment service is available in this static clone. These
  // endpoints provide real guest behavior without pretending a user is signed in.
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    const rawUrl = typeof input === "string" ? input : input?.url || "";
    let url;
    try { url = new URL(rawUrl, location.href); } catch { return originalFetch(input, init); }
    const pathname = url.pathname;
    const method = (init?.method || input?.method || "GET").toUpperCase();

    if (/^\/api\/me(?:\/|$)/i.test(pathname)) {
      return json({ signed_in: false, guest: true, disabled: true });
    }
    if (pathname === "/api/credits/match" && method === "POST") {
      return json({ same: false, paid: [], changed: [] });
    }
    if (pathname === "/api/credits/export" && method === "POST") {
      const payload = await requestBody(input, init);
      const video = makeVideo(payload);
      persistVideos([video, ...guestVideos.filter(item => item.id !== video.id)]);
      return json({ video, scene: null, pass: null });
    }
    const exportMatch = pathname.match(/^\/api\/videos\/([^/]+)\/export$/);
    if (exportMatch && method === "POST") {
      const payload = await requestBody(input, init);
      const existing = guestVideos.find(item => item.id === decodeURIComponent(exportMatch[1]));
      if (!existing) return json({ error: "video_not_found", code: "video_not_found" }, 404);
      const video = makeVideo(payload, existing);
      persistVideos(guestVideos.map(item => item.id === video.id ? video : item));
      return json({ video, scene: null, pass: null });
    }
    if (pathname === "/api/videos" && method === "GET") {
      return json({ videos: guestVideos, next: null });
    }
    if (pathname === "/api/alerts/guest-lab" && method === "POST") {
      return json({ ok: true });
    }
    if (/^\/api\/(?:auth|payments)(?:\/|$)/i.test(pathname)) {
      return json({ signed_in: false, disabled: true }, 410);
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
