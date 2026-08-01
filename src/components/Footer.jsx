import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaPhoneAlt,
  FaEnvelope,
  FaClipboardList,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";





const faqItems = [
  {
    question: "Tilbyder I gratis tilbud?",
    answer:
      "Ja. Vi tilbyder altid et uforpligtende tilbud, hvor vi gennemgår opgaven og finder den bedste løsning.",
  },
  {
    question: "Hvilke typer opgaver udfører I?",
    answer:
      "Vi udfører alt inden for tømrerarbejde såsom renovering, tagarbejde, terrasser, carporte, vinduer og specialopgaver.",
  },
  {
    question: "Hvor hurtigt kan I starte?",
    answer:
      "Det afhænger af projektets størrelse og vores kalender. Kontakt os, så finder vi hurtigst muligt en løsning.",
  },
];


const areas = [
  "Holstebro",
  "Herning",
  "Horsens",
  "Silkeborg",
  "Viborg",
  "Aarhus",
  "Ringkøbing",
  "Brande",
];


function Footer() {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <footer className="w-full bg-zinc-900 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">


        {/* Top tekst */}

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold tracking-tight">
            Har du spørgsmål til dit næste projekt?
          </h2>

          <p className="mx-auto mt-5 w-full text-lg leading-8 text-gray-300">
            Vi står klar til at hjælpe med rådgivning,
            tilbud og løsninger, der passer til dine behov.
          </p>

        </div>



        {/* Kolonner */}

        <div className="grid gap-12 lg:grid-cols-3">


          {/* FAQ */}

          <div>

            <h3 className="mb-6 text-2xl font-semibold">
              FAQ
            </h3>


            <div className="space-y-4">

              {faqItems.map((item, index) => (

                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800/40 transition hover:border-amber-500"
                >

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left font-medium transition hover:bg-zinc-800"
                  >

                    <span>
                      {item.question}
                    </span>


                    {openIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}

                  </button>



                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="border-t border-zinc-700 px-5 py-4 text-gray-300">

                        {item.answer}

                      </div>

                    </div>

                  </div>


                </div>

              ))}

            </div>

          </div>





          {/* Kontakt */}

          <div>

            <h3 className="mb-6 text-2xl font-semibold">
              Kontakt
            </h3>



            <div className="space-y-5">


              <a
                href="tel:+4512345678"
                className="flex items-center rounded-2xl bg-zinc-800 p-5 transition hover:bg-zinc-700"
              >

                <div className="rounded-full bg-amber-600 p-3">
                  <FaPhoneAlt />
                </div>


                <div className="flex-1 text-center">

                  <p className="text-sm text-gray-400">
                    Ring til os
                  </p>

                  <p className="font-semibold">
                    +45 22 88 14 29
                  </p>

                </div>

              </a>





              <a
                href="nikolaj@hojagertoemrerfirma.dk"
                className="flex items-center rounded-2xl bg-zinc-800 p-5 transition hover:bg-zinc-700"
              >

                <div className="rounded-full bg-amber-600 p-3">
                  <FaEnvelope />
                </div>


                <div className="flex-1 text-center">

                  <p className="text-sm text-gray-400">
                    Skriv til os
                  </p>

                  <p className="text-xs font-semibold">
                    nikolaj@hojagertoemrerfirma.dk
                  </p>

                </div>


              </a>

              <NavLink
                to="/kontakt"
                className="flex rounded-2xl bg-zinc-800 p-5 transition hover:bg-zinc-700"
              >

                <div className="rounded-full bg-amber-600 p-3">
                  <FaClipboardList />
                </div>


                <div className="flex-1 text-center">

                  <p className="text-sm text-gray-400">
                    Send en forspørgsel
                  </p>

                   <p className="text-xs font-semibold">
                    udfyld kontaktformularen
                  </p>

                </div>

              </NavLink>

            </div>

          </div>





          {/* Område */}

          <div>

            <h3 className="mb-6 text-2xl font-semibold">
              Område
            </h3>


            <div className="flex items-start gap-4 mb-6">

              <p className="leading-7 text-gray-300">
                Vi udfører tømrerarbejde i hele Midtjylland
                for både private og erhverv.
              </p>


            </div>



            <div className="grid grid-cols-2 gap-3">

              {areas.map((area) => (

                <div
                  key={area}
                  className="rounded-xl bg-zinc-800 px-4 py-3 text-center text-sm transition hover:bg-amber-600"
                >

                  {area}

                </div>

              ))}


            </div>


          </div>


        </div>


      </div>





      {/* Nederste footer */}

      <div className="border-t border-zinc-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-400 md:flex-row lg:px-8">


          <p>
            © {new Date().getFullYear()} Højager Tømrerfirma. Alle rettigheder forbeholdes.
          </p>


          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privatlivspolitik
            </a>


            <a
              href="#"
              className="transition hover:text-white"
            >
              Cookies
            </a>


            <span>
              CVR: 42983012
            </span>


          </div>


        </div>


      </div>


    </footer>
  );
}


export default Footer;