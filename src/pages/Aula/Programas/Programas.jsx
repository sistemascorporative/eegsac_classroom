import React, { useEffect, useState } from 'react';
import { CardPrograma } from './CardPrograma';
import { getProgramasPorEstudiante } from '../../../api/Programa.api';
import { Loading } from '../../../components/ui/Loading';
import { Error } from '../../../components/ui/Error';
import { FaInfoCircle } from "react-icons/fa";


function Programas() {
  const [programas, setProgramas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProgramas = async () => {
      try {
        const email = localStorage.getItem('email');
        const programasData = await getProgramasPorEstudiante(email);
        setProgramas(programasData);
      } catch (error) {
        setError(error.message || "Ocurrió un error al cargar programas.");
      } finally {
        setLoading(false);
      }
    };
    loadProgramas();
  }, []);

  if (loading) return  <Loading/>;
  if (error) return <Error text={error}/>

  return (
    <section>
      {/* Titulo */}
      <span>
        <h1 className="text-primary font-bold uppercase">Programas Matriculados</h1>
        <div className="h-2 w-14 bg-secondary mt-2"></div>
      </span>

      {/* Tarjetas de programas */}
      {programas.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {programas.map((programa) => ( // CORRECCIÓN: Se usan llaves para JSX
            <div key={programa.procod} className="w-full">
              <CardPrograma
                id={programa.procod}
                nombre={programa.pronom}
                nhoras={programa.pronumhor}
                ncursos={programa.pronumcur}
                codigo={programa.procodosh}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 w-full flex flex-row gap-2 items-center justify-center text-sky-700">
          <FaInfoCircle />
          <p className="text-gray-600">No se encontraron programas matriculados.</p>
        </div>
      )}
    </section>
  )
}

export default Programas;