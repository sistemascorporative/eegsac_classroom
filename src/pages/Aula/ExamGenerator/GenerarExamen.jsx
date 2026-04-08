import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getModulosByCourse } from '../../../api/Modulo.api';
import { generateExam } from '../../../api/GenerateExam.api';
import { FaRegTrashAlt  } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";


//FORMULRIO PARA GENERAR EXAMEN
const GenerarExamen = ({ courses, onGenexaComplete, setSelectedExamId }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      modules: [{ name: '', questions: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control, name: 'modules',
  });
  const [modules, setModules] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Actualizar el curso seleccionado
  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setSelectedCourseId(courseId);
    setSelectedExamId(courseId);
  };

  // Función para manejar el envío del formulario y generar preguntas
  const onSubmit = async (data) => {
    setIsGenerating(true);
    try {
      // Preparar los datos para enviar al backend
      const requestData = {
        courseId: selectedCourseId,
        modules: data.modules
      };
      // Llamada al backend para generar preguntas
      const response = await generateExam(requestData);
      toast.success("Preguntas generadas exitosamente.");
      onGenexaComplete()
    } catch (error) {
      toast.error("" + (error || "Error inesperado"));
    } finally {
      setIsGenerating(false); // Finalizar el proceso de escaneo
    }
  };

  // Cargar módulos cuando cambie el curso seleccionado
  useEffect(() => {
    const fetchModules = async () => {
      if (selectedCourseId) {
        try {
          const modulesData = await getModulosByCourse(selectedCourseId);
          setModules(modulesData);
        } catch (error) {
          toast.error("Error al obtener módulos:", error);
        }
      }
    };
    fetchModules();
  }, [selectedCourseId]);

  return(
    <form onSubmit={handleSubmit(onSubmit)}
      className="text-gray-700 bg-white border border-gray-400 rounded-lg p-5 flex flex-col space-y-4"
    >
      {/* Título */}
      <h3 className="text-center tex-primary font-bold">Generador de Exámenes</h3>

      {/* Selector de Curso */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="course">
          Seleccione un curso:
        </label>
        <select
          id="course"
          className="text-[14px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
          {...register("course", { required: "Por favor selecciona un curso" })}
          onChange={handleCourseChange}
        >
          <option value="">Selecciona un curso</option>
          {courses.map((course) => (
            <option key={course.curcod} value={course.curcod}>
              {course.curcod} - {course.curnom}
            </option>
          ))}
        </select>
        {errors.course && <p className="text-red-500 text-xs">*{errors.course.message}</p>}
      </div>
  
      {/* Selección de módulos y número de preguntas */}
      <div className="w-full space-y-2">
        <label htmlFor="idModule">
          Seleccione el Módulo y Número de Preguntas a generar:
        </label>
        {fields.map((field, index) => (
          <div key={field.id} className="w-full flex flex-col md:flex-row  gap-2">
            {/* Nombre del módulo */}
            <select
              id="idModule"
              className="md:w-full text-[14px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              {...register(`modules.${index}.name`)}
            >
              <option value="">Selecciona un módulo</option>
              {modules.map((module) => (
                <option key={module.modcod} value={module.modcod}>
                  {module.modcod} - {module.modnom}
                </option>
              ))}
            </select>
  
            {/* Número de preguntas */}
            <input 
              type="number" 
              placeholder="Nº de preguntas" 
              {...register(`modules.${index}.questions`, { min:1 })} 
              className="text-[14px] min-w-[140px] p-2 border border-gray-300 rounded-md"
            />
  
            {/* Botón para eliminar el módulo */}
            <button 
              type="button" 
              onClick={() => remove(index)} 
              className="px-2 flex items-center justify-center space-x-2 text-[14px] px-1 py-[6px] text-center text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring"
            >
              <FaRegTrashAlt />
              <span>Eliminar</span>
            </button>
          </div>
        ))}
        {/* Botón para agregar más módulos */}
        <button 
          type="button" 
          onClick={() => append({ name: '', questions: '' })} 
          className="px-2 flex items-center space-x-2 mb-5 text-[14px] px-1 py-[6px] text-center text-white bg-green-600 border border-green-600 rounded active:text-green-500 hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring"
        >
          <IoIosAddCircle />
          <span>Agregar Módulo</span>
        </button>
      </div>

      {/* Botón para enviar el formulario */}
      <button type="submit" className="text-[14px] px-1 py-[6px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring">
      {isGenerating ? "Generando examen, por favor espere..." : "Generar Examen"}
      </button>
    </form>
  )
};

export { GenerarExamen };