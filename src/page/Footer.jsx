import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
        </p>
       
        <p className="footer-text">
         Email: innovex.infor@gmail.com
        </p>
        <div className="footer-links">
          <a href="/privacy">Política de Privacidad</a>
          <a href="/terms">Términos y Condiciones</a>
          <a href="/cookies">Uso de Cookies</a>

        </div>
        © Innovex - Todos los derechos reservados

      </div>
    </footer>
  );
};

export default Footer;
