import React from 'react';
import Adivinanza from './Adivinanza';  // Asegúrate de ajustar la ruta correctamente

const ContenedorAdivinanzas = () => {
  // Arreglo de adivinanzas
  const adivinanzas = [
    { 
      adivinanza: "¿Qué tiene cabeza, pero no cuerpo?", 
      respuesta: "Una moneda" 
    },
    { 
      adivinanza: "¿Qué es lo que siempre sube y nunca baja?", 
      respuesta: "La edad" 
    },
    { 
      adivinanza: "¿Qué tiene muchos dientes, pero no puede morder?", 
      respuesta: "Un peine" 
    },
    { 
      adivinanza: "¿Qué se rompe sin ser tocado?", 
      respuesta: "El silencio" 
    },
  ];

  return (
    <div>
      <h1>Adivinanzas</h1>
      <div>
        {adivinanzas.map((item, index) => (
          <Adivinanza 
            key={index} 
            adivinanza={item.adivinanza} 
            respuesta={item.respuesta} 
          />
        ))}
      </div>
    </div>
  );
};

export default ContenedorAdivinanzas;
