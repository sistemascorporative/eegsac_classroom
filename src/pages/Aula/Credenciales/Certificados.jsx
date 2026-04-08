import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { HoverEffectCard, Section1, Card, Card2, Card3 } from '../../../components/ui/card';
import CertificadoPDF from '../../../certGenerator/certPdf';
import GenerateCertificadoPDF from '../../../certGenerator/certificado';

import { FcDiploma1 } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { LiaFileDownloadSolid } from 'react-icons/lia';
import { IoReload } from "react-icons/io5";
import { FaRegFileWord } from "react-icons/fa";

import QRCode from "react-qr-code";
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import GenerateDocument from './GenerateDocument';


function Certificados() {
  return (
    <div className="bg-grisFondo">
      {/* Titulo */}
      <span>
        <h1 className='text-primary font-bold'>Descargue sus Credenciales</h1>
        <div className="h-2 w-14 bg-secondary mt-1"></div>
      </span>
      <div className='mt-10 flex flex-col gap-3'>
        <CardCertificado />
        <CardCertificado />
      </div>
      <div>
        <p className="font-agency">Cualquier consulta de los certificados comunicarse al correo info@osha.es</p>
      </div>
      <div>
        <GenerateDocument/>
      </div>
    </div>
  )
}

function CardCertificado() {
  const [showCertificado, setShowCertificado] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);
  const [showCarnet, setShowCarnet] = useState(false);
  return (
    <>
    <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-5 rounded-lg shadow-lg">

      {/* imagen */}
      <div className="">
        <FcDiploma1 style={{width:60, height:60}} />
      </div>
      
      {/* programa */}
      <div className="flex-1">
        <div className='flex flex-col gap-1'>
          <p className='text-base text-grisOscuro'>Nombre del programa programa</p>
          <p className='text-xs text-primary'>Felicidades por aprobar el programa</p>
        </div>        
      </div>
      
      {/* credenciales */}
      <div className="w-full max-w-[200px] md:min-w-[250px] lg:min-w-[300px] xl:min-w-[450px] 2xl:min-w-[500px] flex flex-col md:flex-row gap-2 items-center">
        <div className="w-full flex flex-col items-center border-2 border-primary rounded-lg">
          <p className="py-1 text-primary text-xs text-center my-1">Certificado</p>
          <hr className="border border-sky-600 w-full"/>
          <div className="w-full flex flex-row items-center justify-evenly text-primary text-md">
            <div className="flex flex-row gap-1">
              <LiaFileDownloadSolid/>
              <p className="text-xs">Descargar:</p>
            </div>
            <div className="border border-sky-600 h-7" />
            <div>
              <IoEyeOutline style={{width:22, height:22}} onClick={() => setShowCertificado(!showCertificado)}/>
            </div>
            <div className="border border-sky-600 h-7" />
            <div>
              <FaRegFileWord />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-2 border-rosa rounded-lg">
          <p className="py-1 text-rosa text-xs text-center my-1">Diploma</p>
          <hr className="border border-rosa w-full"/>
          <div className="w-full flex flex-row items-center justify-evenly">
            <IoEyeOutline style={{color:'var(--rosa)', width:25, height:25}} onClick={() => setShowDiploma(!showDiploma)}/>
            <div className="border border-rosa h-7" />
            <div>
              <LiaFileDownloadSolid/>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-2 border-morado rounded-lg">
          <p className="py-1 text-morado text-xs text-center my-1">carnet</p>
          <hr className="border border-morado w-full"/>
          <div className="w-full flex flex-row items-center justify-evenly">
            <IoEyeOutline style={{color:'var(--morado)', width:25, height:25}} onClick={() => setShowCarnet(!showCarnet)}/>
            <div className="border border-morado h-7" />
            <div>
              <FaRegFileWord/>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Visualización de Certificados */}
    <div className="flex lg:flex-row gap-5">
      {showCertificado && (
        <div className="w-[500px] max-w-[500px] h-[400px] max-h-[400px]">
          <PDFViewer className="w-full h-full">
            <CertificadoPDF
              idPerson={5}
              nombre={"Mario Guillermo Callejas Buch"}
              documento={2392327710401}
              nombrePrograma={"Train The Trainer"}
              dia={18}
              mes={"March"}
              año={2024}
              codOsha={170101094}
            />
          </PDFViewer>
        </div>
      )}
      {showDiploma && (
        <div className="w-[500px] max-w-[500px] h-[400px] max-h-[400px]">
          <PDFViewer className="w-full h-full">
            {/*<GenerateCertificadoPDF/>]*/}
          </PDFViewer>
        </div>
      )}    
    </div>
    </>
  )
}

