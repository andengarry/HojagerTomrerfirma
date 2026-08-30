import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackPageView } from "../lib/analytics";

function PageTracker() {
  const location = useLocation();

  /*
   * Track almindelige React Router-navigationer.
   */
  useEffect(() => {
    const pagePath =
      location.pathname +
      location.search +
      location.hash;

    trackPageView(pagePath);
  }, [location]);

  /*
   * Når brugeren accepterer cookies, skal den
   * aktuelle side trackes én gang.
   *
   * CookieBanner dispatcher først eventet EFTER
   * Google Analytics er initialiseret.
   */
  useEffect(() => {
    const handleConsentChanged = () => {
      const consent =
        localStorage.getItem("cookie_consent");

      if (consent !== "accepted") {
        return;
      }

      const pagePath =
        window.location.pathname +
        window.location.search +
        window.location.hash;

      trackPageView(pagePath);
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

  return null;
}

export default PageTracker;