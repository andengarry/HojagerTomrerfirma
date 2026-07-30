import { useState } from 'react'
import facade from "../assets/references/testReferencePicture.png";
import ContentSection from "../components/contentSection/ContentSection";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>

      <AboutSection />

      <ContentSection
                title="Lidt mere om os"
                text="En terrasse er familiens samlingspunkt om sommeren. Vi bygger terrasser i kvalitetsmaterialer og skræddersyr løsningen efter dine ønsker. og til sidst lidt om hvorfor vælge os"
                image={facade}
                imageAlt="Ny terrasse"
                reverse
            />

    </>
  )
}

export default About;
