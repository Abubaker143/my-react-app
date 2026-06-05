import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./src/components/RAPIDO/Navbar";
import Hero from "./src/components/Hero";
import Service from "./src/components/RAPIDO/Service";
import Services from "./src/Services";
import WhatWeOffer from "./src/components/RAPIDO/WhatWeOffer";
import EarnWithRapido from "./src/components/RAPIDO/EarnWithRapido";
import About from "./src/components/RAPIDO/About";
import Safety from "./src/components/RAPIDO/Safety";
import Careers from "./src/components/RAPIDO/Careers";
import Blog from "./src/components/RAPIDO/Blog";
import Press from "./src/components/RAPIDO/Press";
import Contact from "./src/components/RAPIDO/Contact";
import Footer from "./src/components/RAPIDO/Footer"; 
import "./App.css";

const Home = () => {
  return (
    <div className="app">
      <Hero />
      <Service />
      <Services />
      <WhatWeOffer />
      <EarnWithRapido />
      <Blog />
    </div>
  );
};  

function App() {
  return (
    <Router>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;