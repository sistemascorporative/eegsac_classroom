import React from 'react';

const ImageWithInnerBorder = ({ src, alt }) => {
  return (
    <div className="relative inline-block w-full h-full">
      <img
        src={src}
        alt={alt}
        className="rounded-lg object-cover w-full h-full"
      />
      <div className="absolute inset-0 m-4 rounded-lg border border-white pointer-events-none"></div>
    </div>
  );
};

const ImageFormat = ({ src, text }) => {
  return (
    <div className="mx-auto max-w-[370px]">
      <img className="w-[370px] p-1 border border-gray-300" src={src} alt="img" />
      <p className="mt-2 text-center text-[13px] rounded-lg p-2 bg-gray-100">{text}</p>
    </div>
  );
};

// Solo imagen para el lado derecho para las secciones
const ImageForSection = ({ src }) => {
  return (
    <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2">
      <img className="w-[360px] p-1 border border-gray-300" src={src} alt="img" />
    </div>
  );
};

// Solo imagen con titulo para el lado derecho para las secciones
const ImageTitleForSection = ({ src, text }) => {
  return (
    <div className="float-right ml-4 mb-4 w-full max-w-[370px] md:w-1/2">
      <p className="uppercase text-orange-500 text-center text-[13px] rounded-lg p-2">{text}</p>
      <img className="w-full p-1 border border-gray-300" src={src} alt="img" />
    </div>
  );
};

// Solo imagen y texto para el lado derecho para las secciones
const ImageTextForSection = ({ src, text }) => {
  return (
    <div className="float-right ml-4 w-full max-w-[370px] md:w-1/2">
      <img className="w-full p-1 border border-gray-300" src={src} alt="img" />
      <p className="mt-2 text-center text-[13px] rounded-lg p-2 bg-gray-200">{text}</p>
    </div>
  );
};

// Imagen centrada en el medio para cursos
const ImageCenterSection = ({ src }) => {
  return (
    <div className="">
      <img className="w-full p-1 border border-gray-300 max-w-[500px]" src={src} alt="img" />
    </div>
  );
};

export { ImageWithInnerBorder, ImageFormat, ImageForSection, ImageTitleForSection, ImageTextForSection, ImageCenterSection};