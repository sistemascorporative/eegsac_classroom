import api from './axios';


// Obtener el ID del estudiante por su email
const getEstudianteIdByEmail = async (email) => {
  try {
    const response = await api.get(`/estudiante/${email}`);
    return response.data.id; // Asegúrate de que tu API devuelva el ID del estudiante
  } catch (error) {
    throw new Error('No se pudo obtener el ID del estudiante.');
  }
};


// Función para crear una matrícula de curso
export const createMatriculaCurso = async ({ email, cursoId }) => {
  const today = new Date();
  const startDate = today.toISOString().split('T')[0]; // Fecha actual
  const endDate = new Date(today.setMonth(today.getMonth() + 2)).toISOString().split('T')[0]; // 2 meses después
  try {
    const estudianteId = await getEstudianteIdByEmail(email);
    const response = await api.post('/matricula-curso/create/', {
      matcurfecini: startDate,
      matcurfecfin: endDate,
      matcurter: false, // Curso no terminado
      matcurestcod: estudianteId, // ID del estudiante
      matcurcurcod: cursoId, // ID del curso
      matcurestregcod: 1, // Código de estado, ajusta según tu lógica
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      const errorDetail = error.response.data.detail;
      const nonFieldError = error.response.data.non_field_errors?.[0];
      if (nonFieldError === "The fields matcurestcod, matcurcurcod must make a unique set.") {
          throw new Error("El estudiante ya está matriculado en este curso.");
      }
      throw new Error(errorDetail || nonFieldError || 'Ocurrió un error al matricularse.');
    } else if (error.request) {
        throw new Error('No se recibió respuesta del servidor. Por favor, verifica tu conexión.');
    } else {
        throw new Error('Error al configurar la solicitud. Por favor, contacta al soporte técnico.');
    }
  }
};