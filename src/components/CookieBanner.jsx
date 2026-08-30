import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { loadGoogleAnalytics } from "../lib/analytics";

import {
  getCookieConsent,
  acceptStatisticsCookies,
  rejectStatisticsCookies,
} from "../lib/cookieConsent";

function CookieBanner() {
  const [showBanner, setShowBanner] =
    useState(false);

  /*
   * Ved første load:
   *
   * - Ingen beslutning → vis banner
   * - Accepted → load GA
   * - Rejected → gør ingenting
   */
  useEffect(() => {
    const consent = getCookieConsent();

    if (!consent) {
      setShowBanner(true);
      return;
    }

    if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  /*
   * Lyt efter ændringer i samtykke.
   */
  useEffect(() => {
    const handleConsentChanged = () => {
      const consent = getCookieConsent();

      if (consent === "accepted") {
        setShowBanner(false);
        return;
      }

      if (consent === "rejected") {
        setShowBanner(false);
        return;
      }

      setShowBanner(true);
    };

    window.addEventListener(
      "cookieConsentChanged",
      handleConsentChanged
    );

    return () => {
      window.removeEventListener(
        "cookieConsentChanged",
        handleConsentChanged
      );
    };
  }, []);

  const acceptCookies = () => {
    /*
     * 1. Gem accept.
     */
    acceptStatisticsCookies();

    /*
     * 2. Load GA.
     *
     * localStorage siger allerede "accepted",
     * så loadGoogleAnalytics() må nu loade scriptet.
     */
    loadGoogleAnalytics();

    /*
     * 3. Først NU sender vi eventet.
     *
     * Tracker kan derfor trygt kalde trackPageView(),
     * fordi gtag allerede eksisterer.
     */
    window.dispatchEvent(
      new Event("cookieConsentChanged")
    );

    setShowBanner(false);
  };

  const rejectCookies = () => {
    /*
     * Gem afvisning.
     */
    rejectStatisticsCookies();

    /*
     * Informer resten af appen.
     */
    window.dispatchEvent(
      new Event("cookieConsentChanged")
    );

    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }


return (
  <div className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-5xl">
    <div className="rounded-2xl border border-amber-600 bg-zinc-900 text-white shadow-2xl">

      <div className="px-6 py-6 lg:px-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Tekst */}
          <div className="max-w-4xl">

            <div className="mb-3 flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-600 text-lg">
                🍪
              </div>

              <h2 className="text-xl font-bold tracking-tight">
                Cookies
              </h2>

            </div>

            <p className="text-sm leading-6 text-gray-300 sm:text-base">
              For at forstå hvordan hjemmesiden bliver brugt,
              vil vi gerne have lov til at bruge statistikcookies.
              Du kan altid ændre dine cookieindstillinger i{" "}

              <NavLink
                to="/privatlivspolitik&cookies"
                className="font-medium text-white underline underline-offset-2 transition hover:text-amber-500"
              >
                privatlivspolitikken
              </NavLink>
              .
            </p>
          </div>

          {/* Knapper */}
          <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto justify-end">

            <button
              type="button"
              onClick={rejectCookies}
              className="rounded-xl border border-zinc-600 bg-zinc-800 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-700"
            >
              Afslå
            </button>

            <button
              type="button"
              onClick={acceptCookies}
              className="rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-500"
            >
              Accepter cookies
            </button>

          </div>

        </div>

      </div>

    </div>
  </div>
);


}

export default CookieBanner;
