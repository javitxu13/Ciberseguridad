import React, { useState } from 'react';
import '../css/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos a un servidor o realizar alguna acción con ellos
    console.log(formData);
    // Luego de enviar los datos, puedes limpiar el formulario
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Formulario de contacto</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name" className="form-label">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />

        <label htmlFor="email" className="form-label">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />

        <label htmlFor="message" className="form-label">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
        ></textarea>

        <button type="submit" className="form-button">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
