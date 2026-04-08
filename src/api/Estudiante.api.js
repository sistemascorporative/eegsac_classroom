import api from './axios';


export const getEstudianteByEmail = async (email) => {
  try {
    const response = await api.get(`/estudiante/${email}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Error al obtener los programas');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor'); // La solicitud se hizo pero no se recibió respuesta
    } else {
      throw new Error('Error al configurar la solicitud'); // Algo ocurrió al configurar la solicitud
    }
  }
};
