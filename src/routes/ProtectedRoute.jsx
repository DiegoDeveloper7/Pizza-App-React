// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserProvider"; // ajusta la ruta según tu estructura

export const ProtectedRoute = ({ children }) => {
  const { token } = useUser();

  // Si NO hay token, redirige a login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token, renderiza el componente
  return children;
};