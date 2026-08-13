import { useState } from 'react'
import picture1 from "../assets/Personality/IMG_2923.JPEG";
import ContentSection from "../components/contentSection/ContentSection";

import AboutSection from "../components/AboutSection";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ContentSection
            title="Hvem er vi?"
            text={<>Virksomheden blev grundlagt i 2022 med fokus på montering af køkkener samt udførelse af traditionelle tømreropgaver. De første år arbejdede vi primært i Aarhus og omegn, hvor vi opbyggede erfaring og et godt ry for kvalitetsarbejde og pålidelig service.
            <br/>
            <br/>
            I 2024 flyttede vi virksomheden til Holstebro, hvor vi i dag har base. Herfra kører vi ud til både private og erhvervskunder i området og løser alt fra mindre reparationer til større tømrerprojekter.
            </>}
            image={picture1}
            imageAlt="Ny terrasse"
            reverse
        />

      <AboutSection 
        title="Om os"
        text={<>Vi lægger stor vægt på godt håndværk, høj kvalitet og en tæt dialog med vores kunder. Vores mål er altid at levere et resultat, der lever op til kundens ønsker – til tiden og med fokus på de små detaljer.
        <br/>
        <br/> 
        Uanset om du skal have monteret et nyt køkken, renoveret din bolig eller har brug for en erfaren tømrer til dit næste projekt, står vi klar til at hjælpe.
        </>}

      />



    </>
  )
}

export default About;
