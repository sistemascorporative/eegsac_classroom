import React from "react";
import * as QR from "qrcode";
import {
  ImageRun,
  convertMillimetersToTwip,
  AlignmentType,
  TextRun,
  Paragraph,
  HorizontalPositionRelativeFrom,
  FrameAnchorType,
  VerticalPositionRelativeFrom } from 'docx';


// Convertir cm a twips
export function cm(centimeters) {
  return convertMillimetersToTwip((100 * centimeters) / 150);
}

// Convertir cm a emu para imágenes flotantes
export function cmToEmu(cm) {
  return Math.round(cm * 360000);
}

// Convertir cm a texto en un frame
export function cmText(cm) {
  return Math.round(cm * 567);
}

// Crear texto simple
export function createSimpleText(data) {
  return new Paragraph({
    frame: {
      position: {
        x: cmText(data.xPosition ?? 0),
        y: cmText(data.yPosition ?? 0),
      },
      width: cmText(data.width ?? 0),
      height: cmText(data.height ?? 0),
      anchor: {
        horizontal: FrameAnchorType.MARGIN,
        vertical: FrameAnchorType.MARGIN,
      },
    },
    children: [
      new TextRun({
        text: data.upper ? data.text?.toUpperCase() : data.text ?? "",
        bold: data.bold ?? false,
        font: data.font ?? "Arial",
        size: data.size ?? 12,
        underline: data.underline,
        italics: data.italics,
        color: data.color,
      }),
    ],
    alignment: data.alignment ?? AlignmentType.CENTER,
  });
}


// Obtener imagen
export function getImage(data) {
  return new ImageRun({
    data: getImageData(data.name),
    transformation: {
      height: cm(data.height),
      width: cm(data.width),
    },
    floating: {
      zIndex: 0,
      horizontalPosition: {
        relative: HorizontalPositionRelativeFrom.LEFT_MARGIN,
        offset: cmToEmu(data.horizontalOffset),
      },
      verticalPosition: {
        relative: VerticalPositionRelativeFrom.TOP_MARGIN,
        offset: cmToEmu(data.verticalOffset),
      },
      behindDocument: data.behindDocument ?? false,
    },
  });
}


async function getImageData(imageName) {
  const response = await fetch(`/img-cert/${imageName}`);
  return await response.blob();
}

export async function getQR({ dni, height, width, horizontalOffset, verticalOffset, behindDocument = false }) {
  const qr = await QR.toDataURL(`https://safetystrategy.es/certificado/${dni}`, {margin: 1});

  return new ImageRun({
    data: qr,
    transformation: {
        height: cm(height),
        width: cm(width),
    },
    floating: {
        zIndex: 0,
        horizontalPosition: {
            relative: HorizontalPositionRelativeFrom.LEFT_MARGIN,
            offset: cmToEmu(horizontalOffset),
        },
        verticalPosition: {
            relative: VerticalPositionRelativeFrom.TOP_MARGIN,
            offset: cmToEmu(verticalOffset),
        },
        behindDocument: behindDocument ?? false,
    },
  });
};

// Funciones utilitarias
export const formatDate = (fecha) => {
  const date = new Date(fecha);
  const day = date.getDate().toString();
  const year = date.getFullYear().toString();
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()];
  return { day, month, year };
};