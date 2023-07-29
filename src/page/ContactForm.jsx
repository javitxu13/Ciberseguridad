// src/page/ContactForm.jsx
import React, { useState } from 'react';
import firestore from "../page/FirebaseConfig"; // Corrected import path

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for form submission status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Guardar la información en Firebase
      await firestore.collection('contact_messages').add({
        name,
        email,
        message,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      // Limpiar el formulario después de enviar
      setName('');
      setEmail('');
      setMessage('');

      // Set form submission status to true
      setIsSubmitted(true);
    } catch (error) {
      // Handle the error gracefully, e.g., show an error message to the user
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSubmitted && <p>¡Mensaje enviado con éxito!</p>} {/* Display success message */}
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje: </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default ContactForm;
