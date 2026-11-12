(() => {
  try {
    const cookie = document.cookie
      .split(";")
      .map((part) => part.trim())
      .find((part) => part.startsWith("nbl_lab="));

    if (!cookie) return;

    const saved = JSON.parse(decodeURIComponent(cookie.slice("nbl_lab=".length)));
    if (
      !saved ||
      saved.v !== 1 ||
      !saved.scene ||
      typeof saved.scene !== "object" ||
      typeof saved.seed !== "number" ||
      !Number.isFinite(saved.seed)
    ) {
      return;
    }

    window.__NBL_GUEST_SCENE = saved.scene;
    window.__NBL_GUEST_SEED = saved.seed;
    if ("manual" in saved) window.__NBL_GUEST_MANUAL = saved.manual;
  } catch {
    // Ignore invalid, unavailable or blocked cookies and use the app defaults.
  }
})();
