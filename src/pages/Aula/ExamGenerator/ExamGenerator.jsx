import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCursos, uploadCursoPDF } from '../../../api/Curso.api';
import { FileUploadForm } from './FileUploadForm';
import { ScanOptionsForm } from './ScanOptionsForm';
import { ValidateTxt } from './ValidateTxt';
import { GenerarExamen } from './GenerarExamen';
import { ValidateExam } from './ValidateExam';


function ExamGenerator() {
  const [courses, setCourses] = useState([]);
  const [coursesPdf, setCoursesPdf] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [pdfUploadedForm, setPdfUploadedForm] = useState(false); // Control para habilitar el 2do formulario
  const [scanCompletedForm, setScanCompletedForm] = useState(false); // Control para habilitar el 3er formulario
  const [genexaCompletedForm, setGenexaCompletedForm] = useState(false); // Control para habilitar el 5to formulario

  const [selectedCourseId, setSelectedCourseId] = useState(null); // Almacena el ID del curso seleccionado para pdf
  const [selectedExamId, setSelectedExamId] = useState(null); // Almacena el ID del curso seleccionado para generar examen

  // Función para obtener los cursos y almacenarlos en el estado
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const cursosData = await getAllCursos();  // Llamamos a la API para obtener los cursos
        setCourses(cursosData);  // Almacenar los cursos en el estado
        // Filtrar los cursos que tengan un PDF asociado  
        const cursosConPdf = cursosData.filter(course => course.cursrcpdf !== null);
        setCoursesPdf(cursosConPdf);
        setLoading(false); // Cambiamos el estado de loading
      } catch (err) {
        setError(err.message || "Ocurrió un problema inesperado");
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Función para manejar el envío del formulario
  const handleFormSubmit = async (data) => {
    const { course, pdfFile } = data;
    try {
      await uploadCursoPDF(course, pdfFile[0]); // Enviamos el código del curso y el archivo PDF
      setSelectedCourseId(course); // Guardamos el ID del curso seleccionado
      setPdfUploadedForm(true); // Cambia el estado cuando el PDF se haya subido exitosamente
      toast.success("PDF cargado exitosamente.");
    } catch (error) {
      toast.error(error.message || "Ocurrió un error al cargar el PDF.");
    }
  };

  // Renderizado condicional mientras se cargan los cursos
  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-grisFondo flex flex-col h-full">
      {/* Titulo */}
      <span>
        <h1 className="text-primary font-bold">Generador de Exámenes</h1>
        <div className="h-2 w-14 bg-secondary mt-1 mb-5"></div>
      </span>

      {/* Formulario 1 para Subir pdf */}
      <div className="mt-5 space-y-2">
        <h2 className="text-yellow-600">PASO 1: Almacenar PDF</h2>
        <FileUploadForm courses={courses} onSubmit={handleFormSubmit} isDisabled={pdfUploadedForm}/>
      </div>

      {/* Formulario 2 para opciones de escaneo de texto */}
      <div className="mt-5 space-y-2">
        <h2 className="text-yellow-600">PASO 2: Escanear PDF</h2>
        {pdfUploadedForm ? (
          <ScanOptionsForm
            courseId={selectedCourseId}
            onScanComplete={() => setScanCompletedForm(true)}
            isDisabled={scanCompletedForm} // Deshabilita el formulario cuando el siguiente está habilitado
          />
        ) : (
          <p className="bg-white border border-gray-400 rounded-lg p-5 text-gray-600 text-center">Por favor, complete el PASO 1 antes de continuar.</p>
        )}
      </div>

      {/* Formulario 3 para validar texto del pdf */}
      <div className="mt-5 space-y-2">
        <h2 className="text-yellow-600">PASO 3: Validar información del PDF</h2>
        {scanCompletedForm ? (
          <ValidateTxt courseId={selectedCourseId}/>
        ) : (
          <p className="bg-white border border-gray-400 rounded-lg p-5 text-gray-600 text-center">Por favor, complete el PASO 2 antes de continuar.</p>
        )}
      </div>

      {/* Formulario 4 para  generar examen*/}
      <div className="mt-5 space-y-2">
        <h2 className="text-yellow-600">PASO 4: Generar Examen</h2>   
        <GenerarExamen courses={coursesPdf} setSelectedExamId={setSelectedExamId} onGenexaComplete={() => setGenexaCompletedForm(true)}/>
      </div>

      {/* Formulario 5*/}
      <div className="mt-5 space-y-2">
        <h2 className="text-yellow-600">PASO 5: Validar Examen</h2>
        {genexaCompletedForm && selectedExamId ? (
          <ValidateExam courseId={selectedExamId}/>
        ) : (
          <p className="bg-white border border-gray-400 rounded-lg p-5 text-gray-600 text-center">Por favor, complete el formulario para generar examen antes de continuar.</p>
        )}
      </div>

      {/* Configuración de Toast */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
    </div>
  )
};

export default ExamGenerator;