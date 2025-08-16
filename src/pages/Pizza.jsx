import { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext"; // ✅ Importamos el contexto
import { useParams } from "react-router-dom";     // 🆕 1) Leer el id dinámico de la ruta
import { useCart } from "../context/CartProvider"; // 🆕 2) Interactuar con el carrito

export const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para guardar la pizza
  const { fetchPizzaById } = useApi();      // ✅ Función para obtener pizza por ID

  const { id } = useParams();               // 🆕 Tomamos el :id desde la URL (/pizza/:id)
  const { increaseCount, decreaseCount } = useCart(); // 🆕 Acciones del carrito

  useEffect(() => {
    // 🔄 Ahora usamos el id dinámico en vez de uno fijo
    fetchPizzaById(id)
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al obtener la pizza:", err));
  }, [id, fetchPizzaById]);

  // Mientras se cargan los datos
  if (!pizza) {
    return <p className="text-center">Cargando pizza...</p>;
  }

  // 💥 Desestructuramos las propiedades
  const { name, img, desc, ingredients, price } = pizza;

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card h-100 shadow border-0" style={{ maxWidth: "500px" }}>
        <img src={img} className="card-img-top" alt={name} />

        <div className="card-body d-flex flex-column justify-content-between mt-1">
          <h5 className="fs-5 fw-bold mb-1 text-center">{name}</h5>

          <p className="card-text lh-sm small text-center">{desc}</p>

          {/* Ingredientes */}
          <div className="text-center mb-2">
            <p className="mb-2 fw-semibold">Ingredientes:</p>
            <div className="d-flex flex-wrap justify-content-center gap-1">
              {ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="badge px-3 py-2 text-capitalize text-primary fs-6"
                >
                  <i className="fas fa-leaf me-1" style={{ fontSize: "0.9em" }}></i>{" "}
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* Precio */}
          <div className="text-center mb-3">
            <h4 className="price">
              Precio:{" "}
              {price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </h4>
          </div>

          {/* Botones "Eliminar" y "Añadir al carrito" */}
          <div className="d-flex justify-content-between mt-auto gap-3">
            {/* 🆕 3) Botón eliminar: actualiza carrito y navbar */}
            <button
              className="btn btn-warning border-warning text-dark flex-fill py-2"
              onClick={() => decreaseCount(id)}
            >
              <i className="fas fa-minus me-2"></i> Eliminar
            </button>

            {/* ✅ 1) Botón añadir: mantiene interacción con CartProvider */}
            <button
              className="btn btn-success border-success text-white flex-fill py-2"
              onClick={() =>
                increaseCount({
                  id,
                  img,
                  name,
                  description: desc, // 👈 el carrito usa "description", mapeamos desde "desc"
                  price,
                  ingredients,
                })
              }
            >
              <i className="fas fa-cart-plus me-2"></i> Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};