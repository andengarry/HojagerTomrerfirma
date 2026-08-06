import { useState } from 'react'

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import hero from "../assets/hero.avif";


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero 
        title="Kvalitetshåndværk i hele Midtjylland"
        subtitle="Køkkenopsætning, døre, vinduer, tag og nybyg – udført med mange års erfaring og fokus på detaljen."
        image={hero}
      />
      <AboutSection 
        title="Om os"
        text={<>Vi er grundlagt i 2022 af Nikolaj Højager. Vi lægger stor vægt på godt håndværk, høj kvalitet og en tæt dialog med vores kunder. Vores mål er altid at levere et resultat, der lever op til dine ønsker <br/> – til tiden og med fokus på de små detaljer.</>}
      />

      <ContactForm />

    </>
  )
}

export default Home;
