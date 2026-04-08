import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getExamenPorID, postRespuestas } from "../../../api/Examen.api";
import { Loading } from "../../../components/ui/Loading";
import { Error } from '../../../components/ui/Error';
import Modal from '../../../components/Modal/Modal';
import { toast } from 'react-toastify';
import { MdInfoOutline } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";


function Examen() {
  const [examData, setExamData] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFormCancel, setActiveFormCancel] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200); // 7200 = 2 horas en segundos
  
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const programaId = location.state?.programaId; // Obtener el programaId del estado

  useEffect(() => {
    const loadExamenes = async () => {
      try {
        if(params.id) {
          const data = await getExamenPorID(params.id);
          setExamData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadExamenes();
  }, [params.id]);


  // Temporizador de cuenta regresiva
  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit(); // Enviar respuestas cuando el tiempo llegue a 0
    }
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer); // Limpiar el temporizador al desmontar el componente
  }, [timeLeft]);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${Math.floor(minutes / 60)
      .toString()
      .padStart(2, '0')}:${(minutes % 60)
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };


  const handleOptionChange = (questionId, optionId) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: optionId,
    }));
  };


  const handleSubmit = async () => {    
    // Validación para asegurarse de que todas las preguntas tengan una respuesta seleccionada
    const unansweredQuestions = examData.preguntas?.filter(
      pregunta => !selectedAnswers.hasOwnProperty(pregunta.precod)
    );
    try {
      const examenId = params.id;
      const respuestas = selectedAnswers;
      const response = await postRespuestas(examenId, programaId, respuestas);
      if (response.status === 200) {
        toast.success("Se terminó el tiempo, tus respuestas fueron enviadas exitosamente.");
        navigate("/aula/examenes");
      }
    } catch (error) {
      // Si hay un error, mostramos el mensaje en la consola y redirigimos al usuario
      if (error.response && error.response.status === 400) {
        navigate("/aula/examenes");
        toast.error("Error 400: Solicitud incorrecta. Revise los datos enviados.");
      } else {
        navigate("/aula/examenes");
        toast.error("Error inesperado: ", error.message);
      }
    }
  };


  const handleSubmitExam = async () => {    
    // Validación para asegurarse de que todas las preguntas tengan una respuesta seleccionada
    const unansweredQuestions = examData.preguntas?.filter(
      pregunta => !selectedAnswers.hasOwnProperty(pregunta.precod)
    );
    if (unansweredQuestions.length > 0) {
      toast.warn("Por favor, responde a todas las preguntas antes de enviar el examen.");
      return;
    }
    try {
      const examenId = params.id;
      const respuestas = selectedAnswers;
      const response = await postRespuestas(examenId, programaId, respuestas);

      if (response.status === 200) {
        toast.success("Respuestas enviadas exitosamente.");
        navigate("/aula/examenes");
      }
    } catch (error) {
      toast.error(`Error al enviar el examen: ${error}`);
    }
  };


  const handleCancel = () => {
    setActiveFormCancel(!activeFormCancel);
    //navigate("/aula/examenes")
  };

  if (loading) return <Loading/>;
  if (error) return <Error text={error}/>

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="flex-1 space-y-2 border border-2-gray-200 py-3 px-5 bg-white rounded-lg">
          <h2 className="font-bold">Examen {examData.exacurcod?.curcod || "Curso Desconocido"}</h2>
          <hr className="border-gray-300 w-full" />
          <h4 className="w-full text-[16px]">Curso: <span className="text-gray-600">{examData.exacurcod?.curnom || "Curso Desconocido"}</span></h4>
        </div >
        <div className="w-ful flex flex-col gap-1 border border-2-gray-200 py-3 px-5 bg-white rounded-lg  items-center">
          <h4 className="text-md">Tiempo de examen:</h4>
          <hr className="border-gray-300 w-full" />
          <p className="text-gray-500 text-lg font-bold">{formatTime(timeLeft)}</p>
        </div>
      </div>
      <div className="border border-2-gray-200 py-4 px-5 bg-white rounded-lg mt-4">
        <h4 className="font-bold mb-2">Instrucciones para el examen</h4>
        <p className="mb-4">Para aprobar este examen, debes obtener una puntuación mínima del 70 %. La calificación se expresa en una escala de 0 a 100 puntos, por lo que necesitas al menos 70 puntos para aprobar. Este examen es de libro abierto, por lo que puedes usar el material del curso en línea para ayudarte a investigar y responder preguntas según sea necesario. No puedes recibir ayuda de otra persona.</p>
        <span className="text-gray-500 font-semibold text-[15px]">Importante: lee esto antes de comenzar el examen:</span>
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
        <p className="mt-4">Si apruebas el examen, no podrás volver a realizarlo para obtener una mejor puntuación. Si no apruebas, puedes volver a realizar el examen. Tiene hasta 3 intentos para aprobar el examen.</p>
      </div>
      <div className="mt-5">
        <ul className="flex flex-col gap-4">
          {examData.preguntas?.map((pregunta, index) => {
            const isAnswered = selectedAnswers.hasOwnProperty(pregunta.precod);
            return (
              <li
                key={pregunta.precod}
                className={`p-4 bg-white rounded-lg shadow-lg border-l-8 ${isAnswered ? 'border-sky-600' : 'border-gray-400 '}`}
              >
                <strong className="text-md text-sky-700">{index + 1}. {pregunta.pretex || "Texto de la pregunta no disponible"}</strong>
                <ul className="mt-2 ml-4 text-gray-600">
                  {pregunta.alternativas?.map((alternativa) => (
                    <li key={alternativa.altcod}>
                      <label className="pl-2 flex gap-2 hover:bg-gray-200 p-1 rounded-md text-sm">
                        <input
                          type="radio"
                          name={`question-${pregunta.precod}`}
                          value={alternativa.altcod}
                          checked={selectedAnswers[pregunta.precod] === alternativa.altcod}
                          onChange={() => handleOptionChange(pregunta.precod, alternativa.altcod)}
                        />
                        {alternativa.alttex || "Texto de la alternativa no disponible"}
                      </label>
                    </li>
                  )) || <li>No hay alternativas disponibles</li>}
                </ul>
              </li>
            );
          }) || <li>No hay preguntas disponibles</li>}
        </ul>
      </div>
      {/* Botones */}
      <div className="mt-5 flex gap-4 justify-end">
        <button
          onClick={handleCancel}
          className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring"
          >Cancelar
        </button>
        <button 
          onClick={handleSubmitExam}
          className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
          >Finalizar
        </button>
      </div>
      {/* Modal para crear un nuevo alquler*/}
      <Modal active={activeFormCancel} toggle={handleCancel}>
        <CancelModal toggle={handleCancel}/>
      </Modal>
    </section>
  )
}

const CancelModal = ({toggle}) => {
  const navigate = useNavigate();
  return(
    <div className="w-full flex flex-col gap-5">
      <div className="mt-3 flex flex-row gap-2 mx-auto items-center">
        <MdInfoOutline style={{color:"var(--primary)", width:25, height:25}}/>
        <p className="text-primary text-center text-[16px] font-bold">¿Está seguro que desea cancelar su examen?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mx-auto">
        <button
          onClick={() => navigate("/aula/examenes")}
          className="text-sm px-auto py-2 min-w-[150px] text-center text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring"
          >Abandonar Examen
          </button>
        <button 
          onClick={toggle}
          className="text-sm px-auto py-2 min-w-[150px] text-center text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
          >Regresar al Examen
        </button>
      </div>
    </div>
  )
}

export default Examen;