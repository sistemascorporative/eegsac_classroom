import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FcClock, FcSurvey } from "react-icons/fc";
import { CiBarcode } from "react-icons/ci";
import { FaCentercode } from "react-icons/fa";


const CardPrograma = ({ id, nombre, nhoras, ncursos, codigo}) => {
  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate(`/aula/programas/${id}`);
  };
  
  return(
    <div
      className="group cursor-pointer overflow-hidden shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg bg-"
    >
      <div className="relative mx-auto">
        <div className="relative"  onClick={handleRowClick}>
          <img className="w-full h-full object-cover" src={imageGradoMap[id] || imageGradoMap[0]} alt="grado" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <div className="absolute top-0 right-0 bg-primary rounded-bl-2xl text-white text-sm">
            <div className="flex flex-row py-4 px-4 items-center gap-1">
              <FaCentercode style={{height:25, width:25}}/>
              <span>{codigo}</span>
            </div>
          </div>
        </div>
        <div className="px-5 pb-5">
          <span className="relative grid h-24 w-24 -mt-14 p-2 border-primary border-8 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-grisFondo">
            <img src="/logo/logoSafety.png" alt="grado"/>
          </span>
          <div
            className="mt-2 text-base leading-7 text-gray-600 transition-all duration-300"
          >
            <h4 className="text-primary text-center font-bold text-sm md:text-lg transition-all duration-300">
              {nombre}
            </h4>
            <div className="mt-2 flex flex-col items-center gap-1 mx-auto">
              <div className="flex flex-row gap-2">
                <CiBarcode style={{color:"var(--azulMedio)", height:25, width:25}}/>
                <span> Código: {id}</span>
              </div>
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex flex-row gap-1 items-center text-[12px] xl:text-[14px]">
                  <FcClock style={{color:"var(--azulMedio)", height:20, width:20}}/>
                  <span>N° de horas: {nhoras}</span>
                </div>
                <div className="flex flex-row gap-1 items-center text-[12px] xl:text-[14px]">
                  <FcSurvey style={{color:"var(--azulMedio)", height:20, width:20}}/>
                  <span>N° de cursos: {ncursos}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-4 justify-center">
            <button 
              onClick={handleRowClick}
              className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
              >Comenzar
            </button>
            <Link
              to={`/aula/notas`}
              className="text-sm px-auto py-2 min-w-[100px] text-center text-sky-600 border border-sky-600 rounded hover:bg-sky-600 hover:text-white active:bg-sky-500 focus:outline-none focus:ring">
              Notas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const imageGradoMap = {
  0: '/img-grados/all.jpg',
  1001: '/img-grados/tt-osha.jpg',
  1002: '/img-grados/ttc-osha.png',
  1010: '/img-grados/th-osha.png',
  1016: '/img-grados/tsso-osha.png',
  1019: '/img-grados/tta-osha.jpg',
  1020: '/img-grados/tsstic-osha.jpg',
  1040: '/img-grados/ssst-osha.jpg',
  1060: '/img-grados/gsic-osha.jpg',
  1061: '/img-grados/gsso-osha.jpg',
  1080: '/img-grados/dprl-osha.jpg',
  2010: '/img-grados/esst-osha.jpg',
  2020: '/img-grados/esso-osha.jpg',
  2030: '/img-grados/eprl-osha.jpg',
  2040: '/img-grados/ehiv-osha.jpg',
  2050: '/img-grados/essc-osha.jpg',
  2060: '/img-grados/esham-osha.jpg',
  3010: '/img-grados/tsslic-osha.png',
  5000: '/img-grados/soep.jpg',
  5001: '/img-grados/tapt.jpg',
  5010: '/img-grados/slam.jpg',
};

export { CardPrograma };
