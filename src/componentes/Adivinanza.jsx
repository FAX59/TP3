import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';  // Icono de ojo de react-icons
import styles from '../styles/Adivinanza.module.css';  // Archivo de estilos

const Adivinanza = ({ adivinanza, respuesta }) => {
  const [reveal, setReveal] = useState(false);  // Estado para manejar si la respuesta está visible

  const handleReveal = () => {
    setReveal(!reveal);  // Cambiar el estado de visibilidad de la respuesta
  };

  return (
    <div className={styles.adivinanza}>
      <div className={styles.question}>
        <p className={styles.text}>{adivinanza}</p>
      </div>
      {reveal && <div className={styles.answer}>
        <p className={styles.text}>{respuesta}</p>
      </div>}
      <button onClick={handleReveal} className={styles.button}>
        <FaEye className={styles.icon} />
      </button>
    </div>
  );
};

export default Adivinanza;
