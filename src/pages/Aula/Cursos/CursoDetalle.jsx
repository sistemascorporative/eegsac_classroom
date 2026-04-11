import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TabSections } from '../../../components/ui/Tab';
import { getCursoById, getModulosByCurso } from '../../../api/Curso.api';
import cursosData from '../../Cursos/cursosData';
import { TbPointFilled } from "react-icons/tb";


function CursoDetalle() {
  const params = useParams();
  const [curso, setCurso] = useState({});
  const [modulos, setModulos] = useState([]);
  const [componenteActual, setComponenteActual] = useState(null);
  const [CursoComponents, setCursoComponents] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Estado para el ítem seleccionado

  const navigate = useNavigate();

  // Actualiza el estado del componente actual y el ítem seleccionado
  const handleClick = (componente, index) => {
    setComponenteActual(componente);
    setActiveIndex(index); // Actualiza el índice activo
  };

  useEffect(() => {
    const loadCurso = async () => {
      try {
        // Verifica si el curso existe en cursosData antes de hacer la petición
        if (!cursosData[params.idCurso]) {
          throw new Error('Curso no encontrado');
        }

        // Realiza la petición para obtener los detalles del curso
        const response = await getCursoById(params.idCurso);
        setCurso(response);
        setCursoComponents(cursosData[params.idCurso].components);
        // Establece el primer componente como el componente actual
        setComponenteActual(cursosData[params.idCurso].components.Introduccion);
        setActiveIndex(0); // 
      } catch (error) {
        console.error('Error al cargar el curso:', error);
        //toast.error(`Error al cargar el curso`);
        setComponenteActual(<div>Curso no encontrado</div>);
      }
    };
    const loadModulos = async () => {
      try {
        const responseModulos = await getModulosByCurso(params.idCurso);
        setModulos(responseModulos);
      } catch (error) {
        console.error('Error al cargar el curso:', error);
      }
    };
    loadCurso();
    loadModulos();
  }, [params.idCurso]);

  if (!curso) {
    return <div className="p-10 w-full">
      Cargando....
      </div>;
  }

  return(
    <>
      {/* Titulo y Bradcrumbs */}
      <div className="flex flex-col lg:flex-row gap-5 justify-between">
        <div className="flex flex-col">
          <h1 className="text-primary font-bold"><span className="text-gray-600">{curso.curcod}</span> - {curso.curnom}</h1>
          <div className="h-1.5 w-14 bg-secondary mt-2"></div>
        </div>
        <button
          onClick={() => navigate(-1)} // Regresar a la página anterior
          className="flex text-[14px] items-center px-2 py-1 bg-sky-600 text-white rounded-md hover:bg-sky-500 transition-colors duration-300"
        >
          {/* Ícono opcional (usando react-icons o cualquier otro) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span>Regresar</span>
        </button>
      </div>
      {/* Tab */}
      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        {/* Navegación del curso */}
        <div className="lg:w-1/4">
          <div className="relative z-10 h-auto p-4 bg-white border-radius rounded-lg shadow-lg">
            <ul
              className="lg:max-w-xs text-left font-medium text-lg leading-none border-primary divide-y divide-primary">
              <li>
                <a 
                  className={`py-3.5 w-full flex items-center text-primary hover:text-primary rounded-lg hover:bg-gray-100 ${activeIndex === 0 ? 'bg-blue-50' : ''}`}
                  href="#"
                  onClick={() => handleClick(<CursoComponents.Introduccion/>, 0)}
                >
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-primary rounded-r-md"></span>
                  Introducción
                </a>
              </li>
              <li>
                <a 
                  className={`py-3.5 w-full flex items-center text-primary hover:text-primary rounded-lg hover:bg-gray-100 ${activeIndex === 1 ? 'bg-blue-50' : ''}`}
                  href="#"
                  onClick={() => handleClick(<CursoComponents.Objetivos/>, 1)}
                >
                    <span className="ml-5 mr-2.5 w-1 h-7 bg-primary rounded-r-md"></span>
                    Objetivos del curso
                </a>
              </li>
              {CursoComponents && CursoComponents.Modulos && CursoComponents.Modulos.map((modulo, index) => (
                <li key={index}>
                  <a 
                    className={`py-3.5 w-full flex items-center text-primary hover:text-primary rounded-lg hover:bg-gray-100 ${activeIndex === index + 2 ? 'bg-blue-50' : ''}`}
                    href="#"
                    onClick={() => handleClick(<TabSections activeKey={0} sections={modulo} />, index+2)}
                  >
                    <span className="ml-5 mr-2.5 min-w-1 max-w-2 h-7 bg-primary rounded-r-md"></span>
                    <div className="flex flex-row lg:flex-col gap-1">
                      Módulo {index+1}:
                      {modulos && modulos[index] ? (
                        <p className='font-normal text-gray-500 text-sm'>{modulos[index].modnom}</p>
                      ) : (
                        <p className='font-normal text-gray-500 text-sm'></p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
              <li>
                <a
                  className={`py-3.5 w-full flex items-center text-primary rounded-lg hover:text-primary hover:bg-gray-100 ${activeIndex === modulos.length + 2 ? 'bg-blue-50' : ''}`}
                  href="#"
                  onClick={() => handleClick(<InstruccionesExamen idExamen={curso.curcod} idPrograma={params.idPrograma} />, modulos.length + 2)}
                >
                    <span className="ml-5 mr-2.5 w-1 h-7 bg-primary rounded-r-md"></span>
                    Examen final
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-3/4">
          {/* EL contenido va cambiando */}
          <section>
            {componenteActual}
          </section>
        </div>
      </div>
    </>
  )
};


const InstruccionesExamen = ({idExamen, idPrograma}) => {
  const navigate = useNavigate(); // Usa useNavigate para redirigir
  const handleStartExam = () => {
    navigate(`/aula/examen/${idExamen}`,  { state: { programaId:idPrograma } });
  };
  return(
    <div className="flex flex-col gap-4">
      <div className="p-5 bg-white rounded-lg shadow-lg flex flex-col gap-5">
        <h3 className="font-bold">Instrucciones para el examen</h3>
        <p>Para aprobar este examen, debes obtener una puntuación mínima del 70 %. La calificación se expresa en una escala de 0 a 100 puntos, por lo que necesitas al menos 70 puntos para aprobar. Este examen es de libro abierto, por lo que puedes usar el material del curso en línea para ayudarte a investigar y responder preguntas según sea necesario. No puedes recibir ayuda de otra persona.</p>
        <span className="text-gray-500 font-semibold text-[17px]">Importante: lee esto antes de comenzar el examen:</span>
        <ul className="mt-3 flex flex-col space-y-2">
          <li className="flex gap-1 text-primary">
            <TbPointFilled className="mt-1" style={{minHeight:14, minWidth:14, maxHeight:14, maxWidth:14}}/>
            <p className="">No actualices la página ni presiones el botón Atrás en tu navegador. Si lo haces, perderás tu progreso y tendrás que comenzar el examen nuevamente.</p>
          </li>
          <li className="flex gap-1 text-primary">
            <TbPointFilled className="mt-1" style={{minHeight:14, minWidth:14, maxHeight:14, maxWidth:14}}/>
            <p className="">Las preguntas de este examen se basan en el material de nuestro curso en línea.</p>
          </li>
        </ul>
        <p>Si apruebas el examen, no podrás volver a realizarlo para obtener una mejor puntuación. Si no apruebas, puedes volver a realizar el examen. Tiene hasta 3 intentos para aprobar el examen.</p>
        <div className="mx-auto my-4">
          <button className="px-7 py-3 min-w-[120px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
            onClick={handleStartExam}>
            Empezar Examen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CursoDetalle;