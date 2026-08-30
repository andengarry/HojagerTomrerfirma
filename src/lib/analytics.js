import { COOKIE_CONSENT_KEY } from "./cookieConsent";

const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID;

let googleTagLoaded = false;

function hasAnalyticsConsent() {
  return (
    localStorage.getItem(COOKIE_CONSENT_KEY) ===
    "accepted"
  );
}

export function loadGoogleAnalytics() {
  /*
   * GA må aldrig loades uden statistik-samtykke.
   */
  if (
    googleTagLoaded ||
    !GA_MEASUREMENT_ID ||
    !hasAnalyticsConsent()
  ) {
    return;
  }

  googleTagLoaded = true;

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  /*
   * Google Consent Mode starter som denied.
   */
  window.gtag("consent", "default", {
    analytics_storage: "denied",
  });

  /*
   * Load Google Analytics-scriptet.
   */
  const script = document.createElement("script");

  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  document.head.appendChild(script);

  /*
   * Initialiser gtag.
   */
  window.gtag("js", new Date());

  /*
   * Vi sender selv page_view via React Router.
   */
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  });

  /*
   * Brugeren har accepteret statistik.
   */
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
}

export function denyGoogleAnalytics() {
  /*
   * Stop fremtidig analytics storage.
   */
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
  }

  /*
   * Forsøg at slette eksisterende GA-cookies.
   */
  deleteGoogleAnalyticsCookies();
}

export function trackPageView(path) {
  /*
   * Ekstra sikkerhedsnet:
   *
   * Ingen page_view uden aktivt samtykke.
   */
  if (
    !hasAnalyticsConsent() ||
    typeof window.gtag !== "function" ||
    !GA_MEASUREMENT_ID
  ) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
  });
}

export function deleteGoogleAnalyticsCookies() {
  /*
   * JavaScript kan kun slette cookies, som er
   * tilgængelige for den aktuelle side.
   */
  const cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .filter(Boolean);

  for (const cookie of cookies) {
    const separatorIndex = cookie.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const name = cookie.substring(
      0,
      separatorIndex
    );

    /*
     * GA4 bruger blandt andet:
     *
     * _ga
     * _ga_<measurement-id>
     *
     * Derfor fanger _ga_* også fx:
     *
     * _ga_QH4HJTQ41
     */
    if (
      name === "_ga" ||
      name.startsWith("_ga_")
    ) {
      /*
       * Almindelig cookie med path=/.
       */
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;

      /*
       * Forsøg med aktuelt hostname.
       */
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname};`;

      /*
       * Forsøg med dot-prefix på domain.
       */
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname};`;
    }
  }
}