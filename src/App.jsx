import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import { useState } from 'react'

function App() {
    return (
      <>

  {/* Global navigation */}
  <Navbar />


   {/* Sider */}
          
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tjenester" element={<Services />} />
      <Route path="/galleri" element={<Gallery />} />
      <Route path="/om-os" element={<About />} />
      <Route path="/kontakt" element={<Contact />} />
    </Routes>


    <Footer />

        </>

  );
}

export default App
