import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../api/auth.api";


export const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook para redireccionar

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error al parsear el usuario:", error);
      }
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const userData = await login(email, password);
      setUser(userData);
      navigate("/aula"); // Redirige al dashboard después de iniciar sesión
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    //navigate("/login"); // Redirige al login después de cerrar sesión
  };

  return { user, handleLogin, handleLogout };
};