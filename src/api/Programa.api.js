import api from './axios';


export const getProgramasPorEstudiante = async (estudianteEmail) => {
  try {
    const response = await api.get(`/programas-matriculados/${estudianteEmail}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los programas matriculados');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getProgramaById = async (idPrograma) => {
  try {
    const response = await api.get(`/programa/${idPrograma}`)
  return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener el programas');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getCursosByPrograma = async (idPrograma) => {
  try {
    const response = await api.get(`/programa/${idPrograma}/cursos`)
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los cursos');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};