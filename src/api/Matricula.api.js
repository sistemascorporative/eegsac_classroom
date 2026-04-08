import api from './axios';


// Obtener matriculas de programa por X email de estudiante
export const getMatriculasProgramaPorEstudiante = async (email) => {
  try {
    const response = await api.get(`/matriculas-programa/${email}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      //console.log(error.response.data.detail || 'Error al obtener matriculas de programa');
      throw new Error(error.response.data.detail || 'Error al obtener matriculas de programa');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error al configurar la solicitud');
    }
  }
};