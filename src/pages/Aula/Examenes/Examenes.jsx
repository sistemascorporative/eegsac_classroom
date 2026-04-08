import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import examenColumns from "../../../utils/ExamenesUtils/examenesColumns";
import examenesColumnsForCourse from "../../../utils/ExamenesUtils/examenesColumnsForCourse";
import { TableExam } from '../../../components/Table/TableExam';
import { Loading } from "../../../components/ui/Loading";
import { Error } from '../../../components/ui/Error';
import { AccordianExamProgram, AccordianItem } from "../../../components/ui/AccordionsExamen";
import { getResgistroExamenProgramaPorMatricula, getRegistrosExamenCursoPorEmail } from "../../../api/Examen.api";
import { FaInfoCircle } from "react-icons/fa";
import { getMatriculasProgramaPorEstudiante } from "../../../api/Matricula.api";


function Examenes() {
  const [registrosExamenPro, setRegistrosExamenPrograma] = useState([]);
  const [registrosExamenCurso, setRegistrosExamenCurso] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleAccordionChange = (selected) => {
    //console.log('Item seleccionado del accordion:', selected);
  };

  const handleTakeExam = useCallback((idExamen, programaId) => {
    navigate(`/aula/examen/${idExamen}`, { state: { programaId } });
  }, [navigate]);

  const handleReviewExam = useCallback((idExamen, programaId, puntaje, intentos, estado) => {
    navigate(`/aula/examen-review/${idExamen}`, { state: { programaId, puntaje, intentos, estado } });
  }, [navigate]);
  
  useEffect(() => {
    const loadRegistrosExamenPrograma = async () => {
      try {
        const email = localStorage.getItem('email');
        if(!email) {
          throw new Error('No se encontró el email del estudiante en local storage.');
        }
        const matriculasData = await getMatriculasProgramaPorEstudiante(email);
        // Cargar los registros de exámenes para cada programa
        const registrosexamenes = await Promise.all(matriculasData.map(async (matricula) => {
          try {
            const examenesData = await getResgistroExamenProgramaPorMatricula(matricula.matproprocod.procod, matricula.matproestcod.id);
            return { ...matricula, examenes: examenesData };
          } catch (examenError) {
            console.error(`Error al cargar exámenes para el programa ${matricula.matprocod}:`, examenError);
            return { ...matricula, examenes: [] };
          }
        }));
        setRegistrosExamenPrograma(registrosexamenes);
      } catch (error) {
        setError(error);
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
        setRegistrosExamenCurso(registrosExamenData);
      } catch (error) {
        setError(error);
      }
    }
    loadRegistrosExamenPrograma();
    loadRegistrosExamenCurso();
  }, []);
  
  if (loading) return <Loading/>;
  if (error) return <Error text={error.message || 'Error inesperado. Intente nuevamente.'}/>

  const hasExams = registrosExamenPro.some(programa => programa.examenes && programa.examenes.length > 0);
  
  return (
    <div>
      {/* Exámenes de programas matriculados */}
      <div>
        <span>
          <h1 className="text-primary font-bold">Exámenes de programas matriculados</h1>
          <div className="h-2 w-14 bg-secondary mt-1"></div>
        </span>
        {/* Accordian for programas */}
        <div className='mt-8 w-full'>
          {registrosExamenPro.length === 0 ? (
            <div className="w-full flex flex-row items-center justify-center gap-2">
              <FaInfoCircle />
              <div>No hay programas matriculados actualmente, por lo tanto no tiene examenes pendientes.</div>
            </div>
          ) : (
            <AccordianExamProgram
              value={0}
              onChange={handleAccordionChange}
              className='flex flex-col gap-3'
            >
              {registrosExamenPro.map((programa, index) => (
                <AccordianItem
                  key={index}
                  value={index}
                  cod={programa.matproprocod.procod}
                  codosh={programa.matproprocod.procodosh}
                  nompro={programa.matproprocod.pronom}
                >
                  {programa.examenes.length > 0 ? (
                    <TableExam
                      codRow= 'regexaproexacod.exacurcod.curcod'
                      columns={examenColumns}
                      data={programa.examenes}
                      nombre="examen"
                      onTakeExam={(idExamen) => handleTakeExam(idExamen, programa.matproprocod.procod)}
                      onReview={(idExamen, puntaje, intentos, estado) => handleReviewExam(idExamen, programa.matproprocod.procod, puntaje, intentos, estado)}
                      clickableRows={false}
                    />
                  ) : (
                    <div>No hay registros de exámenes para este programa.</div>
                  )}
                </AccordianItem>
              ))}
            </AccordianExamProgram>
          )}
        </div>
      </div>
      {/* Exámenes de cursos matriculados */}
      <div className="mt-12">
        <span>
          <h1 className="text-primary font-bold">Exámenes de cursos matriculados</h1>
          <div className="h-2 w-14 bg-secondary mt-1"></div>
        </span>
        {/* Tabla */}
        <div className='mt-8 w-full'>
          {registrosExamenCurso.length > 0 ? (
            <TableExam
              codRow="regexacurexacod.exacurcod.curcod"
              columns={examenesColumnsForCourse}
              data={registrosExamenCurso}
              nombre="examen"
              onTakeExam={handleTakeExam}
              onReview={handleReviewExam}
              clickableRows={false}
            />
          ) : (
            <div>No hay exámenes disponibles para los cursos matriculados.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Examenes