function CardCertificado2() {
  const [showCertificado, setShowCertificado] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);
  const [showCarnet, setShowCarnet] = useState(false);
  return (
    <>
    <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-5 rounded-lg shadow-lg">

      {/* imagen */}
      <div className="">
        <FcDiploma1 style={{width:60, height:60}} />
      </div>
      
      {/* programa */}
      <div className="flex-1">
        <div className='flex flex-col gap-1'>
          <p className='text-base text-grisOscuro'>Nombre del programa programa</p>
          <p className='text-xs text-primary'>Felicidades por aprobar el programa</p>
        </div>        
      </div>
      
      {/* credenciales */}
      <div className="w-full max-w-[200px] md:min-w-[250px] lg:min-w-[300px] xl:min-w-[400px] 2xl:min-w-[450px] flex flex-col md:flex-row gap-2 items-center">
        <div className="w-full flex flex-col items-center border-2 border-primary rounded-lg">
          <p className="py-1 text-primary text-xs text-center my-1">Certificado</p>
          <hr className="border border-sky-600 w-full"/>
          <div className="w-full flex flex-row items-center justify-evenly">
            <IoEyeOutline style={{color:'var(--primary)', width:25, height:25}} onClick={() => setShowCertificado(!showCertificado)}/>
            <div className="border border-sky-600 h-7" />
            <PDFDownloadLink
              document={
                <CertificadoPDF
                  idPerson={5}
                  nombre={"Mario Guillermo Callejas Buch"}
                  documento={2392327710401}
                  nombrePrograma={"Train The Trainer"}
                  dia={18}
                  mes={"March"}
                  año={2024}
                  codOsha={170101094}
                />
              }
              fileName="certificado.pdf"
            >
              {({ loading, url, error, blob }) =>
                loading ? (
                  <IoReload style={{color:'var(--primary)', width:25, height:25}} />
                ) : (
                  <LiaFileDownloadSolid style={{color:'var(--primary)', width:25, height:25}} />
                )
              }
            </PDFDownloadLink>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-2 border-rosa rounded-lg">
          <p className="py-1 text-rosa text-xs text-center my-1">Diploma</p>
          <hr className="border border-rosa w-full"/>
          <div className="w-full flex flex-row items-center justify-evenly">
            <IoEyeOutline style={{color:'var(--rosa)', width:25, height:25}} onClick={() => setShowDiploma(!showDiploma)}/>
            <div className="border border-rosa h-7" />
            <PDFDownloadLink
              document={<CertificadoPDF
                idPerson={5}
                nombre={"Mario Guillermo Callejas Buch"}
                documento={2392327710401}
                nombrePrograma={"Train The Trainer"}
                dia={18}
                mes={"March"}
                año={2024}
                codOsha={170101094}
              />}
              fileName="diploma.pdf"
            >
              {({ loading, url, error, blob }) =>
                loading ? (
                  <IoReload style={{color:'var(--rosa)', width:25, height:25}} />
                ) : (
                  <LiaFileDownloadSolid style={{color:'var(--rosa)', width:25, height:25}} />
                )
              }
            </PDFDownloadLink>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-2 border-morado rounded-lg">
          <p className="py-1 text-morado text-xs text-center my-1">carnet</p>
          <hr className="border border-morado w-full"/>
          <div className="w-full flex flex-row items-center justify-evenly">
            <IoEyeOutline style={{color:'var(--morado)', width:25, height:25}} onClick={() => setShowCarnet(!showCarnet)}/>
            <div className="border border-morado h-7" />
            <PDFDownloadLink
              document={
                <CertificadoPDF
                  idPerson={5}
                  nombre={"Mario Guillermo Callejas Buch"}
                  documento={2392327710401}
                  nombrePrograma={"Train The Trainer"}
                  dia={18}
                  mes={"March"}
                  año={2024}
                  codOsha={170101094}
                />
              }
              fileName="carnet.pdf"
            >
              {({ loading, url, error, blob }) =>
                loading ? (
                  <IoReload style={{color:'var(--morado)', width:25, height:25}} />
                ) : (
                  <LiaFileDownloadSolid style={{color:'var(--morado)', width:25, height:25}} />
                )
              }
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </div>

    {/* Visualización de Certificados */}
    <div className="flex lg:flex-row gap-5">
      {showCertificado && (
        <div className="w-[500px] max-w-[500px] h-[400px] max-h-[400px]">
          <PDFViewer className="w-full h-full">
            <CertificadoPDF
              idPerson={5}
              nombre={"Mario Guillermo Callejas Buch"}
              documento={2392327710401}
              nombrePrograma={"Train The Trainer"}
              dia={18}
              mes={"March"}
              año={2024}
              codOsha={170101094}
            />
          </PDFViewer>
        </div>
      )}
      {showDiploma && (
        <div className="w-[500px] max-w-[500px] h-[400px] max-h-[400px]">
          <PDFViewer className="w-full h-full">
            {/*<GenerateCertificadoPDF/>]*/}
          </PDFViewer>
        </div>
      )}    
    </div>
    </>
  )
}

export default Certificados