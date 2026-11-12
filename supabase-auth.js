/* NexusBoxLab standalone Supabase authentication.
 * The legacy account, credits, payments, and Google-backend flows are intentionally disabled.
 */
const SUPABASE_URL = "https://nkqsgqjprijmgmkzychf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_RKcYs55WAv0NDWgLMS3HZg_uWqKxKuk";
const SUPABASE_REDIRECT = `${location.origin}${location.pathname}`;

const legacyApi = /\/api\/(?:auth|me|payments)(?:\/|$)/;
const originalFetch = window.fetch.bind(window);
window.fetch = (input, init) => {
  const url = typeof input === "string" ? input : input?.url || "";
  if (legacyApi.test(url)) {
    return Promise.resolve(new Response(JSON.stringify({ signed_in: false, disabled: true }), {
      status: 410,
      headers: { "Content-Type": "application/json" }
    }));
  }
  return originalFetch(input, init);
};

let supabase;
let session;
let authError = "";

function text(node) {
  return (node?.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function showMessage(message, isError = false) {
  let notice = document.querySelector("[data-supabase-auth-notice]");
  if (!notice) {
    notice = document.createElement("p");
    notice.dataset.supabaseAuthNotice = "";
    notice.style.cssText = "margin:12px 0;padding:10px 12px;border-radius:10px;background:#171446;color:#fff;font:14px/1.4 system-ui,sans-serif";
    (document.querySelector("main") || document.body).prepend(notice);
  }
  notice.textContent = message;
  notice.style.outline = isError ? "2px solid #f472b6" : "2px solid #22d3ee";
}

async function signIn() {
  if (!supabase) return;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: SUPABASE_REDIRECT, queryParams: { access_type: "offline", prompt: "select_account" } }
  });
  if (error) showMessage(error.message || "Google sign-in failed.", true);
}

function replaceLegacyGoogleLinks() {
  document.querySelectorAll('a[href*="auth/google/start"]').forEach((link) => {
    link.href = "#supabase-google-sign-in";
    link.removeAttribute("data-sveltekit-reload");
    link.addEventListener("click", (event) => { event.preventDefault(); signIn(); });
    const label = link.querySelector(".label");
    if (label) label.textContent = "Sign in with Google";
  });
}

function removeLegacyControls() {
  const legacyWords = ["credits", "credit", "purchase", "purchases", "checkout", "refund", "watermark", "premium option", "account menu", "sign out", "delete account"];
  document.querySelectorAll("button, a, li, section, aside, [role=dialog]").forEach((node) => {
    if (node.closest("[data-supabase-auth-panel]")) return;
    const value = text(node);
    if (value.includes("google") && (node.matches("[role=dialog], .backdrop") || node.querySelector("[role=dialog], .backdrop"))) return;
    if (value && value.length < 180 && legacyWords.some((word) => value.includes(word))) {
      if (node.matches("button, a, li, aside") || node.getAttribute("role") === "dialog") node.remove();
    }
  });
}

function installStandalonePanel() {
  document.querySelectorAll("[role=dialog], .backdrop").forEach((dialog) => {
    const value = text(dialog);
    if (!value.includes("google") && !value.includes("open the lab") && !value.includes("abrir o laboratório") && !value.includes("labor öffnen")) return;
    const panel = dialog.querySelector(".panel") || dialog;
    panel.innerHTML = "";
    panel.dataset.supabaseAuthPanel = "";
    panel.style.cssText += ";padding:28px;max-width:440px";
    const heading = document.createElement("h2");
    heading.textContent = "Sign in to NexusBoxLab";
    const copy = document.createElement("p");
    copy.textContent = "Use Google through Supabase. Legacy accounts, credits, and payments have been removed.";
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Continue with Google";
    button.style.cssText = "cursor:pointer;padding:12px 18px;border:0;border-radius:10px;background:#fff;color:#171446;font:600 15px system-ui,sans-serif";
    button.addEventListener("click", signIn);
    panel.append(heading, copy, button);
  });
}

async function boot() {
  const module = await import("https://esm.sh/@supabase/supabase-js@2");
  supabase = module.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });
  const result = await supabase.auth.getSession();
  session = result.data.session;
  if (result.error) authError = result.error.message;
  if (session) showMessage(`Signed in with Google as ${session.user.email || "your Supabase account"}.`);
  else if (authError) showMessage(authError, true);
  replaceLegacyGoogleLinks();
  removeLegacyControls();
  installStandalonePanel();
  const observer = new MutationObserver(() => {
    replaceLegacyGoogleLinks();
    removeLegacyControls();
    installStandalonePanel();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

boot().catch((error) => showMessage(error?.message || "Supabase sign-in could not be loaded.", true));
