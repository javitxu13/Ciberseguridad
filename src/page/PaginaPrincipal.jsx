import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../css/HeroSection.css'; // Assuming you create a CSS file for this component

const HeroSection = () => {
  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleButtonClick = () => {
    // Navega al formulario de contacto al hacer clic en el botón
    navigate('/contact');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className='hor'>Tu confianza nuestra fortaleza; tu seguridad, nuestra prioridad.</h2>
        <p className='her'>En un mundo cada vez más interconectado, nuestra empresa de ciberseguridad se compromete a proteger tus datos y privacidad, brindándote soluciones avanzadas y una defensa integral contra las amenazas.</p>
        <button className="cta-button" onClick={handleButtonClick}>Prueba de escaneo gratuita</button>
      </div>
      <div className="hero-image">
        <img className='fotito' src="https://i.blogs.es/8122e1/istock-1194430863/1366_2000.jpeg" alt="Hero"/>
      </div>
    </section>
  );
};

export default HeroSection;
