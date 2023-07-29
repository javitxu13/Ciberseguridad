import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import '../css/ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const firebaseConfig = {

    apiKey: "AIzaSyAOHBWoYzT1waORTwL96rlr9AKXynoq-7Q",
  
    authDomain: "paginaweb-54845.firebaseapp.com",
  
    projectId: "paginaweb-54845",
  
    storageBucket: "paginaweb-54845.appspot.com",
  
    messagingSenderId: "1011225317488",
  
    appId: "1:1011225317488:web:5a5f89c4bee6f6f8f564b5"
  
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Initialize Firebase app and Firestore
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      // Guardar la información en Firebase
      await addDoc(collection(firestore, 'contact_messages'), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
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
      {isSubmitted && <p className="success-message">¡Mensaje enviado con éxito!</p>}
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
