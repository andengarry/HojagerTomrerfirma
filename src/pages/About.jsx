import { useState } from 'react'

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>

      <AboutSection />

    </>
  )
}

export default About;
