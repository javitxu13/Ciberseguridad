import React from "react";
import "../css/Services.css";

const ServicePackage = ({ title, description, features, isMostPopular }) => {
  return (
    <div className={`service-package ${isMostPopular ? "most-popular" : ""}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn">Solicitar Información</button>
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
        title="Penetración para Aplicaciones Web y Móviles."
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
        description="Realizamos una revisión exhaustiva de sus repositorios de código en busca de vulnerabilidades. Nuestro equipo utiliza herramientas avanzadas y técnicas de análisis para identificar riesgos y brechas de seguridad, proporcionándole un informe completo y recomendaciones para proteger sus activos digitales. Su seguridad es nuestra prioridad."
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
