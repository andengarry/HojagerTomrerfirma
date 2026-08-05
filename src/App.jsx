import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/gallery/Gallery";
import GalleryKitchen from "./pages/gallery/Kitchen";
import GalleryFacades from "./pages/gallery/Facades";
import GalleryTerrace from "./pages/gallery/Terrace";
import GalleryWardrobe from "./pages/gallery/Wardrobe";
import GalleryBathroom from "./pages/gallery/Bathroom";
import GalleryRoof from "./pages/gallery/Roof";
import GalleryHouseRenovation from "./pages/gallery/HouseRenovation";
import GalleryDoorsAndWindows from "./pages/gallery/DoorsAndWindows";
import GalleryExtensionBuilding from "./pages/gallery/ExtensionBuilding";
import Contact from "./pages/Contact";
import ServiceKitchen from "./pages/services/Kitchen";
import ServiceDoorsAndWindows from "./pages/services/DoorsAndWindows";
import ServiceRoof from "./pages/services/Roof";
import ServiceNewBuildAndRenovation from "./pages/services/NewBuildAndRenovation";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import { useState } from 'react'

function App() {
    return (
      <>

        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Gallery />} />
          <Route path="/services/køkkenopsætning" element={<ServiceKitchen />} />
          <Route path="/services/døre-og-vinduer" element={<ServiceDoorsAndWindows />} />
          <Route path="/services/tagrenovering" element={<ServiceRoof />} />
          <Route path="/services/nybygning-og-tilbygning" element={<ServiceNewBuildAndRenovation />} />
          <Route path="/galleri" element={<Gallery />} />
          <Route path="/galleri/køkken" element={<GalleryKitchen />} />
          <Route path="/galleri/facader" element={<GalleryFacades />} />
          <Route path="/galleri/terrasser" element={<GalleryTerrace />} />
          <Route path="/galleri/garderobe" element={<GalleryWardrobe />} />
          <Route path="/galleri/badeværelse" element={<GalleryBathroom />} />
          <Route path="/galleri/tagkonstruktion" element={<GalleryRoof />} />
          <Route path="/galleri/husrenovering" element={<GalleryHouseRenovation />} />
          <Route path="/galleri/døre-og-vinduer" element={<GalleryDoorsAndWindows />} />
          <Route path="/galleri/tilbygning" element={<GalleryExtensionBuilding />} />
          <Route path="/om-os" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>

        <Footer />

      </>

  );
}

export default App
