import React from 'react';
import '../css/HeroSection.css'; // Assuming you create a CSS file for this component

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className='hor'>Tu confianza nuestra fortaleza; tu seguridad, nuestra prioridad.</h2>
        <p className='her'>En un mundo cada vez más interconectado, nuestra empresa de ciberseguridad se compromete a proteger tus datos y privacidad, brindándote soluciones avanzadas y una defensa integral contra las amenazas.</p>
        <button className="cta-button">Prueba de escaneo gratuita</button>
      </div>
      <div className="hero-image">
        <img className='fotito' src="https://iddigitalschool.com/wp-content/uploads/2018/08/Curso-Ciberseguridad.jpg" alt="Cybersecurity" />
      </div>

       
    </section>
  );
};

export default HeroSection;
