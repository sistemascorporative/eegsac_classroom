import api from './axios';

export const generateExam = async (formData) => {
  try {
    const response = await api.post('/generar-examen/', formData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.data.detail);
      throw new Error(error.response.data.detail || 'Error al enviar la consulta');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};

export const validateExam = async (examenId) => {
  try {
    const response = await api.get(`/xexamen/${examenId}/`);
    //console.log(response.data);
    return response.data;
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

export const updateModuloTxtContent = async (moduleId, content) => {
  try {
    const response = await api.put(`/modulo/${moduleId}/update-txt/`, { content });
    return response.data;
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

// Actualizar pregunta
export const updateQuestion = async (questionId, newText) => {
  try {
    const response = await api.put(`/pregunta/${questionId}/update/`, { pretex: newText, });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.data.detail);
      throw new Error(error.response.data.detail || 'Error al actualizar la pregunta');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};

// Actualizar alternativa
export const updateAlternative = async (alternativeId, newText) => {
  try {
    const response = await api.put(`/alternativa/${alternativeId}/update/`, { alttex: newText, });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.data.detail);
      throw new Error(error.response.data.detail || 'Error al actualizar la alternativa');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};
