// src/ServiciosContratados.jsx

import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const ServiciosContratados = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    obtenerServiciosContratados();
  }, []);
  

  const obtenerServiciosContratados = () => {
    // Obtener referencia a la base de datos de Firebase
    const database = firebase.database();
    // Obtener una referencia a la lista de servicios contratados en Firebase
    const serviciosRef = database.ref('servicios_contratados');

    // Escuchar cambios en la base de datos y actualizar el estado
    serviciosRef.on('value', (snapshot) => {
      const serviciosData = snapshot.val();
      if (serviciosData) {
        const serviciosArray = Object.values(serviciosData);
        setServicios(serviciosArray);
      } else {
        setServicios([]);
      }
    });
  };

  return (
    <div>
      <h1>Servicios Contratados</h1>
      <ul>
        {servicios.map((servicio, index) => (
          <li key={index}>
            <strong>Fecha:</strong> {servicio.fecha} <br />
            <strong>Servicio:</strong> {servicio.servicio} <br />
            <strong>Pago:</strong> {servicio.pago} <br />
            <strong>Informe:</strong> {servicio.informe} <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiciosContratados;
