import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const [sending, setSending] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);

  try {
    const response = await fetch("https://formspree.io/f/mnjerwgz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Tak for din besked!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  } finally {
    setSending(false);
  }
};

  return (
    <section className="w-full bg-stone-100 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Kontakt os
          </h2>

          <p className="mx-auto mt-5 w-full text-lg leading-8 text-gray-600">
            Skal vi hjælpe med dit næste projekt? <br />
            Kontakt os for en uforpligtende snak eller et gratis tilbud.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-5">

          {/* Venstre side */}

          <div className="bg-zinc-900 p-8 text-white lg:col-span-2">

            <h3 className="mb-8 text-2xl font-semibold">
              Kontaktoplysninger
            </h3>

            <div className="space-y-8">

              <div className="flex items-center">
                <div className="mt-1 rounded-full bg-amber-600 p-3">
                  <FaPhoneAlt />
                </div>

                <div className="flex-1 text-center">
                  <p className="font-semibold">Telefon</p>
                  <a
                    href="tel:+4522881429"
                    className="text-gray-300 hover:text-white"
                  >
                    +45 22 88 14 29
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mt-1 rounded-full bg-amber-600 p-3">
                  <FaEnvelope />
                </div>

                <div className="flex-1 text-center">
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:nikolaj@hojagertoemrerfirma.dk"
                    className="text-gray-300 hover:text-white"
                  >
                    nikolaj@hojagertoemrerfirma.dk
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mt-1 rounded-full bg-amber-600 p-3">
                  <FaMapMarkerAlt />
                </div>

                <div className="flex-1 text-center">
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-300">
                    Særkærparken 61
                    <br />
                    7500 Holstebro
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mt-1 rounded-full bg-amber-600 p-3">
                  <FaClock />
                </div>

                <div className="flex-1 text-center">
                  <p className="font-semibold">Åbningstider</p>
                  <p className="text-gray-300">
                    Man - Fre
                    <br />
                    07.00 - 16.00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 rounded-2xl border border-zinc-700 bg-zinc-800 p-6">
              <h4 className="mb-3 text-lg font-semibold">
                Gratis tilbud
              </h4>

              <p className="leading-7 text-gray-300">
                Vi svarer som regel inden for 24 timer og giver altid et
                uforpligtende tilbud på dit projekt.
              </p>
            </div>
          </div>

          {/* Højre side */}

          <div className="p-10 lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Navn"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Telefon"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Emne"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Besked
                </label>

                <textarea
                  rows="7"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none focus:border-amber-600"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-amber-700"
              >
                Send besked
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none focus:border-amber-600"
      />
    </div>
  );
}

export default ContactForm;