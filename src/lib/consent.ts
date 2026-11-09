// Visitor consent for non-essential trackers (DPDP Act 2023 / DPDP Rules 2025).
// Essential: site hosting, security (reCAPTCHA on form submit), remembering this choice.
// Analytics: Google Analytics, Microsoft Clarity. Marketing: Meta Pixel.

export const CONSENT_VERSION = "2026-11-09";
const STORAGE_KEY = "sem_consent";
export const CONSENT_EVENT = "sem-consent-change";
export const OPEN_SETTINGS_EVENT = "sem-consent-open";

export type Consent = {
  analytics: boolean;
  marketing: boolean;
  version: string;
  decidedAt: string;
};

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    // Ask again when the notice changes
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

const TRACKING_COOKIE_PREFIXES = ["_ga", "_gid", "_gat", "_fbp", "_fbc", "_clck", "_clsk", "CLID", "MUID"];

function clearTrackingCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (TRACKING_COOKIE_PREFIXES.some((p) => name.startsWith(p))) {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      });
    }
  });
}

export function saveConsent(analytics: boolean, marketing: boolean) {
  const previous = readConsent();
  const next: Consent = { analytics, marketing, version: CONSENT_VERSION, decidedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable: choice applies to this page view only */
  }
  const withdrew = !!previous && ((previous.analytics && !analytics) || (previous.marketing && !marketing));
  if (withdrew) {
    // Trackers already loaded can't be unloaded: clear their cookies and reload without them.
    clearTrackingCookies();
    window.location.reload();
    return;
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: next }));
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
