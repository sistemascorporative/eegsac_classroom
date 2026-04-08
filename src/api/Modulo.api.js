import api from './axios';


export const getAllMOdulos = async () => {
  const res = await api.get('/modulo/')
  return res.data;
};

export const uploadModulo = async (formData) => {
  try {
    const response = await api.post('/upload/', {formData});
    return response;
  } catch (error) {
    console.error('Error al subir el módulo:', error);
    throw error;
  }
};

export const getModuloTxtContent = async (courseId) => {
  try {
    const response = await api.get(`/modulos_txt/${courseId}/`);
    //console.log(courseId);
    return response.data;
  } catch (error) {
    console.error('Error al obtener modulos txt', error);
    throw error;
  }
};

export const getModulosByCourse = async (courseId) => {
  try {
    const response = await api.get(`/curso/${courseId}/modulos/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};