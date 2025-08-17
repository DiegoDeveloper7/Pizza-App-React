// src/context/UserProvider.jsx
import { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Hook para consumir fácilmente el contexto
export const useUser = () => useContext(UserContext);

// Provider que envolverá a toda la app
export const UserProvider = ({ children }) => {
  // Estado inicial: token en true (usuario logueado)
  const [token, setToken] = useState(true);

  // Método para "cerrar sesión"
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};