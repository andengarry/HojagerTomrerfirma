import { useState } from 'react'

import ContactForm from "../components/ContactForm";

function Contact() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ContactForm />

    </>
  )
}

export default Contact;
