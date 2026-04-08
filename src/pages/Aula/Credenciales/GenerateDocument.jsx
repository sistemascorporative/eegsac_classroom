import React, { useState } from "react";
import { createSimpleText, getImage } from "./utils";
import { Document, Packer, Paragraph, PageOrientation } from "docx";
import { saveAs } from "file-saver";
import { certificadoOsha } from "./Grados/CertificadoOsha";
import { diplomaOsha } from "./Diplomas/DiplomaOsha";
import { certificadoOshaNfpa } from "./Grados/CertificadoOshaNfpa";
import QR from "qrcode";
import { Canvg } from "canvg";
import { CarnetOsha } from "./Carnets/CarnetOsha.jsx";



const GenerateDocument = () => {

  const [person] = useState({
    person_names: "Juan",
    person_paternal_surname: "Pérez",
    person_maternal_surname: "García",
    person_dni: "12345678A"
  });

  const [register] = useState({
    register_code: "0001",
    register_display_date: "2024-08"
  });

  const certName = "Matpel 3";
  const certCustomLabel = "Certificado de Prueba";

  return (
    <div className="flex flex-row gap-5">
      <button onClick={certificadoOsha}>Descargar Certificado</button>
      <button onClick={certificadoOshaNfpa}>Descargar Certificado NFPA</button>
      <button onClick={diplomaOsha}>Descargar Diploma</button>
      <DownloadCarnetButton
        person={person}
        register={register}
        certName={certName}
        certCustomLabel={certCustomLabel}
      />
    </div>
  );
};

// Función para convertir un número a mes (puedes ajustar esta función según tus necesidades)
function numberToMonth(monthNumber) {
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  return months[monthNumber - 1] || null;
}

// Función para convertir un número a mes (puedes ajustar esta función según tus necesidades)
function numberToMonthEnglish(monthNumber) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months[monthNumber - 1] || null;
}


// Aquí defines tus funciones de generación de carnet (reemplaza con tus funciones)
function generateCarnet(d) {
  if (d.certName === "Matpel 3") {
    return CarnetOsha(d); // Asegúrate de definir estas funciones
  } else if (d.certName === "Conductor Profesional 4x4") {
    return CarnetOsha(d);
  } else {
    return CarnetOsha(d);
  }
}

function generateCarnetImpl(person, register, certName, certCustomLabel) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const [expiryYear, month] = register.register_display_date.split("-");
  const expiryMonth = numberToMonth(parseInt(month, 10));

  if (expiryMonth === null) {
    alert(`El cert. tiene un mes invalido (${month}), no se puede generar carnet`);
    return;
  }

  // Generar código QR
  QR.toDataURL(`https://eegsac.com/certificado/67`, { margin: 1 }, (err, base64) => {
    if (err) {
      alert("Error creando código QR para el carnet.");
      console.error("Error creando código QR", err);
      return;
    }

    const fullname = `${person.person_names} ${person.person_paternal_surname} ${person.person_maternal_surname}`;
    const svgHtml = generateCarnet({
      fullname,
      dni: person.person_dni.toString(),
      code: register.register_code.toString().padStart(4, "0"),
      expiryMonth,
      expiryYear,
      qrBase64: base64,
      certName,
      certCustomLabel,
    });

    //console.log("Generated SVG:", svgHtml); // Verifica el SVG generado
    const v = Canvg.fromString(ctx, svgHtml);
    v.start();
    v.ready().then(() => {
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, `CARNET ${certName} - ${fullname}.png`);
        } else {
          //console.log("blob is null... :c");
        }
      });
    });
  });
}

export function DownloadCarnetButton({ person, register, certName, certCustomLabel }) {
  const handleClick = () => {
    generateCarnetImpl(person, register, certName, certCustomLabel);
  };

  return (
    <button onClick={handleClick}>
      Descargar Carnet
    </button>
  );
}

export default GenerateDocument;