import React from 'react';

const PdfLink = ({path, text}) => {
  return (
    <a
      href={path}
      target="_blank" 
      rel="noopener noreferrer" // Seguridad para evitar problemas de acceso a la ventana abierta
      className="text-blue-600 hover:text-blue-700 underline"
    >
      {text}
    </a>
  );
};

export { PdfLink };