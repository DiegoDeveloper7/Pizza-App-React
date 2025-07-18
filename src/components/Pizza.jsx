import { useEffect, useState } from "react";
import axios from "axios";

export const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para guardar la pizza

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/pizzas/p001") // Petición al backend
      .then((res) => {
        setPizza(res.data); // 📦 Guardamos la pizza en el estado
      })
      .catch((error) => {
        console.error("Error al obtener la pizza:", error);
      });
  }, []); //  Se ejecuta una sola vez al montar

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

          {/* Botón "Añadir al carrito" */}
          <div className="d-flex justify-content-center mt-auto">
            <button className="btn btn-success border-success text-white py-2 px-4">
              <i className="fas fa-cart-plus me-2"></i> Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};