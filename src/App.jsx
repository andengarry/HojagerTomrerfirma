import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Kitchen from "./pages/services/Kitchen";
import DoorsAndWindows from "./pages/services/DoorsAndWindows";
import Roof from "./pages/services/Roof";
import NewBuildAndRenovation from "./pages/services/NewBuildAndRenovation";

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
      <Route path="/services" element={<Gallery />} />
      <Route path="/services/køkkenopsætning" element={<Kitchen />} />
      <Route path="/services/døre-og-vinduer" element={<DoorsAndWindows />} />
      <Route path="/services/tagrenovering" element={<Roof />} />
      <Route path="/services/nybygning-og-tilbygning" element={<NewBuildAndRenovation />} />
      <Route path="/galleri" element={<Gallery />} />
      <Route path="/om-os" element={<About />} />
      <Route path="/kontakt" element={<Contact />} />
    </Routes>


    <Footer />

        </>

  );
}

export default App
