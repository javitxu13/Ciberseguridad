import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Services.css";

const ServicePackage = ({ title, description, features, isMostPopular }) => {
  const navigate = useNavigate(); // Declare the useNavigate hook here

  // Function to navigate to the contact form
  const handleSolicitarInformacion = () => {
    navigate("/contact");
  };

  return (
    <div className={`service-package ${isMostPopular ? "most-popular" : ""}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn" onClick={handleSolicitarInformacion}>
        Solicitar Información
      </button>
      {isMostPopular && <div className="most-popular-badge">Más Vendido</div>}
    </div>
  );
};

const Services = () => {
  return (
    <div className="titu">
      <h1 className="koliko">Soluciones a Medida</h1>
      <p className="gallo">Impulsamos su negocio con soluciones personalizadas y creativas</p>

      <div className="services">
        <ServicePackage
          title="Penetración de Apps Web y Móviles."
          description="Ofrecemos una revisión completa de tu aplicación web o móvil, seguida de una nueva prueba tras las correcciones. Recibirás un informe detallado y actualizado sobre las vulnerabilidades encontradas y las medidas tomadas para fortalecer la seguridad. Nuestro enfoque eficiente te brinda tranquilidad y confianza en la protección de tus datos contra amenazas."
          features={[
            "Incluir identificación de activos",
            "Incluir escaneo automático",
            "Incluir escaneo manual avanzado",
            "Volver a escanear la evaluación",
          ]}
        />
        <ServicePackage
          isMostPopular={true}
          title="Prueba de Evaluación y Penetración"
          description="Nuestro paquete de Prueba de Evaluación y Penetración ofrece una evaluación exhaustiva de tus sistemas y redes para identificar posibles vulnerabilidades y brechas de seguridad. Nuestros expertos altamente capacitados simularán ataques para poner a prueba tus defensas cibernéticas y proporcionarán un informe detallado con recomendaciones para fortalecer tu seguridad."
          features={[
            "Incluir identificación de activos",
            "Incluir escaneo automático",
            "Incluir escaneo manual avanzado",
            "Volver a escanear la evaluación",
          ]}
        />
        <ServicePackage
          title="Auditoría de Cuentas en la Nube."
          description="Enfocados en su seguridad, llevamos a cabo exhaustivas revisiones de sus repositorios de código con herramientas avanzadas y técnicas de análisis para detectar vulnerabilidades. Nuestro informe completo y recomendaciones protegen sus activos digitales y fortalecen su defensa contra riesgos y brechas de seguridad. Puede confiar en que priorizamos su protección digital de manera proactiva y efectiva."
          features={[
            "Incluir identificación de activos",
            "Incluir escaneo automático",
            "Incluir escaneo manual avanzado",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
