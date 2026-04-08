import api from './axios';


export const getExamenesPorPrograma = async (programaId) => {
  try {
    const res = await api.get(`/programa/${programaId}/examenes/`);
    return res.data;
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