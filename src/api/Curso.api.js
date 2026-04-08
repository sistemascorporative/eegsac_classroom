import api from './axios';


//obtener la lista de todos los cursos
export const getAllCursos = async () => {
  try {
    const response = await api.get('/curso/');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los cursos: ' + (error.response?.data?.detail || error.message));
  }
};

export const getCursoById = async (id) => {
  const response = await api.get(`/curso/${id}`);
  return response.data;
};

export const getModulosByCurso = async (idCurso) => {
  const res = await api.get(`/curso/${idCurso}/modulos`)
  return res.data;
};

export const getCursosGratuitos = async () => {
  try {
    const response = await api.get('/cursos-gratuitos');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los cursos gratutitos');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor. Inténtelo de nuevo más tarde.');
    } else {
      throw new Error('Error al configurar la solicitud. Por favor, verifique su configuración.');
    }
  }
};

export const getCursosMatriculadosPorEstudiante = async (estudianteEmail) => {
  try {
    const response = await api.get(`/cursos-matriculados/${estudianteEmail}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los cursos matriculados');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor. Inténtelo de nuevo más tarde.');
    } else {
      throw new Error('Error al configurar la solicitud. Por favor, verifique su configuración.');
    }
  }
};

// Función para subir el archivo PDF
export const uploadCursoPDF = async (curcod, pdfFile) => {
  const formData = new FormData();
  formData.append('cursrcpdf', pdfFile);
  try {
    const response = await api.post(`/curso/${curcod}/upload-pdf/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error cargando PDF:", error.response ? error.response.data : error.message);
    throw new Error('Error al cargar PDF: ' + (error.response?.data?.detail || error.message));
  }
};

// Función para obtener el número de páginas de un PDF de un curso
export const getPdfPages = async (curcod) => {
  try {
    const response = await api.get(`/curso/${curcod}/pdf-pages/`);
    return response.data; // Retorna la cantidad total de páginas
  } catch (error) {
    // Obtener el mensaje de error enviado desde el backend
    const errorMessage = error.response?.data?.error || "Ocurrió un error inesperado. Intente nuevamente.";
    console.error("Error al obtener el número de páginas del PDF:", errorMessage);
    throw new Error(errorMessage); // Lanza el mensaje de error especificado por el backend
  }
};

// Función para enviar el rango de páginas y procesar el PDF
export const processPdf = async (cursoId, startPage, endPage) => {
  try {
    const response = await api.post(`/curso/${cursoId}/process-pdf/`, {
      startPage: startPage,
      endPage: endPage,
    });
    //console.log(response);
    return response.data; // Retorna el texto procesado del PDF
  } catch (error) {
    console.error('Error al procesar el PDF:', error);
    throw error;
  }
};