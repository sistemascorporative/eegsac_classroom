import React, { useState, useEffect } from 'react';
import { saveAs } from "file-saver";
import QR from "qrcode";
import { Canvg } from "canvg";

import { getCredencialesProgramaMatriculadoByPk, getCredencialesProgramaByPk, getCertificadosCursoMatriculadoByPk, getCertificadosCursoByPk} from '../../../api/Credenciales'

import { certificadoOsha } from "./Grados/CertificadoOsha";
import { CertificadoCursoOsha } from './Cursos/CertificadoCursoOsha.jsx';
import { CarnetOsha } from './Carnets/CarnetOsha.jsx';

import { certificadoOshaNfpa } from "./Grados/CertificadoOshaNfpa";
//import { CarnetOsha } from "./Grados/CarnetOsha.jsx";
import { formatDate } from "./utils";
import { diplomasData } from "../../../utils/CredencialesUtils/DiplomasData"; // Importar el archivo de datos

import { FcDiploma1 } from "react-icons/fc";
import { LiaFileDownloadSolid, LiaIdCardSolid } from 'react-icons/lia';
import { PiCertificate } from "react-icons/pi";


function Credenciales() {
  const [credencialesProgramaMatriculado, setCredencialesProgramaMatriculado] = useState([]);
  const [credencialesPrograma, setCredencialesPrograma] = useState([]);
  const [certificadosCursoMatriculado, setCertificadosCursoMatriculado] = useState([]);
  const [certificadosCurso, setCertificadosCurso] = useState([]);

  const [loading, setLoading] = useState(true);

  // Estados de error individuales
  const [error, setError] = useState(null);
  const [errorCredencialesMatriculado, setErrorCredencialesMatriculado] = useState(null);
  const [errorCredenciales, setErrorCredenciales] = useState(null);
  const [errorCertificadosMatriculado, setErrorCertificadosMatriculado] = useState(null);
  const [errorCertificados, setErrorCertificados] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const iduser = localStorage.getItem('idUser');
      if (!iduser) {
        setError("No se encontró el estudiante en local storage.");
        setLoading(false);
        return;
      }

      try {
        const credencialesMatriculado = await getCredencialesProgramaMatriculadoByPk(iduser);
        setCredencialesProgramaMatriculado(credencialesMatriculado || []);
      } catch (error) {
        setErrorCredencialesMatriculado(`Error al obtener credenciales matriculados: ${error.message}`);
      }

      try {
        const credenciales = await getCredencialesProgramaByPk(iduser);
        setCredencialesPrograma(credenciales || []);
      } catch (error) {
        setErrorCredenciales(`Error al obtener credenciales disponibles: ${error.message}`);
      }

      try {
        const certificadosMatriculado = await getCertificadosCursoMatriculadoByPk(iduser);
        setCertificadosCursoMatriculado(certificadosMatriculado || []);
      } catch (error) {
        setErrorCertificadosMatriculado(`Error al obtener certificados matriculados: ${error.message}`);
      }

      try {
        const certificados = await getCertificadosCursoByPk(iduser);
        setCertificadosCurso(certificados || []);
      } catch (error) {
        setErrorCertificados(`Error al obtener certificados disponibles: ${error.message}`);
      }

      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Credenciles de programas matriculados y no mat*/}
      <div className="w-full space-y-4">
        <span>
          <h1 className='text-primary font-bold'>Credenciales para programas</h1>
          <div className="h-2 w-14 bg-secondary mt-1"></div>
        </span>

        {/* Credenciles de programas matriculados*/}
        {errorCredencialesMatriculado && <p className="text-red-500">{errorCredencialesMatriculado}</p>}
        {credencialesProgramaMatriculado.length > 0 && (
          <div>
            <p>Credenciales de programas matriculados:</p>
            <div className="flex flex-col gap-2">
              {credencialesProgramaMatriculado.map((credencial, index) => (
                <CredentialCard
                  key={index}
                  idProgram={credencial.crepromatprocod.matproprocod.procod}
                  nombreCert={credencial.crepromatprocod.matproprocod.pronom}
                  nombreCertEng={credencial.crepromatprocod.matproprocod.pronomeng}
                  nombreDipEng={credencial.crepromatprocod.matproprocod.prodipeng}
                  userId= {credencial.crepromatprocod.matproestcod.id}
                  userCodOsha= {credencial.crepromatprocod.matproestcod.usercodosh}
                  userNombre={credencial.crepromatprocod.matproestcod.usernom}
                  userApellidos={credencial.crepromatprocod.matproestcod.userape}
                  userPais={credencial.crepromatprocod.matproestcod.userpai}
                  userDocIde={credencial.crepromatprocod.matproestcod.userdocide}
                  fechaEmision={credencial.creprofecemi}
                  boolCertificado={credencial.creprocer}
                  boolDiploma={credencial.creprodip}
                  boolCarnet={credencial.creprocarnet}
                  horas={credencial.crepromatprocod.matproprocod.pronumhor}
                  nModulos={5}
                  userPromedio={96}
                />
              ))}
            </div>
          </div>
        )}

        {/* Credenciles de programas NO matriculados*/}
        {errorCredenciales && <p className="text-red-500">{errorCredenciales}</p>}
        {credencialesPrograma.length > 0 && (
          <div>
            <p>Más credenciales:</p>
            <div className="flex flex-col gap-2">
              {credencialesPrograma.map((credencial, index) => (
                <CredentialCard
                  key={index}
                  idProgram={credencial.creproprocod.procod}
                  nombreCert={credencial.creproprocod.pronom}
                  nombreCertEng={credencial.creproprocod.pronomeng}
                  nombreDipEng={credencial.creproprocod.prodipeng}
                  userId={credencial.creproestcod.id}
                  userCodOsha={credencial.creproestcod.usercodosh}
                  userNombre={credencial.creproestcod.usernom}
                  userApellidos={credencial.creproestcod.userape}
                  userPais={credencial.creproestcod.userpai}
                  userDocIde={credencial.creproestcod.userdocide}
                  fechaEmision={credencial.creprofecemi}
                  boolCertificado={credencial.creprocer}
                  boolDiploma={credencial.creprodip}
                  boolCarnet={credencial.creprocarnet}
                  horas={credencial.creproprocod.pronumhor}
                  nModulos={5}
                  userPromedio={96}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Credenciles de CURSOS matriculados y no mat*/}
      <div className="mt-12 w-full space-y-4">
        <span>
          <h1 className='text-primary font-bold'>Certificados para cursos</h1>
          <div className="h-2 w-14 bg-secondary mt-1"></div>
        </span>

        {/* Credenciles de CURSOS matriculados*/}
        {errorCertificadosMatriculado && <p className="text-red-500">{errorCertificadosMatriculado}</p>}
        {certificadosCursoMatriculado.length > 0 && (
          <div>
            <p>Certificados de cursos matriculados:</p>
            <div className="mt-6 space-y-4">
              {certificadosCursoMatriculado.map((credencial, index) => (
                <CertificadoCard
                  key={index}
                  nombreCer={credencial.cercurmatcurcod.matcurcurcod.curnom}
                  nombreCerEng={credencial.cercurmatcurcod.matcurcurcod.curnomeng}
                  fechaEmision={credencial.cercurfecemi}
                  fechaCaducidad={credencial.cercurfeccad}
                  userId={credencial.cercurmatcurcod.matcurestcod.id}
                  userCodOsha={credencial.cercurmatcurcod.matcurestcod.usercodosh}
                  userNombre={credencial.cercurmatcurcod.matcurestcod.usernom}
                  userApellidos={credencial.cercurmatcurcod.matcurestcod.userape}
                  userPais={credencial.cercurmatcurcod.matcurestcod.userpai}
                  userDocIde={credencial.cercurmatcurcod.matcurestcod.userdocide}
                  boolCarnet={credencial.cercurcarnet}
                />
              ))}
            </div>
          </div>
        )}

        {/* Credenciles de CURSOS NO matriculados*/}
        {errorCertificados && <p className="text-red-500">{errorCertificados}</p>}
        {certificadosCurso.length > 0 && (
          <div>
            <p>Más certificados:</p>
            <div className="mt-6 space-y-4">
              {certificadosCurso.map((credencial, index) => (
                <CertificadoCard
                  key={index}
                  nombreCer={credencial.cercurcurcod.curnom}
                  nombreCerEng={credencial.cercurcurcod.curnomeng}
                  fechaEmision={credencial.cercurfecemi}
                  fechaCaducidad={credencial.cercurfeccad}
                  userId={credencial.cercurestcod.id}
                  userCodOsha={credencial.cercurestcod.usercodosh}
                  userNombre={credencial.cercurestcod.usernom}
                  userApellidos={credencial.cercurestcod.userape}
                  userPais={credencial.cercurestcod.userpai}
                  userDocIde={credencial.cercurestcod.userdocide}
                  boolCarnet={credencial.cercurcarnet}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <p className="pt-12 font-agency">Cualquier consulta de los certificados comunicarse al correo info@osha.es</p>
      </div>
    </div>
  )
};


const DownloadButton = ({ onClick, label, Icon }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center text-xs px-auto py-2 min-w-[100px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
  >
    <Icon className="w-6 h-6" />
    <span>{label}</span>
  </button>
);

const CredentialCard = ({
  idProgram,
  nombreCert,
  nombreCertEng,
  nombreDipEng,
  userId,
  userCodOsha,
  userNombre,
  userApellidos,
  userPais,
  userDocIde,
  fechaEmision,
  boolCertificado,
  boolDiploma,
  boolCarnet,
  horas,
  nModulos,
  userPromedio
}) => {
  const { day, month, year } = formatDate(fechaEmision);
  // Handlers
  const handleDownloadCertificado = async () => {
    await certificadoOsha({
      name: userNombre,
      lastname: userApellidos,
      docId: userDocIde,
      program: nombreCertEng,
      codeEst: userId,
      codeOsha: userCodOsha,
      day,
      month,
      year,
    });
  };

  const handleDownloadDiploma = async () => {
    if (diplomasData[idProgram]) {
      await diplomasData[idProgram]({
        codOsha: userCodOsha,
        name: userNombre,
        lastName: userApellidos,
        program: nombreDipEng,
        day,
        month,
        year,
        gradeAverage: userPromedio,
        hours: horas,       //NO
        nModules: nModulos  //NO
      });
    }
  };

  const handleDownloadCarnet = async () => {
    await CarnetOsha({
      name: userNombre,
      lastname: userApellidos,
      country: userPais,
      docId: userDocIde,
      program: nombreCertEng,
      codeOsha: userCodOsha,
    });
    {/*try {
      await GenerateCarnet({
        code: "gdg",
        fullName: nombreEst,
        program: nombreCert,
        country: "PERÚ",
        docIde: estDocIde,
      });
    } catch (error) {
      console.error("Error al descargar el carnet:", error);
    }*/}
  };
  
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
            <p className='text-base text-grisOscuro'>{nombreCertEng || 'SIN NOMBRE'}</p>
            <p className='text-xs text-gray-600'>{nombreCert || 'SIN NOMBRE'}</p>
            <p className='text-xs text-primary'>Felicidades por aprobar el programa</p>
          </div>
        </div>

        {/* credenciales */}
        <div className="flex flex-col md:flex-row gap-2 items-center">
          {/* Mostrar solo el botón del Certificado si tipo es CERTIFICADO */}
          {boolCertificado && (
            <DownloadButton
              onClick={handleDownloadCertificado}
              label="Certificado"
              Icon={LiaFileDownloadSolid}
            />
          )}

          {/* Mostrar solo el botón del Diploma si tipo es DIPLOMA */}
          {boolDiploma && (
            <DownloadButton
              onClick={handleDownloadDiploma}
              label="Diploma"
              Icon={LiaFileDownloadSolid}
            />
          )}

          {/* Mostrar el botón de Carnet solo si boolCarnet es true */}
          {boolCarnet && (
            <DownloadButton
              onClick={handleDownloadCarnet}
              label="Carnet"
              Icon={LiaIdCardSolid}
            />
          )}
        </div>
      </div>
    </>
  )
};


const CertificadoCard = ({
  nombreCer,
  nombreCerEng,
  fechaEmision,
  fechaCaducidad,
  userId,
  userCodOsha,
  userNombre,
  userApellidos,
  userPais,
  userDocIde,
  boolCarnet
}) => {
  const { day, month, year } = formatDate(fechaEmision);
  
  //handlers
  const handleDownloadCertificado = async () => {
    
    await CertificadoCursoOsha({
      userName: userNombre,
      userLastname: userApellidos,
      userDocId: userDocIde,
      course: nombreCerEng,
      userCod: userId,
      userCodOsha: userCodOsha,
      day: day,
      month: month,
      year: year,
    });
  };

  const handleDownloadCarnet = async () => {
    await CarnetOsha({
      name: userNombre,
      lastname: userApellidos,
      country: userPais,
      docId: userDocIde,
      program: nombreCerEng,
      codeOsha: userCodOsha,
    });
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-lg flex flex-col md:flex-row gap-4 items-center">
      <PiCertificate className="text-yellow-500 w-16 h-16"/>
      <div className="space-y-1 w-full">
        <p className="text-[16px] text-sky-700 font-bold">{nombreCerEng}</p>
        <p className="text-xs text-gray-600 font-bold">{nombreCer}</p>
        <span className="flex flex-row gap-4 text-[12px] text-gray-700">
          <span>Fecha de Emisión: {fechaEmision}</span>
          <span>Fecha de Caducidad: {fechaCaducidad}</span>
        </span>
      </div>
      <div className="flex flex-row gap-2 text-yellow">
        <DownloadButton
          onClick={handleDownloadCertificado}
          label="Certificado"
          Icon={LiaFileDownloadSolid}
        />
        {/* Mostrar el botón de Carnet solo si boolCarnet es true */}
        {boolCarnet && (
          <DownloadButton
            onClick={handleDownloadCarnet}
            label="Carnet"
            Icon={LiaIdCardSolid}
          />
        )}
      </div>
    </div>
  );
};


export const GenerateCarnet = async ({code, fullName, program, country, docIde}) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error("Error al obtener el contexto del canvas.");
  }

  try {
    // Generar código QR
    const base64 = await QR.toDataURL(
      `https://osha.es/credencial/${docIde}`,
      { margin: 1 }
    );

    const svgHtml = CarnetOsha({
      codeOsha: code,
      fullName: fullName,
      docIde: docIde,
      qrBase64: base64,
      program: program,
      country: country,
    });

    // Renderizar el SVG en el canvas
    const v = Canvg.fromString(ctx, svgHtml);
    v.render();

    //return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, `CARNET ${fullName}.png`);
          //resolve();
        } else {
          //reject(new Error("Error: blob es nulo."));
        }
      });
    //});
  } catch (error) {
    console.error("Error al generar el carnet:", error);
  };
}

export default Credenciales;
