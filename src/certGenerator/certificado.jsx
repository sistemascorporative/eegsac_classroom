import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { QRCodeCanvas } from 'qrcode.react';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    border: '1px solid #ddd',
    borderRadius: 10,
    maxWidth: 600,
    margin: '0 auto',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  qrContainer: {
    height: 256,
    margin: '20px auto',
    maxWidth: 256,
    width: '100%',
    textAlign: 'center',
  },
  text: {
    marginBottom: 12,
    textAlign: 'center',
  },
});

// Generar el QR Code en formato base64 usando QRCodeCanvas
const generateQRCodeImage = () => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    QRCodeCanvas({ value: "https://www.safetystrategy.es", size: 256 }).render(canvas);
    const qrCodeImageUrl = canvas.toDataURL("image/png");
    resolve(qrCodeImageUrl);
  });
};

// Componente del Certificado PDF
const CertificadoPDF = ({ qrCodeImageUrl }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>Certificado de Participación</Text>
        <Text style={styles.text}>Este es un certificado de participación en el curso de seguridad.</Text>
        <View style={styles.qrContainer}>
          <Image src={qrCodeImageUrl} />
        </View>
        <Text style={styles.text}>Firma: __________________</Text>
      </View>
    </Page>
  </Document>
);

// Componente principal para generar el PDF
const GenerateCertificadoPDF = () => {
  const [qrCodeImageUrl, setQRCodeImageUrl] = React.useState('');

  React.useEffect(() => {
    generateQRCodeImage().then((url) => setQRCodeImageUrl(url));
  }, []);

  return  <QRCodeCanvas
  value={"www.safetystrategy.es"}
  size={128}
  bgColor={"#ffffff"}
  fgColor={"#000000"}
  level={"L"}
  includeMargin={false}
  imageSettings={{
    src: "https://static.zpao.com/favicon.png",
    x: undefined,
    y: undefined,
    height: 24,
    width: 24,
    excavate: true,
  }}
/>
};

export default GenerateCertificadoPDF;