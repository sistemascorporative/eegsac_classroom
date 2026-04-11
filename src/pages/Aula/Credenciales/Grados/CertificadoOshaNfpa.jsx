import { createSimpleText, getImage, getQR } from "../utils";
import { Document, Packer, Paragraph, PageOrientation } from "docx";
import { saveAs } from "file-saver";


export const certificadoOshaNfpa = async ({name, codeEst, docId, program, codeCert, day, month, year}) => {

  const imgFondoDoc = getImage({
    name: "fondo_certOsha.png",
    height: 20.97,
    width: 29.7,
    horizontalOffset: 0,
    verticalOffset: 0,
    behindDocument: true,
  });

  const imglogoEegsac = getImage({
    name: "logoEegsac.png",
    height: 3.4,
    width: 7.2,
    horizontalOffset: 11.22,
    verticalOffset: 1.2,
  });

  const imgLogoAccredited = getImage({
    name: "logoAccreditedEducation.png",
    height: 3.1,
    width: 2.28,
    horizontalOffset: 26.46,
    verticalOffset: 0.9,
  });

  const imgLogoNfpa = getImage({
    name: "logoNfpa.png",
    height: 2.49,
    width: 2,
    horizontalOffset: 1.34,
    verticalOffset: 17.32,
  });

  const textAwarded = createSimpleText({
    xPosition: 14,
    yPosition: 4.56,
    width: 1.7,
    height: 0.33,
    text: "Awarded to:",
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textName = createSimpleText({
    xPosition: 5,
    yPosition: 5.54,
    width: 19.7,
    height: 0.98,
    text: {name},
    size: 72,
    font: "Agency FB",
    bold: false,
    upper: false,
  });
  
  const textNumDocument = createSimpleText({
    xPosition: 10,
    yPosition: 7.16,
    width: 9.7,
    height: 0.4,
    text: `National identify document: ${docId}`,
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textAproved = createSimpleText({
    xPosition: 5.78,
    yPosition: 7.97,
    width: 18.12,
    height: 0.93,
    text: "Approved by the International Directory of the Occupational safety Health Administration \"OSHA\" this professional certified is issued for meeting the regulatory academic requirements required by \"OSHA\" for professional accreditation in:",
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textProgram = createSimpleText({
    xPosition: 5,
    yPosition: 9.66,
    width: 19.7,
    height: 0.98,
    text: {program},
    size: 72,
    font: "Agency FB",
    bold: true,
    upper: false,
  });

  const textDate = createSimpleText({
    xPosition: 6,
    yPosition: 11.47,
    width: 17.7,
    height: 0.4,
    text: `This title is awarded on ${month} ${day}, ${year} with the official seal and logo corresponding to the specialty.`,
    size: 24,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textDesNfpa = createSimpleText({
    xPosition: 1.092,
    yPosition: 15.102,
    width: 2.49,
    height: 1.76,
    text: "These training modules comply with requirements cited by the National Fire Protection Association in Standard 472",
    size: 17,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textDesLeft = createSimpleText({
    xPosition: 3.612,
    yPosition: 17.372,
    width: 9.30,
    height: 1.61,
    text: "This program complies with what is proposed by OSHA, ANSI, ASME and NIOSH in relation to the standards imposed at the international level OSHA, is a center of professional specialization of international prestige. This certificate is the true copy of the original that is in our local archives. ",
    size: 21,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textDesRight = createSimpleText({
    xPosition: 18.076,
    yPosition: 17.509,
    width: 6.83,
    height: 1.74,
    text: "This Certificate is Internationally Valid and can be verified by means of the QR code printed on it, with international validity. The borrower may use the following code as a  specialty post signature on behalf of Osha.",
    size: 21,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textIso21001 = createSimpleText({
    xPosition: 4.785,
    yPosition: 19.271,
    width: 5.76,
    height: 0.37,
    text: "All our programs are accredited with ISO 21001",
    size: 22,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const textFinal = createSimpleText({
    xPosition: 3.83,
    yPosition: 20.22,
    width: 21.91,
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
    height: 2.7,
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
    height: 2.7,
    text: {codeCert},
    size: 18,
    font: "Agency FB",
    bold: false,
    upper: false,
  });

  const imgQR = await getQR({
    dni: docId,
    height: 2.5,
    width: 2.5,
    horizontalOffset: 25.53,
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
          textDesNfpa,
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
              imglogoEegsac,
              imgLogoAccredited,
              imgLogoNfpa,
              imgQR,
            ],
          }),
        ],
      },
    ],
  });

  // Generar el archivo
  const blob = await Packer.toBlob(doc);
  saveAs(blob, "certificado_nfpa_osha.docx");
};