import React, { useState } from 'react';
import { PDFDownloadLink, PDFViewer, Document, Page } from '@react-pdf/renderer';

const pdfFiles = [
  { id: 1, name: 'Guide 178', img: "/img-pdfs/guide_178.png", url: '/pdfs/oshacademy_study_guide_178.pdf' },
  { id: 2, name: 'Guide 171', img: "/img-pdfs/guide_171.png", url: '/pdfs/oshacademy_study_guide_171.pdf' },
  { id: 3, name: 'Guide 180', img: "/img-pdfs/guide_178.png", url: '/pdfs/oshacademy_study_guide_178.pdf' },
  { id: 4, name: 'Guide 181', img: "/img-pdfs/guide_178.png", url: '/pdfs/oshacademy_study_guide_178.pdf' },
];

function Biblioteca() {

  const [selectedPdf, setSelectedPdf] = useState(pdfFiles[0].url);
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="bg-grisFondo flex flex-col h-full">
      {/* Titulo */}
      <span>
        <h1 className="text-primary font-bold">Biblioteca</h1>
        <div className="h-2 w-14 bg-secondary mt-1 mb-5"></div>
      </span>
      {/* CadsBooks */}
      <div className="w-full 2xl:w-auto bg-white p-4 flex flex-row gap-4 rounded-lg shadow-lg">
        {pdfFiles.map((pdf) => (
          <div key={pdf.id}>
            <CardBook
              nombre={pdf.name}
              img={pdf.img}
              url={pdf.url}
              metodo={setSelectedPdf}
            />
          </div>
        ))}
      </div>
      {/* Pdf */}
      <div className="mt-5 w-full h-full mb-5 lg:mb-0">
        <div className="mx-auto w-full max-w-[800px] h-screen ">
          {selectedPdf ? (
            <iframe
              src={selectedPdf}
              className="w-full h-full"
              title="PDF Viewer"
            />
          ) : (
            <p>Seleccione un documento para visualizar.</p>
          )}
        </div>
      </div>
    </div>
  )
}

const CardBook = ({nombre, img, url, metodo}) => {
  return(
    <div className="p-2 border-2 border-gray-200 rounded-md w-[150px] space-y-2">
      <img src={img} alt=""/>
      <p className="w-full text-xs text-center">{nombre}</p>
      <button
        onClick={() => metodo(url)}
        className="w-full text-xs px-1 py-[6px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring">
        Ver pdf
      </button>
    </div>
  );
};

export default Biblioteca;