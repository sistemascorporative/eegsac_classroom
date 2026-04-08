import { createSimpleText, getImage, getQR, cmText } from "../utils";
import { Document, Packer, Paragraph, PageOrientation, TextRun, AlignmentType, FrameAnchorType } from "docx";
import { saveAs } from "file-saver";


export const certificadoOsha = async ({
  name,
  lastname,
  docId,
  program,
  codeEst,
  codeOsha,
  day,
  month,
  year
}) => {

  const imgFondoDoc = getImage({
    name: "fondo_certOsha.png",
    height: 21,
    width: 29.7,
    horizontalOffset: 0,
    verticalOffset: 0,
    behindDocument: true,
  });

  const textAwarded = createSimpleText({
    xPosition: 12,
    yPosition: 4.56,
    width: 5.7,
    height: 0.5,
    text: "Awarded to:",
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.CENTER,
  });

  const textName = createSimpleText({
    xPosition: 2,
    yPosition: 5.4,
    width: 25.7,
    height: 0.97,
    text: `${name} ${lastname}`,
    size: 72,
    font: "Agency FB",
    bold: false,
    upper: true,
    alignment: AlignmentType.CENTER,
  });
  
  const textNumDocument = new Paragraph({
    frame: {
        position: {
            x: cmText(10),
            y: cmText(7.16),
        },
        width: cmText(9.7),
        height: cmText(0.4),
        anchor: {
            horizontal: FrameAnchorType.MARGIN,
            vertical: FrameAnchorType.MARGIN,
        },
    },
    children: [
        new TextRun({
            text: "National identify document: ",
            font: "Agency FB",
            size: 24,
            bold: false
        }),
        new TextRun({
            text: `${docId}`,
            font: "Agency FB",
            size: 24,
            bold: true,
        }),
    ],
    alignment: AlignmentType.CENTER,
  });

  const textAproved = createSimpleText({
    xPosition: 5.3,
    yPosition: 7.97,
    width: 18.3,
    height: 1,
    text: 'Approved by the International Directory of the Occupational Safety and Health Administration "OSHA" this professional certificate is issued to meet the regulatory academic requirements required by "OSHA" for professional accreditation in:',
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.CENTER,
  });

  const textProgram = createSimpleText({
    xPosition: 4,
    yPosition: 9.2,
    width: 21.7,
    height: 1.6,
    text: program,
    size: 72,
    font: "Agency FB",
    bold: true,
    upper: true,
    alignment: AlignmentType.CENTER,
  });

  const textDate = createSimpleText({
    xPosition: 6,
    yPosition: 12.5,
    width: 17.7,
    height: 0.4,
    text: `This degree is awarded on ${month} ${day}, ${year} with the official seal and logo corresponding to the specialty.`,
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.CENTER,
  });

  const textDesLeft = createSimpleText({
    xPosition: 2,
    yPosition: 17.37,
    width: 9.30,
    height: 1.61,
    text: "This program complies with what is proposed by OSHA, ANSI, ASME and NIOSH in relation to the standards imposed at the international level OSHA, is a center of professional specialization of international prestige. This certificate is the true copy of the original that is in our local archives.",
    size: 21,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textDesRight = createSimpleText({
    xPosition: 18.07,
    yPosition: 17.24,
    width: 6.83,
    height: 1.74,
    text: "This Certificate has International Validity and can be verified by QR code printed on it, with international validity. The borrower may use the following code as a specialized postal signature on behalf of Osha.",
    size: 21,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textIso21001 = createSimpleText({
    xPosition: 3.52,
    yPosition: 19.27,
    width: 5.76,
    height: 0.37,
    text: "All our programs are accredited with ISO 21001",
    size: 22,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textFinal = createSimpleText({
    xPosition: 2,
    yPosition: 20.22,
    width: 25.7,
    height: 0.3,
    text: "The content of this training program meets the training standards required by the US Department of Labor (OSHA) and the criteria used by ANSI and ASME in accepted Safety, Health and Environmental training practices.",
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textRecord = createSimpleText({
    xPosition: 25.3,
    yPosition: 15.12,
    width: 3,
    height: 0.28,
    text: `Record: 000${codeEst}`,
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textFile = createSimpleText({
    xPosition: 25.3,
    yPosition: 15.50,
    width: 3,
    height: 0.28,
    text: `File: A-${codeEst}-${year}`,
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textAccreditation = createSimpleText({
    xPosition: 25.3,
    yPosition: 16.04,
    width: 3,
    height: 0.4,
    text: "ACCREDITATION CODE:",
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textAccredCode = createSimpleText({
    xPosition: 25.3,
    yPosition: 16.41,
    width: 3,
    height: 0.4,
    text: codeOsha,
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const imgQR = await getQR({
    dni: codeOsha,
    height: 2,
    width: 2,
    horizontalOffset: 25.78,
    verticalOffset: 17.06,
  });

  // Crear el documento
  const doc = new Document({
    sections: [
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
          textAwarded,
          textName,
          textNumDocument,
          textAproved,
          textProgram,
          textDate,
          textDesLeft,
          textDesRight,
          textIso21001,
          textFinal,
          textRecord,
          textFile,
          textAccreditation,
          textAccredCode,
          new Paragraph({
            children:[
              imgFondoDoc,
              imgQR,
            ],
          }),
        ],
      },
    ],
  });

  // Generar el archivo
  const fileName = `${name.toUpperCase()} ${lastname.toUpperCase()}_${program.toUpperCase()}.docx`;
  const blob = await Packer.toBlob(doc);
  saveAs(blob, fileName);
};