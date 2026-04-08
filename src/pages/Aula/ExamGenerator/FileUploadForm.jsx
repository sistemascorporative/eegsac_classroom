import React from 'react';
import { useForm } from 'react-hook-form';


// FORMULARIO PARA SUBIR PDF
const FileUploadForm = ({ courses = [], onSubmit, isDisabled }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Verifica el archivo cargado para asegurarse de que es un PDF
  const validateFile = (file) => {
    if (file && file[0]) {
      const allowedTypes = ['application/pdf'];
      return allowedTypes.includes(file[0].type) || "Solo son permitidos archivos PDF!";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={`bg-white border border-gray-400 rounded-lg p-5 flex flex-col space-y-4 ${
        isDisabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <h3 className="text-center font-bold">Subir PDF</h3>
      {/* Selector de Curso */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="course">
          Seleccione un curso:
        </label>
        <select
          id="course"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
          {...register("course", { required: "Por favor selecciona un curso" })}
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

      {/* Subir archivo PDF */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="pdfFile">
          Subir PDF:
        </label>
        <input
          id="pdfFile"
          className="text-sm file:mr-4 file:py-1 file:px-2 file:rounded-md file:border file:bg-gray-100 file:text-gray-600 hover:file:bg-gray-200"
          type="file"
          accept=".pdf"
          {...register("pdfFile", {
            required: "Por favor seleccione un archivo PDF",
            validate: validateFile
          })}
        />
        {errors.pdfFile && <p className="text-red-500 text-xs">*{errors.pdfFile.message}</p>}
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className="text-[14px] px-1 py-[6px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
      >
        Subir PDF y continuar
      </button>
    </form>
  );
};

export { FileUploadForm };