import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getPdfPages, processPdf } from '../../../api/Curso.api';
import { toast } from 'react-toastify';


// ESCANEO DEL CONTENIDO DEL PDF 
const ScanOptionsForm = ({ courseId, onScanComplete, isDisabled }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [totalPages, setTotalPages] = useState(1); // Inicializa el número total de páginas
  const [loading, setLoading] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  // Función para obtener el número de páginas del PDF
  useEffect(() => {
    const fetchPdfPages = async () => {
      try {
        const { total_pages } = await getPdfPages(courseId); // Llama al endpoint que dará el número de páginas
        setTotalPages(total_pages);
        setValue('endPage', total_pages); // Por defecto, la última página será el total de páginas
      } catch (error) {
        console.error('Error al obtener el número de páginas del PDF:', error);
        toast.error('Error al obtener los datos del PDF');
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchPdfPages();
    }
  }, [courseId, setValue]);

  const onSubmit = async (data) => {
    setIsScanning(true);
    try {
      const response = await processPdf(courseId, data.startPage, data.endPage);
      onScanComplete();
      //console.log('Texto extraído:', response.texto); // Mostramos el texto procesado
      toast.success('El escaneo se completó exitosamente.');
    } catch (error) {
      console.error('Error al procesar el PDF:', error);
      toast.error("Error al procesar el PDF");
    } finally {
      setIsScanning(false); // Finalizar el proceso de escaneo
    }
  };

  if (loading) {
    return <p>Cargando datos del PDF...</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={`text-gray-700 bg-white border border-gray-400 rounded-lg p-5 flex flex-col space-y-4 ${
        isDisabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <h3 className="text-center font-bold">Opciones de Escaneo</h3>

      {/* Rango de páginas */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="startPage">Página de inicio:</label>
        <input
          id="startPage"
          type="number"
          defaultValue={1} // Valor inicial de la primera página
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
          {...register("startPage", { 
            required: "Indica la página de inicio", 
            min: { value: 1, message: "La página de inicio no puede ser menor que 1" },
            max: { value: totalPages, message: `La página de inicio no puede ser mayor que ${totalPages}` }
          })}
          disabled={isDisabled || isScanning}
        />
        {errors.startPage && <p className="text-red-500 text-xs">*{errors.startPage.message}</p>}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="endPage">Página de fin:</label>
        <input
          id="endPage"
          type="number"
          defaultValue={totalPages} // Por defecto, el valor máximo será el total de páginas
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
          {...register("endPage", { 
            required: "Indica la página de fin", 
            min: { value: 1, message: "La página de fin no puede ser menor que 1" },
            max: { value: totalPages, message: `La página de fin no puede ser mayor que ${totalPages}` }
          })}
          disabled={isDisabled || isScanning}
        />
        {errors.endPage && <p className="text-red-500 text-xs">*{errors.endPage.message}</p>}
      </div>

      <button
        type="submit"
        className="text-[14px] px-1 py-[6px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
        disabled={isDisabled || isScanning}
      >
        {isScanning ? "Escaneando contenido del PDF, por favor espere..." : "Iniciar Escaneo"}
      </button>
    </form>
  );
};

export { ScanOptionsForm };