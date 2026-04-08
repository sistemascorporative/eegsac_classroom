import axios from 'axios';

// Creación de la instancia de axios
const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_SERVER_URL}`,
});

// Interceptor para agregar el token a las solicitudes
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers['Authorization'] = `JWT ${token}`;
      //config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/*api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirigir al usuario a la página de inicio de sesión si el token ha expirado
      window.location.href = '/login'; //window.location.
    }
    return Promise.reject(error);
  }
);*/

export default api;