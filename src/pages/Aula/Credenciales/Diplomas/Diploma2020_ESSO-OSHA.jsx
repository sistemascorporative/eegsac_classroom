import { createSimpleText, getImage, getQR } from "../utils";
import { Document, Packer, Paragraph, PageOrientation, AlignmentType } from "docx";
import { saveAs } from "file-saver";


export const Diploma2020ESSOOSHA = async ({
  codOsha = 0,
  name = "",
  lastName = "",
  program = "",
  day,
  month,
  year,
  gradeAverage = 0
}) => {

  const imgFondoDoc1 = getImage({
    name: "fondo_diploma_p1.png",
    height: 21,
    width: 29.7,
    horizontalOffset: 0,
    verticalOffset: 0,
    behindDocument: true,
  });

  const textHead = createSimpleText({
    xPosition: 3.5,
    yPosition: 6,
    width: 9,
    height: 1.5,
    text: "THE OCCUPATIONAL SAFETY HEALTH ADMINISTRATION OSHA-INSTITUTE CERTIFIES THAT MS/MR.",
    size: 26,
    font: "Garamond",
    bold: false,
    upper: true,
  });

  const textName = createSimpleText({
    xPosition: 4,
    yPosition: 8,
    width: 8,
    height: 0.8,
    text: name,
    size: 40,
    font: "Garamond",
    bold: true,
    upper: true,
  });

  const textLastName = createSimpleText({
    xPosition: 4,
    yPosition: 8.8,
    width: 8,
    height: 0.8,
    text: lastName,
    size: 40,
    font: "Garamond",
    bold: true,
    upper: true,
  });

  const textDegree = createSimpleText({
    xPosition: 3.6,
    yPosition: 10,
    width: 8.8,
    height: 1.4,
    text: "FOR HAVING SUCCESSFULLY COMPLETED THE TRAINING MODULES FOR THE DEGREE OF:",
    size: 24,
    font: "Garamond",
    bold: false,
    upper: true,
  });

  const textProgram = createSimpleText({
    xPosition: 4,
    yPosition: 12,
    width: 8,
    height: 2.04,
    text: program,
    size: 38,
    font: "Garamond",
    bold: true,
    upper: true,
  });

  const textDate = createSimpleText({
    xPosition: 3.5,
    yPosition: 15.7,
    width: 9,
    height: 0.66,
    text: `This diploma is issued on ${month} ${day}, ${year}`,
    size: 24,
    font: "Garamond",
    bold: false,
    alignment: AlignmentType.RIGHT,
    upper: false,
  });

  //para la segunda página
  const imgFondoDoc2 = getImage({
    name: "diploma2020_ESSO-OSHA_pag2.png",
    height: 21,
    width: 29.7,
    horizontalOffset: 0,
    verticalOffset: 0,
    behindDocument: true,
  });

  const textNumHoras = createSimpleText({
    xPosition: 4,
    yPosition: 17.5,
    width: 3,
    height: 0.4,
    text: `HOURS: 260`,
    size: 20,
    font: "Garamond",
    bold: false,
    alignment: AlignmentType.LEFT,
  });

  const textNumModulos = createSimpleText({
    xPosition: 4,
    yPosition: 17.9,
    width: 3,
    height: 0.4,
    text: `MODULES: 7`,
    size: 20,
    font: "Garamond",
    bold: false,
    alignment: AlignmentType.LEFT,
  });

  const textNumNota = createSimpleText({
    xPosition: 4,
    yPosition: 18.3,
    width: 3,
    height: 0.4,
    text: `FINAL NOTE: ${gradeAverage}`,
    size: 20,
    font: "Garamond",
    bold: false,
    alignment: AlignmentType.LEFT,
  });

  const textIso21001 = createSimpleText({
    xPosition: 4,
    yPosition: 19.5,
    width: 9,
    height: 0.6,
    text: "All our programs are accredited with ISO 21001",
    size: 20,
    font: "Garamond",
    bold: false,
    alignment: AlignmentType.LEFT,
  });

  const imgQR = await getQR({
    dni: codOsha,
    height: 2,
    width: 2,
    horizontalOffset: 26.9,
    verticalOffset: 18.2,
  });


  // Crear el documento
  const doc = new Document({
    sections: [
      //primera paǵina
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.LANDSCAPE, // Orientación horizontal
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
          textHead,
          textName,
          textLastName,
          textDegree,
          textProgram,
          textDate,
          new Paragraph({
            children:[
              imgFondoDoc1,
            ],
          }),
        ],
      },
      //segunda paǵina
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.LANDSCAPE, // Orientación horizontal
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
          textNumHoras,
          textNumModulos,
          textNumNota,
          textIso21001,
          new Paragraph({
            children:[
              imgFondoDoc2,
              imgQR
            ],
          }),
        ],
      },
    ],
  });

  // Generar el archivo
  const fileName = `${name.toUpperCase()} ${lastName.toUpperCase()}_${program.toUpperCase()}.docx`;
  const blob = await Packer.toBlob(doc);
  saveAs(blob, fileName);
};