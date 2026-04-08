import React from 'react';
import { Document, Text, Page, StyleSheet, Image, View } from '@react-pdf/renderer';
import QRCode from "react-qr-code";


// Define styles
const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    right: 0,
    width: '100%',
    height: 'auto',
  },
  logoAcredited:{
    position: 'absolute',
    zIndex: -1,
    top: 30,
    left: 30,
    width: 70,
  },
  imgOSHA:{
    position: 'absolute',
    zIndex: -1,
    top: 50, // Coordenada vertical
    left: '38%',
    width: '24%',
  },
  to: {
    position: 'absolute',
    zIndex: -1,
    top: 135, // Coordenada vertical
    width:'100%',
    fontSize: 12,
    textAlign: 'center',
  },
  name: {
    position: 'absolute',
    zIndex: -1,
    top: 155, // Coordenada vertical
    width:'100%',
    fontSize:36,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  doc: {
    position: 'absolute',
    zIndex: -1,
    top: 200,
    width:'100%',
    fontSize:12,
    textAlign: 'center',
  },
  text1: {
    position: 'absolute',
    zIndex: -1,
    top: 225,
    left:'15%',
    width:'70%',
    fontSize:12,
    textAlign: 'center',
  },
  namePrograma: {
    position: 'absolute',
    zIndex: -1,
    top: 270,
    left: '5%',
    width: '90%',
    fontSize:40,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  date: {
    position: 'absolute',
    zIndex: -1,
    top: 350, // Coordenada vertical
    left:'10%',
    width: '80%',
    fontSize:12,
    textAlign: 'center',
  },
  text2: {
    position: 'absolute',
    zIndex: -1,
    bottom: 55,
    left:'10%',
    width: '28%',
    fontSize:9,
    textAlign: 'center',
  },
  text3: {
    position: 'absolute',
    zIndex: -1,
    bottom: 35,
    left:'10%',
    width: '28%',
    fontSize:11,
    textAlign: 'center',
  },
  text4: {
    position: 'absolute',
    zIndex: -1,
    bottom: 45,
    right: 130,
    width: 200,
    fontSize: 10,
    textAlign: 'center',
  },
  text5: {
    position: 'absolute',
    zIndex: -1,
    bottom: 10,
    left:'4%',
    width: '92%',
    fontSize:9,
    textAlign: 'center',
    marginTop: 10,
  },
  textCodDate: {
    position: 'absolute',
    zIndex: -1,
    right: 10,
    width:200,
    bottom:160,
    fontSize:10,
    textAlign: 'center',
    marginTop: 10,
  },
  codDate: {
    position: 'absolute',
    zIndex: -1,
    right: 10,
    width:200,
    bottom:150,
    fontSize:10,
    textAlign: 'center',
    marginTop: 10,
  },
  textCode: {
    position: 'absolute',
    zIndex: -1,
    right: 10,
    width:200,
    bottom:135,
    fontSize:10,
    textAlign: 'center',
    marginTop: 10,
  },
  code: {
    position: 'absolute',
    zIndex: -1,
    right: 10,
    width:200,
    bottom:128,
    fontSize:10,
    textAlign: 'center',
    marginTop: 10,
  },
  qrContainer: {
    height: 'auto',
    margin: '20px auto',
    maxWidth: 64,
    width: '100%',
    textAlign: 'center',
  },
});


function CertificadooPDF({idPerson, nombre, documento, nombrePrograma, dia, mes, año, codOsha}){
  return(
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <Image 
          style={styles.background}
          src="/fondos/fondo_certOsha.png"
        />
        <Image 
          style={styles.imgOSHA}
          src="/logo/logoSafety.png"
        />
        <Image 
          style={styles.logoAcredited}
          src="/logo/logoAccreditedEducation.png"
        />
          <Text style={styles.to}>Awarded to:</Text>
          <Text style={styles.name}>{nombre}</Text>
          <Text style={styles.doc}>National identity document: {documento}</Text>
          <Text style={styles.text1}>Approved by the International Directory of the Occupational safety Health Administration "OSHA" this professional certified is issued for meeting the regulatory academic requirements required by "OSHA" for professional accreditation in:</Text>
          <Text style={styles.namePrograma}>{nombrePrograma}</Text>
          <Text style={styles.date}>This title is awarded on March {dia}, {año} with the official seal and logo corresponding to the speciality.</Text>
          <Text style={styles.text2}>This program complies with what is proposed by OSHA, ANSI, ASME and NIOSH in relation to the standards imposed at the international level OSHA, is a center of professional specialization of international prestige. This certificate is the true copy of the original that is in our local archives.</Text>
          <Text style={styles.text3}>All our programs are accredited with ISO 21001</Text>
          <Text style={styles.text4}>This Certificate is Internationally Valid and can be verified by means of the QR code printed on it, with international validity. The borrower may use the followig code as a  specialty post signature on behalf of Osha.</Text>
          <Text style={styles.text5}>The content of this training program meets the training standards required by the US Department of Labor (OSHA) and the criteria used by ANSI and ASME in accepted Safety, Health and Environmental training practices.</Text>
          <Text style={styles.textCodDate}>Record: {idPerson}</Text>
          <Text style={styles.codDate}>File: A-{idPerson}-{año}</Text>
          <Text style={styles.textCode}>ACCREDITATION CODE:</Text>
          <Text style={styles.code}>{codOsha}</Text>
          <View style={styles.qrContainer}>
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={"https://www.osha.es"}
              viewBox={`0 0 256 256`}
            />
          </View>
      </Page>
    </Document>
  );
}

export default CertificadooPDF;