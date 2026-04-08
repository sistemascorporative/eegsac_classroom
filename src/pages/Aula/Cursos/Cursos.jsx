import React, { useEffect, useState } from 'react';
import { getCursosGratuitos, getCursosMatriculadosPorEstudiante } from '../../../api/Curso.api';
import { CardCurso } from './CardCurso';
import { CardCursoFree } from './CardCursoFree';
import { Loading } from '../../../components/ui/Loading';
import { Error } from '../../../components/ui/Error';
import { FaInfoCircle } from "react-icons/fa";


const Cursos = () => {
  const [cursosMatriculados, setCursosMatriculados] = useState([]);
  const [cursosGratuitos, setCursosGratuitos] = useState([]);
  const [loadingMatriculados, setLoadingMatriculados] = useState(true);
  const [loadingGratuitos, setLoadingGratuitos] = useState(true);
  const [errorMatriculados, setErrorMatriculados] = useState(null);
  const [errorGratuitos, setErrorGratuitos] = useState(null);

  const loadCursosMatriculados = async () => {
    try {
      const email = localStorage.getItem('email');
      if (!email) {
        throw new Error('No se encontró el email en el almacenamiento local.');
      }
      const data = await getCursosMatriculadosPorEstudiante(email);
      setCursosMatriculados(data);
    } catch (error) {
      setErrorMatriculados(error.message);
    } finally {
      setLoadingMatriculados(false);
    }
  };

  const loadCursosGratuitos = async () => {
    try {
      const data = await getCursosGratuitos();
      setCursosGratuitos(data);
    } catch (error) {
      setErrorGratuitos(error.message);
    } finally {
      setLoadingGratuitos(false);
    }
  };

  useEffect(() => {
    loadCursosMatriculados();
    loadCursosGratuitos();
  }, []);

  return (
    <section>
      {/* Cursos Matriculados */}
      <div>
        <span>
          <h1 className="text-primary font-bold uppercase">Cursos Matriculados</h1>
          <div className="h-2 w-14 bg-secondary mt-2"></div>
        </span>
        {loadingMatriculados ? (
          <Loading />
        ) : errorMatriculados ? (
          <Error text={errorMatriculados} />
        ) : cursosMatriculados.length === 0 ? (
          <div className="w-full mt-4 flex flex-row gap-4 items-center justify-center">
            <FaInfoCircle />
            <p className="text-center text-gray-600">Usted no está matriculado en ningún curso.</p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {cursosMatriculados.map((curso) => (
              <div key={curso.curcod} className="w-full">
                <CardCurso id={curso.curcod} nombre={curso.curnom} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cursos Gratuitos */}
      {loadingGratuitos ? (
        <Loading />
      ) : errorGratuitos ? (
        <Error text={errorGratuitos} />
      ) : cursosGratuitos.length > 0 ? (
        <div className="mt-12">
          <span>
            <h1 className="text-primary font-bold uppercase">Cursos Gratuitos</h1>
            <div className="h-2 w-14 bg-secondary mt-2"></div>
          </span>
          <p className="mt-8 p-4 border border-yellow-500 rounded-md bg-white">
            Expert Engineers Group SAC ofrece cursos gratuitos para los usuarios con membresía. Puede explorar todo el contenido de estos cursos de manera libre. Si desea obtener un certificado por haber completado un curso, haga clic en el botón Matricularme. Después de revisar todo el contenido y aprobar el examen, podrá descargar su certificación.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {cursosGratuitos.map((curso) => (
              <div key={curso.curcod} className="w-full">
                <CardCursoFree
                  id={curso.curcod}
                  nombre={curso.curnom}
                  onMatricular={loadCursosMatriculados} // Prop para actualizar los matriculados
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}
    </section>
  );
};

export default Cursos;
