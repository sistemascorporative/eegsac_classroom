import { createSimpleText, getImage, getQR } from "../utils";
import { Document, Packer, Paragraph, PageOrientation, AlignmentType } from "docx";
import { saveAs } from "file-saver";


export const CarnetOsha = async ({
  name,
  lastname,
  country,
  docId,
  program,
  codeOsha
}) => {

  const imgFondo = getImage({
    name: "fondo_carnet_osha.png",
    height: 5.4,
    width: 17.2,
    horizontalOffset: 1.5,
    verticalOffset: 1.5,
    behindDocument: true,
  });

  const textName = createSimpleText({
    xPosition: 4.5,
    yPosition: 3.4,
    width: 5.2,
    height: 0.34,
    text: name,
    size: 18,
    font: "Calibri",
    bold: false,
    upper: true,
    alignment: AlignmentType.LEFT,
  });

  const textLastName = createSimpleText({
    xPosition: 4.5,
    yPosition: 3.76,
    width: 5.2,
    height: 0.34,
    text: lastname,
    size: 18,
    font: "Calibri",
    bold: false,
    upper: true,
    alignment: AlignmentType.LEFT,
  });

  const textCountry = createSimpleText({
    xPosition: 4.5,
    yPosition: 4.24,
    width: 5.2,
    height: 0.32,
    text: country,
    size: 18,
    font: "Calibri",
    bold: false,
    upper: true,
    alignment: AlignmentType.LEFT,
  });

  const textDocId = createSimpleText({
    xPosition: 4.5,
    yPosition: 4.85,
    width: 5.2,
    height: 0.32,
    text: docId,
    size: 18,
    font: "Calibri",
    bold: false,
    upper: true,
    alignment: AlignmentType.LEFT,
  });

  const textProgram = createSimpleText({
    xPosition: 4.5,
    yPosition: 5.46,
    width: 5.2,
    height: 0.32,
    text: program,
    size: 18,
    font: "Calibri",
    bold: false,
    upper: true,
    alignment: AlignmentType.LEFT,
  });
  
  const textCodeOsha = createSimpleText({
    xPosition: 7.63,
    yPosition: 2.03,
    width: 2.5,
    height: 0.32,
    text: `CODE: ${codeOsha}`,
    size: 18,
    font: "Agency FB",
    bold: true,
    upper: true,
    alignment: AlignmentType.LEFT,
  });

  const imgQR = await getQR({
    dni: codeOsha,
    height: 2,
    width: 2,
    horizontalOffset: 13.4, //1.5 MARGEN
    verticalOffset: 4.02, //1.5 MARGEN
  });


  // Crear el documento
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.PORTRAIT, // Orientación horizontal
            },
            margin: { // Ajuste de márgenes
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        children: [
          textName,
          textLastName,
          textCountry,
          textDocId,
          textProgram,
          textCodeOsha,
          new Paragraph({
            children:[
              imgFondo,
              imgQR,
            ],
          }),
        ],
      },
    ],
  });

  // Generar el archivo
  const fileName = `CARNET_${name.toUpperCase()} ${lastname.toUpperCase()}_${program.toUpperCase()}.docx`;
  const blob = await Packer.toBlob(doc);
  saveAs(blob, fileName);
};