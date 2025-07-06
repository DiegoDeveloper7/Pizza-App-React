import { useState } from "react";
import { pizzaCart } from "../helpers/pizzas";

export const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar cantidad
  const increaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  // Función para disminuir cantidad
  const decreaseCount = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0) // eliminar si count llega a 0
    );
  };

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  // ✅ Nueva constante con formato CLP
const formattedTotal = total.toLocaleString("es-CL", {
  style: "currency",
  currency: "CLP",
});

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 tituloCart">🛒 Detalles del pedido</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm bodyCart">

          {/* Imagen */}
          <img
            src={pizza.img}
            alt={pizza.name}
            className="rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />

          {/* Nombre */}
          <h5 className="mb-0 text-capitalize">{pizza.name}</h5>

          {/* Precio */}
           <p className="mb-0 fw-bold"> {pizza.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })} </p>

          {/* Contador */}
          <div className="d-flex align-items-center">
            <button
              className="btn btn-danger btn-sm me-2"
              onClick={() => decreaseCount(pizza.id)}
            >
              -
            </button>
            <span className="fw-bold">{pizza.count}</span>
            <button
              className="btn btn-success btn-sm ms-2"
              onClick={() => increaseCount(pizza.id)}
            >
              +
            </button>
          </div>
        </div>

      ))}

      {/* Total */}
      <div className="text-end mt-4 textoTotal">
       <h4>Total: <span className="textoTotal">{formattedTotal}</span></h4>
      </div>

      {/* Botón Pagar */}
      <div className="text-center mt-3">
        <button className="btn btn-primary btn-lg">Pagar</button>
      </div>
    </div>
  );
};