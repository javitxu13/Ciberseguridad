import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from 'react-router-dom';
import Navbar from "./page/Navbar";
import Services from "./page/Services";
import ContactForm from "./page/ContactForm";
import PaginaPrincipal from "./page/PaginaPrincipal";
import About from "./page/About";
import CybersecurityStats from "./page/CybersecurityStats";
import firestore from "./page/FirebaseConfig";
import Partners from "./page/Partners";
import Footer from "./page/Footer";
import PrivacyPolicy from "./page/PoliticaPrivacidad";
import TermsAndConditions from "./page/TermsAndConditions";
import CookiesPolicy from "./page/CookiesPolicy";
import NotFoundComponent from "./page/NotFound";

function App() {
  // Check if the app is on the homepage
  const shouldRedirect = window.location.pathname === "/";

  useEffect(() => {
    // Redirect the user to the domain "www.innovex.es" when the app starts and on the homepage
    if (shouldRedirect) {
      window.location.href = "http://www.innovex.es";
    }
  }, [shouldRedirect]);

  return (
    <Router>
      <Navbar />
      {/* You can remove this section if you don't want to display the server response */}
      <div>
        <p>Cargando...</p>
      </div>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {firestore && (
          <Route path="/contact" element={<ContactForm firestore={firestore} />} />
        )}
        <Route path="/cybersecurity" element={<CybersecurityStats />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        {/* Fallback route for handling 404 */}
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
