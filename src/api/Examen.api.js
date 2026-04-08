import api from './axios';


//Obtener las respuestas de los exámenes de x programa  y de x estudiante
export const getRespuestasExamenPrograma = async (estudianteEmail, programaId, examenId) => {
  try {
    const response = await api.get(`/respuestas-examen-programa/${estudianteEmail}/${programaId}/${examenId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener las respuestas del examen de');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


// Obtener resgistros de examenes de matriculas de programa
export const getResgistroExamenProgramaPorMatricula= async (programaId, estudianteId) => {
  try {
    const response = await api.get(`/registros-examen-programa/${programaId}/${estudianteId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los registro de examen de programa');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


// Obtener registros de examenes de matriculas de curso
export const getRegistrosExamenCursoPorEmail = async (email) => {
  try {
    const response = await api.get(`/registros-examen-curso/${email}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los registro de examen curso');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
}


//Obtener todos los examen por ID
export const getExamenPorID = async (examenId) => {
  try {
    const response = await api.get(`/xexamen/${examenId}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los exámenes');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


//Enviar las respuestas del examen
export const postRespuestas = async (examenId, programaId, respuestas) => {
  try {
    //console.log("----------------");
    //console.log("examenId");
    //console.log(examenId);
    //console.log("programaId");
    //console.log(programaId);
    //console.log("respuestas");
    //console.log(respuestas);
    //console.log("----------------");
    const response = await api.post('/guardar-respuestas-examen/', {
      examenId,
      programaId,
      respuestas,
    });
    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al enviar la consulta');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};