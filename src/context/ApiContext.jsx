import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// 1. Creamos el contexto
const ApiContext = createContext();

// 2. Proveedor del contexto
export const ApiProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Obtener todas las pizzas
  const fetchPizzas = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5001/api/pizzas");
      setPizzas(res.data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo cargar el listado de pizzas.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Obtener una pizza por ID
  const fetchPizzaById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5001/api/pizzas/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
      return null;
    }
  };

  // 📌 Cuando el contexto se monta, traemos todas las pizzas
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <ApiContext.Provider value={{ pizzas, loading, fetchPizzaById }}>
      {children}
    </ApiContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto
export const useApi = () => useContext(ApiContext);