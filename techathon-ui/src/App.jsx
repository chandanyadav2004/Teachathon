import React from "react";
import MatrixBackground from "./components/MatrixBackground";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
     
        {/* Global Background → always visible */}
        <MatrixBackground />
        

        {/* All Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      
    </>
  );
}
