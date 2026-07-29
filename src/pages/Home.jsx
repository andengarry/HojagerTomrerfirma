import { useState } from 'react'

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero 
        title="Kvalitetshåndværk i hele Midtjylland"
        subtitle="Køkkenopsætning, døre, vinduer, tag og nybyg – udført med mange års erfaring og fokus på detaljen."
        image="/images/hero.png"
      />
      <AboutSection />

      <ContactForm />

    </>
  )
}

export default Home;
