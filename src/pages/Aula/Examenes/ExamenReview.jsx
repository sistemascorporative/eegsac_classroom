import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getExamenPorID, getRespuestasExamenPrograma } from "../../../api/Examen.api";
import { Loading } from "../../../components/ui/Loading";
import { Error } from '../../../components/ui/Error';


function ExamenReview() {
  const [examData, setExamData] = useState(null);
  const [examRespuesta, setExamRespuesta] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const programaId = location.state?.programaId;
  const puntaje = location.state?.puntaje;
  const intentos = location.state?.intentos;
  const estadoExamen = location.state?.estado;

  useEffect(() => {
    const loadExamenes = async () => {
      // Si el examen está pendiente no cargar nada
      //console.log("---------estadoExamen");
      //console.log(estadoExamen);
      if(estadoExamen === "Pendiente") {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        if (id) {
          const examen = await getExamenPorID(id);
          setExamData(examen);
        }
        const emailStudent = localStorage.getItem('email');
        if (emailStudent && programaId && id) {
          const respuestas = await getRespuestasExamenPrograma(emailStudent, programaId, id);
          setExamRespuesta(respuestas);
        }
      } catch (err) {
        setError(err.message || "Error al cargar el examen");
      } finally {
        setLoading(false);
      }
    };

    loadExamenes();
  }, [id, programaId, estadoExamen]);

  const respuestasMap = useMemo(() => {
    const map = {};
    examRespuesta?.forEach(res => {
      map[res.resproprecod] = res;
    });
    return map;
  }, [examRespuesta]);

  if (loading) return <Loading />;
  if (error) return <Error text={error} />;

  if (estadoExamen === "Pendiente") {
    return (
      <div className="mt-5 flex flex-col gap-4 justify-end">
        <div className="mt-5 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          Usted aún no ha realizado el examen.
        </div>
        <button
          onClick={() => navigate("/aula/examenes")}
          className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
        >
          Regresar
        </button>
    </div>
    );
  }
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="flex-1 space-y-2 border border-2-gray-200 py-3 px-5 bg-white rounded-lg">
          <h2 className="font-bold">Revisión del Examen {examData.exacurcod?.curcod || "Curso Desconocido"}</h2>
          <hr className="border-gray-300 w-full" />
          <h4 className="w-full text-[16px]">
            Curso: <span className="text-gray-600">{examData.exacurcod?.curnom || "Curso Desconocido"}</span>
          </h4>
        </div>
        <div className="w-ful flex flex-col gap-1 border border-2-gray-200 py-3 px-5 bg-white rounded-lg  items-center">
          <h4 className="text-md">Puntaje: <span className="text-gray-600">{puntaje} / 100</span></h4>
          <hr className="border-gray-300 w-full" />
          <h4 className="text-md">Intentos: <span className="text-gray-600">{intentos}</span></h4>
        </div>
      </div>

      <div className="mt-5">
        <ul className="flex flex-col gap-4">
          {examData.preguntas?.map((pregunta, index) => {
            const respuesta = respuestasMap[pregunta.precod];
            const alternativaSeleccionada = respuesta?.resproaltcod;
            const fueCorrecta = parseFloat(respuesta?.respropun || 0) > 0;
            return (
              <div key={pregunta.precod} className="p-4 bg-white rounded-lg shadow-lg border-l-8">
                <h4 className="text-lg font-semibold mb-2">
                  {index + 1}. {pregunta.pretex}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {pregunta.alternativas.map((alt) => {
                    const esSeleccionada = alt.altcod === alternativaSeleccionada;
                    const esCorrecta = alt.altcorrecta;
                    return (
                      <li
                        key={alt.altcod}
                        className={`p-2 rounded border 
                          ${esSeleccionada ? (fueCorrecta ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500") : "bg-white"}
                          ${esCorrecta ? "font-semibold" : ""}
                        `}
                      >
                        <span className="text-gray-600">{alt.alttex}</span>
                        {esSeleccionada && (
                          <span className="ml-2 font-bold">
                            {fueCorrecta ? "✔ Correcto" : "✘ Incorrecto"}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {/* Mostrar explicación solo si el estado es aprobado */}
                {estadoExamen === "Aprobado" && (
                  <>
                    <h4 className="mt-3">Explicación:</h4>
                    <p className="text-gray-700">{pregunta.preexp}</p>
                  </>
                )}
              </div>
            );
          })}
        </ul>
      </div>

      <div className="mt-5 flex gap-4 justify-end">
        <button
          onClick={() => navigate("/aula/examenes")}
          className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
        >
          Regresar
        </button>
      </div>
    </section>
  );
}

export default ExamenReview;