// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar";
import Services from "./page/Services";
import ContactForm from "./page/ContactForm";
import PaginaPrincipal from "./page/PaginaPrincipal";
import About from "./page/About";
import CybersecurityStats from "./page/CybersecurityStats";
import firestore from "./page/FirebaseConfig"; // Corrected import path

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactForm firestore={firestore} />} />
          <Route path="/cybersecurity" element={<CybersecurityStats />} />
        </Routes>
        <CybersecurityStats />
        <Services />
        <ContactForm />
      </Router>
    </>
  );
}

export default App;
