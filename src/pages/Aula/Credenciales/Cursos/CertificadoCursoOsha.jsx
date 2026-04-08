import { createSimpleText, getImage, getQR, cmText } from "../utils";
import { Document, Packer, Paragraph, PageOrientation, TextRun, AlignmentType, FrameAnchorType } from "docx";
import { saveAs } from "file-saver";


export const CertificadoCursoOsha = async ({
  userName,
  userLastname,
  userDocId,
  course,
  userCod,
  userCodOsha,
  day,
  month,
  year
}) => {

  const imgFondoDoc = getImage({
    name: "fondo_curso_osha.png",
    height: 21,
    width: 29.7,
    horizontalOffset: 0,
    verticalOffset: 0,
    behindDocument: true,
  });

  const textAwarded = createSimpleText({
    xPosition: 10.33,
    yPosition: 4.19,
    width: 9,
    height: 0.47,
    text: "Awarded to:",
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.CENTER,
  });

  const textName = createSimpleText({
    xPosition: 8.33,
    yPosition: 5,
    width: 13,
    height: 0.99,
    text: userName,
    size: 64,
    font: "Agency FB",
    bold: true,
    upper: true,
    alignment: AlignmentType.CENTER,
  });

  const textLastName = createSimpleText({
    xPosition: 8.33,
    yPosition: 6.35,
    width: 13,
    height: 0.99,
    text: userLastname,
    size: 64,
    font: "Agency FB",
    bold: true,
    upper: true,
    alignment: AlignmentType.CENTER,
  });
  
  const textNumDocument = new Paragraph({
    frame: {
        position: {
            x: cmText(8.33),
            y: cmText(7.95),
        },
        width: cmText(13),
        height: cmText(0.47),
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
            text: `${userDocId}`,
            font: "Agency FB",
            size: 24,
            bold: true,
        }),
    ],
    alignment: AlignmentType.CENTER,
  });

  const textAproved = createSimpleText({
    xPosition: 8.33,
    yPosition: 8.75,
    width: 13,
    height: 2,
    text: 'Approved by the International Directory of the Occupational Safety and Health Administration "OSHA" this professional certificate is issued to meet the regulatory academic requirements required by "OSHA" for professional accreditation in:',
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.CENTER,
  });

  const textCourse = createSimpleText({
    xPosition: 8.33,
    yPosition: 10.5,
    width: 13,
    height: 4.45,
    text: course,
    size: 68,
    font: "Agency FB",
    bold: true,
    upper: true,
    alignment: AlignmentType.CENTER,
  });

  const textDate = createSimpleText({
    xPosition: 9.33,
    yPosition: 14.93,
    width: 11,
    height: 0.98,
    text: `This degree is awarded on ${month} ${day}, ${year} with the official seal and logo corresponding to the specialty.`,
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.CENTER,
  });

  const textDesLeft = createSimpleText({
    xPosition: 8.1,
    yPosition: 16.65,
    width: 7,
    height: 2.3,
    text: "This program complies with what is proposed by OSHA, ANSI, ASME and NIOSH in relation to the standards imposed at the international level OSHA, is a center of professional specialization of international prestige. This certificate is the true copy of the original that is in our local archives.",
    size: 21,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textDesRight = createSimpleText({
    xPosition: 15.6,
    yPosition: 16.65,
    width: 5.29,
    height: 2.3,
    text: "This Certificate has International Validity and can be verified by QR code printed on it, with international validity. The borrower may use the following code as a specialized postal signature on behalf of Osha.",
    size: 21,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textIso21001 = createSimpleText({
    xPosition: 1,
    yPosition: 4.3,
    width: 5.5,
    height: 0.37,
    text: "All our programs are accredited with ISO 21001",
    size: 22,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textFinal = createSimpleText({
    xPosition: 22.65,
    yPosition: 18.6,
    width: 6.15,
    height: 1.27,
    text: "The content of this training program meets the training standards required by the US Department of Labor (OSHA) and the criteria used by ANSI and ASME in accepted Safety, Health and Environmental training practices.",
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textRecord = createSimpleText({
    xPosition: 1,
    yPosition: 17.95,
    width: 3.7,
    height: 0.28,
    text: `Record: 000${userCod}`,
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.RIGHT,
  });

  const textFile = createSimpleText({
    xPosition: 1,
    yPosition: 18.41,
    width: 3.7,
    height: 0.28,
    text: `File: A-${userCod}-${year}`,
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.RIGHT,
  });

  const textAccreditation = createSimpleText({
    xPosition: 1,
    yPosition: 19,
    width: 3.7,
    height: 0.4,
    text: "ACCREDITATION CODE:",
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.RIGHT,
  });

  const textAccredCode = createSimpleText({
    xPosition: 1,
    yPosition: 19.46,
    width: 3.7,
    height: 0.4,
    text: userCodOsha,
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
    alignment: AlignmentType.RIGHT,
  });

  const imgQR = await getQR({
    dni: userCodOsha,
    height: 2,
    width: 2,
    horizontalOffset: 5.04,
    verticalOffset: 17.91,
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
          textLastName,
          textNumDocument,
          textAproved,
          textCourse,
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
  const fileName = `${userName.toUpperCase()} ${userLastname.toUpperCase()}_${course.toUpperCase()}.docx`;
  const blob = await Packer.toBlob(doc);
  saveAs(blob, fileName);
};