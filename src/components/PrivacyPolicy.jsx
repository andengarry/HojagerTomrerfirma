import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaBuilding,
  FaUserShield,
  FaDatabase,
  FaBullseye,
  FaClock,
  FaUsers,
  FaCookieBite,
  FaChartBar,
  FaShieldAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTrashAlt,
  FaCheck,
} from "react-icons/fa";

const COOKIE_CONSENT_KEY = "cookie-consent";

const policySections = [
  {
    id: "dataansvarlig",
    icon: FaBuilding,
    title: "1. Dataansvarlig",
    content: (
      <>
        <p>
          Højager Tømrerfirma er dataansvarlig for behandlingen af de
          personoplysninger, vi modtager fra dig.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-zinc-900 p-4">
            <p className="text-xs text-gray-400">Firmanavn</p>
            <p className="mt-1 font-semibold">Højager Tømrerfirma</p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-4">
            <p className="text-xs text-gray-400">CVR-nummer</p>
            <p className="mt-1 font-semibold">42983012</p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-4">
            <p className="text-xs text-gray-400">Telefon</p>

            <a
              href="tel:+4522881429"
              className="mt-1 inline-block font-semibold transition hover:text-amber-400"
            >
              +45 22 88 14 29
            </a>
          </div>

          <div className="rounded-xl bg-zinc-900 p-4">
            <p className="text-xs text-gray-400">E-mail</p>

            <a
              href="mailto:nikolaj@hoejagertoemrerfirma.dk"
              className="mt-1 inline-block break-all font-semibold transition hover:text-amber-400"
            >
              nikolaj@hoejagertoemrerfirma.dk
            </a>
          </div>
        </div>
      </>
    ),
  },

  {
    id: "oplysninger",
    icon: FaDatabase,
    title: "2. Hvilke oplysninger behandler vi?",
    content: (
      <>
        <p>
          Når du kontakter os via vores hjemmeside, kan vi behandle de
          personoplysninger, du selv giver os.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Navn",
            "E-mailadresse",
            "Telefonnummer",
            "Oplysninger om din opgave",
            "Eventuelle billeder eller dokumenter, du sender",
            "Andre oplysninger, du selv vælger at give os",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-3"
            >
              <div className="rounded-full bg-amber-600 p-1.5 text-xs text-white">
                <FaCheck />
              </div>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },

  {
    id: "formaal",
    icon: FaBullseye,
    title: "3. Hvad bruger vi dine oplysninger til?",
    content: (
      <>
        <p>Vi bruger dine oplysninger til at:</p>

        <ul className="mt-5 space-y-3">
          {[
            "Besvare din henvendelse",
            "Kontakte dig om din forespørgsel",
            "Vurdere den opgave, du ønsker hjælp til",
            "Udarbejde et eventuelt tilbud",
            "Følge op på din henvendelse eller et tilbud",
            "Administrere et eventuelt kundeforhold",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-zinc-900 px-4 py-3"
            >
              <div className="mt-1 rounded-full bg-amber-600 p-1 text-xs text-white">
                <FaCheck />
              </div>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },

  {
    id: "grundlag",
    icon: FaShieldAlt,
    title: "4. Grundlag for behandlingen",
    content: (
      <div className="space-y-4">
        <p>
          Vi behandler dine oplysninger, når det er nødvendigt for at håndtere
          din henvendelse og eventuelt tage skridt i forbindelse med en mulig
          aftale.
        </p>

        <p>
          Hvis du bliver kunde hos os, kan vi behandle relevante oplysninger,
          når det er nødvendigt for at indgå og opfylde aftalen med dig.
        </p>

        <p>
          Vi kan desuden være forpligtet til at opbevare visse oplysninger for
          at overholde gældende lovgivning.
        </p>
      </div>
    ),
  },

  {
    id: "opbevaring",
    icon: FaClock,
    title: "5. Hvor længe opbevarer vi dine oplysninger?",
    content: (
      <div className="space-y-4">
        <p>
          Vi opbevarer kun dine personoplysninger, så længe det er nødvendigt
          for det formål, de er indsamlet til, eller så længe vi er forpligtet
          til det efter gældende lovgivning.
        </p>

        <p>
          Hvis du kontakter os via hjemmesiden, opbevarer vi dine oplysninger i
          op til 6 måneder efter, at henvendelsen er afsluttet, medmindre du
          giver samtykke til længere opbevaring.
        </p>

        <p>
          Oplysninger om eksisterende kunder og regnskabsmateriale kan blive
          opbevaret i den periode, der er nødvendig efter gældende
          regnskabs- og anden relevant lovgivning.
        </p>
      </div>
    ),
  },

  {
    id: "modtagere",
    icon: FaUsers,
    title: "6. Hvem kan modtage dine oplysninger?",
    content: (
      <>
        <p>
          Vi deler kun dine oplysninger, når det er nødvendigt for at drive
          virksomheden og hjemmesiden eller for at behandle din henvendelse.
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Relevante medarbejdere hos Højager Tømrerfirma",
            "Leverandører af webhosting og teknisk drift: DanDomain og Github",
            "Leverandører af e-mail og kommunikation: Formspree og DanDomain",
            "Google Analytics, hvis du har givet samtykke til statistikcookies",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-zinc-900 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </>
    ),
  },

  {
    id: "rettigheder",
    icon: FaUserShield,
    title: "7. Dine rettigheder",
    content: (
      <>
        <p>
          Du har efter gældende regler en række rettigheder i forhold til vores
          behandling af dine personoplysninger.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Ret til indsigt",
            "Ret til berigtigelse",
            "Ret til sletning i relevante tilfælde",
            "Ret til begrænsning af behandlingen",
            "Ret til at gøre indsigelse",
            "Ret til dataportabilitet, hvor det er relevant",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-zinc-900 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mt-5">
          Hvis du ønsker at gøre brug af dine rettigheder, kan du kontakte os på{" "}
          <a
            href="mailto:nikolaj@hoejagertoemrerfirma.dk"
            className="font-semibold text-amber-400 transition hover:text-amber-300"
          >
            nikolaj@hoejagertoemrerfirma.dk
          </a>
          .
        </p>

        <p className="mt-4">
          Du har også mulighed for at klage til Datatilsynet, hvis du mener,
          at dine personoplysninger behandles i strid med gældende regler.
        </p>
      </>
    ),
  },
];

function PrivacyPolicyCookies() {
  const [openIndex, setOpenIndex] = useState(null);

  const getStoredConsent = () => {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
  };

  const [statisticsAccepted, setStatisticsAccepted] =
    useState(getStoredConsent);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const withdrawConsent = () => {
    /*
      Fjern dit eget gemte samtykke.

      Hvis du bruger en anden struktur til cookie-samtykke,
      skal COOKIE_CONSENT_KEY matche den nøgle, som dit
      cookie-banner bruger.
    */
    localStorage.removeItem(COOKIE_CONSENT_KEY);

    /*
      Slet Google Analytics cookies.

      Cookie-navnene kan afhænge af din konkrete GA4-opsætning.
      Disse er almindelige eksempler, men den endelige løsning
      bør testes mod de cookies, din hjemmeside faktisk sætter.
    */
    document.cookie =
      "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "_ga_=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    setStatisticsAccepted(false);

    /*
      Giv besked til din GA-integration om, at analytics storage
      ikke længere er tilladt.

      Denne del forudsætter, at Google Analytics / gtag er indlæst
      på siden. Din endelige GA-opsætning bør desuden sikre, at
      Google Analytics ikke starter igen ved næste sideindlæsning.
    */
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }

    /*
      Hvis du har et globalt cookie-banner, kan du eventuelt
      åbne det igen her, så brugeren kan vælge på ny.
    */
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const acceptStatistics = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");

    setStatisticsAccepted(true);

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero */}

      <section className="border-b border-zinc-800">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-600 text-2xl">
              <FaShieldAlt />
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Privatlivs- og cookiepolitik
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Her kan du læse, hvordan Højager Tømrerfirma behandler dine
              personoplysninger, og hvordan vi bruger cookies på vores
              hjemmeside.
            </p>

          </div>

        </div>

      </section>



      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">


        {/* Privatlivspolitik */}

        <section>

          <div className="mb-8">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-amber-600 p-3">
                <FaUserShield />
              </div>

              <div>
                <p className="text-sm font-medium text-amber-400">
                  Dine oplysninger
                </p>

                <h2 className="text-3xl font-bold">
                  Privatlivspolitik
                </h2>
              </div>

            </div>

            <p className="mt-5 leading-7 text-gray-300">
              Vi tager beskyttelsen af dine personoplysninger alvorligt. Her
              kan du læse mere om, hvilke oplysninger vi behandler, hvorfor vi
              behandler dem, og hvilke rettigheder du har.
            </p>

          </div>


          <div className="space-y-4">

            {policySections.map((section, index) => {

              const Icon = section.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={section.id}
                  className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition hover:border-amber-500/70"
                >

                  <button
                    type="button"
                    onClick={() => toggleSection(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-zinc-900"
                  >

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-zinc-800 p-3 text-amber-400">
                        <Icon />
                      </div>

                      <h3 className="font-semibold sm:text-lg">
                        {section.title}
                      </h3>

                    </div>


                    <div className="text-amber-400">

                      {isOpen ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}

                    </div>

                  </button>


                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="border-t border-zinc-800 px-5 py-6 leading-7 text-gray-300">

                        {section.content}

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </section>



        {/* Cookies */}

        <section
          id="cookies"
          className="mt-20 scroll-mt-10"
        >

          <div className="mb-8">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-amber-600 p-3">
                <FaCookieBite />
              </div>

              <div>
                <p className="text-sm font-medium text-amber-400">
                  Cookieindstillinger
                </p>

                <h2 className="text-3xl font-bold">
                  Cookies
                </h2>
              </div>

            </div>

            <p className="mt-5 leading-7 text-gray-300">
              Vi bruger nødvendige cookies for at få hjemmesiden til at fungere.
              Hvis du giver samtykke, bruger vi også statistikcookies til at
              forstå, hvordan hjemmesiden bliver brugt.
            </p>

          </div>


          <div className="space-y-4">


            {/* Nødvendige cookies */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div className="flex gap-4">

                  <div className="h-fit rounded-xl bg-zinc-800 p-3 text-amber-400">
                    <FaShieldAlt />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      Nødvendige cookies
                    </h3>

                    <p className="mt-2 max-w-2xl leading-7 text-gray-300">
                      Disse cookies og tekniske funktioner er nødvendige for,
                      at hjemmesiden kan fungere korrekt. De kan derfor ikke
                      fravælges via cookieindstillingerne.
                    </p>

                  </div>

                </div>


                <div className="w-fit rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium text-gray-300">
                  Altid aktiv
                </div>

              </div>

            </div>



            {/* Statistikcookies */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">

                <div className="flex gap-4">

                  <div className="h-fit rounded-xl bg-zinc-800 p-3 text-amber-400">
                    <FaChartBar />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      Statistikcookies
                    </h3>

                    <p className="mt-2 max-w-2xl leading-7 text-gray-300">
                      Med dit samtykke bruger vi Google Analytics til at få
                      statistik om antallet af besøgende, hvilke sider der
                      besøges, og hvilke funktioner på hjemmesiden der benyttes.
                      Oplysningerne bruges til at forbedre hjemmesiden.
                    </p>

                    <p className="mt-4 text-sm text-gray-400">
                      Statistikcookies aktiveres kun, når du giver samtykke.
                    </p>

                  </div>

                </div>


                <div
                  className={`w-fit rounded-full px-4 py-2 text-sm font-medium ${
                    statisticsAccepted
                      ? "bg-amber-600 text-white"
                      : "bg-zinc-800 text-gray-300"
                  }`}
                >
                  {statisticsAccepted
                    ? "Accepteret"
                    : "Ikke accepteret"}
                </div>

              </div>


              <div className="mt-6 border-t border-zinc-800 pt-6">

                {statisticsAccepted ? (

                  <button
                    type="button"
                    onClick={withdrawConsent}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-500/40 px-5 py-3 font-semibold text-red-400 transition hover:bg-red-500/10 sm:w-auto"
                  >
                    <FaTrashAlt />

                    Træk samtykke tilbage
                  </button>

                ) : (

                  <button
                    type="button"
                    onClick={acceptStatistics}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-600 px-5 py-3 font-semibold text-white transition hover:bg-amber-500 sm:w-auto"
                  >
                    <FaCheck />

                    Accepter statistikcookies
                  </button>

                )}

              </div>

            </div>

          </div>

        </section>



        {/* Kontakt */}

        <section className="mt-20 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-medium text-amber-400">
                Spørgsmål?
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Kontakt os om dine personoplysninger
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-300">
                Hvis du har spørgsmål til vores behandling af dine
                personoplysninger eller ønsker at gøre brug af dine rettigheder,
                er du velkommen til at kontakte os.
              </p>

            </div>


            <div className="flex flex-col gap-3">

              <a
                href="tel:+4522881429"
                className="flex items-center justify-center gap-3 rounded-xl bg-zinc-800 px-5 py-3 font-semibold transition hover:bg-zinc-700"
              >
                <FaPhoneAlt className="text-amber-400" />

                +45 22 88 14 29
              </a>


              <a
                href="mailto:nikolaj@hoejagertoemrerfirma.dk"
                className="flex items-center justify-center gap-3 rounded-xl bg-amber-600 px-5 py-3 font-semibold transition hover:bg-amber-500"
              >
                <FaEnvelope />

                Skriv til os
              </a>

            </div>

          </div>

        </section>



        {/* Sidst opdateret */}

        <p className="mt-10 text-center text-sm text-gray-500">
          Senest opdateret: 13. august 2026
        </p>

      </div>

    </main>
  );
}

export default PrivacyPolicyCookies;