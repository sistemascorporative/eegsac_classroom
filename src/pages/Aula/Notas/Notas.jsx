import React, { useEffect, useState } from "react";
import notasColumnsForCourse from "../../../utils/NotasUtils/notasColumnsForCourse";
import { TableGrades } from '../../../components/Table/TableGrades';
import { Loading } from "../../../components/ui/Loading";
import { Error } from '../../../components/ui/Error';
import { AccordianExamProgram, AccordianItem } from "../../../components/ui/AccordionsNotas";
import { getMatriculasProgramaPorEstudiante } from "../../../api/Matricula.api";
import { getResgistroExamenProgramaPorMatricula, getRegistrosExamenCursoPorEmail } from "../../../api/Examen.api";


function Notas() {
  const [programasNotas, setProgramasNotas] = useState([]);
  const [registrosExamenCurso, setRegistrosExamenCurso] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Definición de las columnas de la tabla
  const columns = React.useMemo(
    () => [
      {
        Header: 'COD',
        accessor: 'regexaproexacod.exacurcod.curcod',
      },
      {
        Header: 'Nombre del curso',
        accessor: 'regexaproexacod.exacurcod.curnom',
      },
      {
        Header: 'Nota',
        accessor: 'regexapropun',
      },
    ],
    []
  );

  const handleAccordionChange = (selected) => {
    //console.log('Selected accordion item:', selected);
  };

  useEffect(() => {
    const loadNotasMatriculaPrograma = async () => {
      try {
        const email = localStorage.getItem('email');
        if(!email) {
          throw new Error('No se encontró el email del estudiante en local storage.');
        }
        const matriculasData = await getMatriculasProgramaPorEstudiante(email);
        const registrosExamenPrograma = await Promise.all(matriculasData.map(async (matricula) => {
          try {
            const examenesData = await getResgistroExamenProgramaPorMatricula(matricula.matproprocod.procod, matricula.matproestcod.id);
            return { ...matricula, examenes: examenesData };
          } catch (examenError) {
            console.error(`Error al cargar los exámenes para el programa ${matricula.matprocod}:`, examenError);
            return { ...matricula, examenes: [] };
          }
        }));
        setProgramasNotas(registrosExamenPrograma);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    const loadRegistrosExamenCurso = async () => {
      try {
        const email = localStorage.getItem('email');
        if(!email) {
          throw new Error('No se encontró el email del estudiante en local storage.');
        }
        const registrosExamenData = await getRegistrosExamenCursoPorEmail(email);
        //console.log("registrosExamenData");
        //console.log(registrosExamenData);
        setRegistrosExamenCurso(registrosExamenData);
      } catch (error) {
        setError(error);
      }
    };
    loadNotasMatriculaPrograma();
    loadRegistrosExamenCurso();
  }, []);

  if (loading) return <Loading/>;
  if (error) return <Error text={error}/>

  return (
    <div>
      {/* Notas de programas matriculados */}
      <div>
        <span>
          <h1 className="text-primary font-bold">Notas de programas matriculados</h1>
          <div className="h-2 w-14 bg-secondary mt-1"></div>
        </span>
        {/* Accordian for programas */}
        <div className='mt-8 w-full'>
          <AccordianExamProgram
            value={0}
            onChange={handleAccordionChange}
            className='flex flex-col gap-3'
          >
            {programasNotas.map((programa, index) => (
              <AccordianItem
                key={index}
                value={index}
                cod={programa.matproprocod.procod}
                codosh={programa.matproprocod.procodosh}
                nompro={programa.matproprocod.pronom}
                promedio={programa.matpropun}
              >
                {programa.examenes.length > 0 ? (
                  <TableGrades
                    nombreID="id"
                    columns={columns}
                    data={programa.examenes}
                    nombre="Cursos"
                  />
                ) : (
                  <div>No hay registros de exámenes para este programa.</div>
                )}
              </AccordianItem>
            ))}
          </AccordianExamProgram>
        </div>
      </div>
      {/* Notas de cursos matriculados */}
      <div className="mt-12">
        <span>
          <h1 className="text-primary font-bold">Notas de cursos matriculados</h1>
          <div className="h-2 w-14 bg-secondary mt-1"></div>
        </span>
        {/* Tabla */}
        <div className='mt-8 w-full'>
          {registrosExamenCurso.length > 0 ? (
            <TableGrades
              nombreID="exacurcod"
              columns={notasColumnsForCourse}
              data={registrosExamenCurso}
              nombre="examenes"
            />
          ) : (
            <div>No hay notas disponibles para los cursos matriculados.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Notas