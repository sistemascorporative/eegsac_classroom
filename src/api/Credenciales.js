import api from './axios';


export const getCredencialesProgramaMatriculadoByPk = async (estudianteId) => {
  try {
    const response = await api.get(`/credenciales/programa/matriculado/by-id/${estudianteId}/`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener las credenciales de programas matriculados');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getCredencialesProgramaByPk = async (estudianteId) => {
  try {
    const response = await api.get(`/credenciales/programa/by-id/${estudianteId}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener las credenciales de programas');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getCertificadosCursoMatriculadoByPk = async (estudianteId) => {
  try {
    const response = await api.get(`/certificados/curso/matriculado/by-id/${estudianteId}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los certificados de cursos matriculados');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export const getCertificadosCursoByPk = async (estudianteId) => {
  try {
    const response = await api.get(`/certificados/curso/by-id/${estudianteId}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los certificados de cursos');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};