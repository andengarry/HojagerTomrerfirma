export const COOKIE_CONSENT_KEY = "cookie_consent";

export function getCookieConsent() {
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

export function hasAcceptedStatistics() {
  return getCookieConsent() === "accepted";
}

export function hasRejectedStatistics() {
  return getCookieConsent() === "rejected";
}

export function acceptStatisticsCookies() {
  localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
}

export function rejectStatisticsCookies() {
  localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
}

export function withdrawStatisticsConsent() {
  localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
}