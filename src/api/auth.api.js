import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  FACEBOOK_AUTH_SUCCESS,
  FACEBOOK_AUTH_FAIL,
  LOGOUT
} from './types';


export const load_user = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };
    try {
      const res = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/users/me/`, config);
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL
    });
  }
};


export const googleAuthenticate = (state, code) => async dispatch => {
  if (state && code && !localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    const details = {
      'state': state,
      'code': code
    };
    const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
    try {
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/o/google-oauth2/?${formBody}`, config);
      dispatch({
        type: GOOGLE_AUTH_SUCCESS,
        payload: res.data
      });
      dispatch(load_user());
    } catch (err) {
      dispatch({
        type: GOOGLE_AUTH_FAIL
      });
    }
  }
};


export const facebookAuthenticate = (state, code) => async dispatch => {
  if (state && code && !localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    const details = {
      'state': state,
      'code': code
    };
    const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
    try {
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/o/facebook/?${formBody}`, config);
      dispatch({
        type: FACEBOOK_AUTH_SUCCESS,
        payload: res.data
      });
      dispatch(load_user());
    } catch (err) {
      dispatch({
        type: FACEBOOK_AUTH_FAIL
      });
    }
  }
};


export const checkAuthenticated = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }; 
    const body = JSON.stringify({ token: localStorage.getItem('access') });
    try {
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/jwt/verify/`, body, config)
      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: AUTHENTICATED_SUCCESS
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL
    });
  }
};


export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/jwt/create/`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });
    dispatch(load_user());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });

    if (!error.response) {
      throw new Error("No se pudo conectar con el servidor.");
    }
    switch (error.response.status) {
      case 400:
        throw new Error("Formato inválido o datos faltantes.");
      case 401:
        throw new Error("Correo o contraseña incorrectos.");
      default:
        throw new Error(`Error desconocido (${error.response.status}).`);
    }
  }
};


export const signup = (email, usernom, userape, userdocide, userpai, userciu, userdir, password, re_password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    usernom,
    userape,
    userdocide,
    email,
    password,
    re_password,
    userpai,
    userciu,
    userdir
  });
  try {
    const res = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/usuario/register/`, body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
    return { success: true, message: res.data.message };
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL
    })
    if (err.response && err.response.data) {
      return { success: false, errors: err.response.data };
    }
    return { success: false, message: "Error al registrar usuario" };
  }
};


export const verify = (uid, token) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ uid, token });
  try {
    await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/users/activation/`, body, config);
    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL
    })
  }
};


export const reset_password = (email) => async dispatch => {
  console.log(email)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email });
  try {
    await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/users/reset_password/`, body, config);
    dispatch({
      type: PASSWORD_RESET_SUCCESS
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL
    });
  }
};


export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ uid, token, new_password, re_new_password });
  try {
    await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/auth/users/reset_password_confirm/`, body, config);
    dispatch({
      type: PASSWORD_RESET_CONFIRM_SUCCESS
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_CONFIRM_FAIL
    });
  }
};


export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};