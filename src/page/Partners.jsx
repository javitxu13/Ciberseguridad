import React from 'react';
import "../css/Partners.css";


const Partners = () => {
  // Lista de clientes con los que has trabajado
  const clients = [
    {
      description:
        'Empresa líder en tecnología con sede en Imaginaria City. Especializada en desarrollo de software y soluciones de inteligencia artificial.',
      logoUrl: 'https://bimetrick.com/wp-content/uploads/2023/04/Logo-Bimetrick.png',
      website: 'https://bimetrick.com/',
    },
    {
      description:
        'Compañía innovadora de desarrollo de software en el país de Ficciónlandia. Ofrece servicios de consultoría y desarrollo a medida.',
      logoUrl: 'https://www.nuevapescanova.com/nuevapescanova/wp-content/uploads/2019/12/Logo-marca-Pescanova.png',
      website: 'https://www.compañia-b.com',
    },
    {
      description:
        'Organización global dedicada a la sostenibilidad y la energía renovable. Líder en proyectos de energía solar y eólica.',
      logoUrl: 'https://static.vecteezy.com/system/resources/previews/020/498/703/original/dacia-brand-logo-car-symbol-with-name-white-design-romanian-automobile-illustration-with-black-background-free-vector.jpg',
      website: 'https://asana.com/es',
    },
    {
      description:
        'Organización global dedicada a la sostenibilidad y la energía renovable. Líder en proyectos de energía solar y eólica.',
      logoUrl: 'https://www.redsaludsa.com/webservices/MarketingImagenes/recursos-marca/logos/saludsa-vertical-blanco.png',
      website: 'https://asana.com/es',
    },
    {
      description:
        'Organización global dedicada a la sostenibilidad y la energía renovable. Líder en proyectos de energía solar y eólica.',
      logoUrl: 'https://1000marcas.net/wp-content/uploads/2021/05/Pelikan-logo.png',
      website: 'https://asana.com/es',
    },
    {
      description:
        'Organización global dedicada a la sostenibilidad y la energía renovable. Líder en proyectos de energía solar y eólica.',
      logoUrl: 'https://www.super.com.co/media/logo%20bianchi-02.png',
      website: 'https://asana.com/es',
    },
    // Puedes añadir más clientes aquí con sus respectivas propiedades.
  ];

  return (
    <div className="partners-container">
      <h1>Clientes con los que hemos trabajado</h1>
      <div className="clients-list">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img src={client.logoUrl} alt={client.name} className="client-logo" />
            <h2>{client.name}</h2>
            <p className="client-description">{client.description}</p>
            <a href={client.website} target="_blank" rel="noopener noreferrer" className="client-website-link">
              Sitio web
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
