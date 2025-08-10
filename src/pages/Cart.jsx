import { useCart } from "../context/CartProvider";

export const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useCart();

  const formattedTotal = total.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 tituloCart">🛒 Detalles del pedido</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm bodyCart"
        >
          <img
            src={pizza.img}
            alt={pizza.name}
            className="rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />

          <h5 className="mb-0 text-capitalize">{pizza.name}</h5>

          <p className="mb-0 fw-bold">
            {pizza.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>

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
              onClick={() =>
                increaseCount({
                  id: pizza.id,
                  img: pizza.img,
                  name: pizza.name,
                  description: pizza.description,
                  price: pizza.price,
                  ingredients: pizza.ingredients,
                })
              }
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="text-end mt-4 textoTotal">
        <h4>
          Total: <span className="textoTotal">{formattedTotal}</span>
        </h4>
      </div>

      <div className="text-center mt-3">
        <button className="btn  btn-lg button-pay">Pagar</button>
      </div>
    </div>
  );
};