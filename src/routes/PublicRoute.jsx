// PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserProvider"; // ajusta la ruta según tu estructura

export const PublicRoute = ({ children }) => {
  const { token } = useUser();

  // Si ya hay token, no permitir login/register → redirigir a Home
  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};