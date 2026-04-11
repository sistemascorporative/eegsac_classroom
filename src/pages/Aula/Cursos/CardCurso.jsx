import React, { useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ImageCursoMap } from './ImageCursoMap';
import { CiBarcode } from "react-icons/ci";
import { FaCentercode } from "react-icons/fa";


const CardCurso = ({ id, nombre }) => {
  const navigate = useNavigate();
  
  const handleRowClick = useCallback(() => {
    navigate(`/aula/cursos/${id}`);
  }, [navigate, id]);

  return(
    <div className="group cursor-pointer overflow-hidden shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg bg-">
      <div className="relative mx-auto">
        <div className="relative"  onClick={handleRowClick}>
          <img className="w-full h-full object-cover" src={ImageCursoMap[id] || ImageCursoMap[0]} alt="grado" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <div className="absolute top-0 right-0 bg-green-600 rounded-bl-2xl text-white text-sm">
            <div className="flex flex-row py-4 px-4 items-center gap-1">
              <FaCentercode style={{height:25, width:25}}/>
              <span>Curso Expert Engineers Group SAC</span>
            </div>
          </div>
        </div>
        <div className="px-5 pb-5">
          <span className="relative grid h-24 w-24 -mt-14 p-2 border-orange-600 border-8 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-grisFondo">
            <img src="/logo/logoEegsac.png" alt="grado"/>
          </span>
          <div
            className="mt-2 text-base leading-7 text-gray-600 transition-all duration-300"
          >
            <h4 className="text-orange-600 text-center font-bold text-sm md:text-lg transition-all duration-300">
              {nombre}
            </h4>
            <div className="mt-2 flex flex-col items-center gap-1 mx-auto">
              <div className="flex flex-row gap-2">
                <CiBarcode style={{color:"var(--primary)", height:25, width:25}}/>
                <span> Código: {id}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-4 justify-center">
            <button 
              onClick={handleRowClick}
              className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-orange-600 border border-orange-600 rounded active:text-green-500 hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring"
              >Comenzar
            </button>
            <Link
              to={`/aula/notas`}
              className="text-sm px-auto py-2 min-w-[100px] text-center text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white active:bg-orange-500 focus:outline-none focus:ring">
              Notas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardCurso };
