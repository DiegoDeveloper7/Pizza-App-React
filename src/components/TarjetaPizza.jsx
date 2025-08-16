import { useCart } from "../context/CartProvider";
import { useNavigate } from "react-router-dom"; // 🔹 Importamos useNavigate

export const TarjetaPizza = ({ id, img, name, description, price, ingredients }) => {
  const { increaseCount } = useCart(); // ← Ya NO usamos decreaseCount aquí
  const navigate = useNavigate(); // 🔹 Inicializamos useNavigate

  // 🔹 Función para manejar redirección a Pizza.jsx
  const handleViewMore = () => {
    navigate(`/pizza/${id}`); // redirige dinámicamente al detalle de la pizza
  };

  return (
    <div className="card h-100 shadow border-0 ">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column justify-content-between mt-1">
        <h5 className="fs-5 fw-bold mb-1 text-center">{name}</h5>

        <p className="card-text lh-sm small text-center description">{description}</p> {/* VER SI SERA NECESARIA CLASE DESCIPRTION */}

        {/* Ingredientes */}
        <div className="text-center mb-2">
          <p className="mb-2 ingredients-title">Ingredientes:</p>
          <div className="d-flex flex-wrap justify-content-center gap-1 list-ingredients">
            {ingredients.map((ingredient, index) => (
              <span key={index} className="badge px-3 py-2 text-capitalize text-primary fs-6">
                <i className="fas fa-leaf me-1" style={{ fontSize: "0.9em" }}></i> {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Precio */}
        <div className="text-center mb-3">
          <h4 className="price">
            Precio: {price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
          </h4>
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-between mt-auto gap-3 btn-options">
          {/* 🔹 Botón cambiado: ahora REDIRIGE en vez de eliminar */}
          <button
            className="btn btn-warning border-warning text-dark flex-fill py-2 see-more"
            onClick={handleViewMore}
          >
            <i className="fas fa-eye me-2"></i> Ver más
          </button>

          {/* 🔹 Botón de añadir al carrito se mantiene igual */}
          <button
            className="btn btn-success border-success text-white flex-fill py-2 add-to-cart"
            onClick={() => increaseCount({ id, img, name, description, price, ingredients })}
          >
            <i className="fas fa-cart-plus me-2"></i> Añadir
          </button>
        </div>
      </div>
    </div>
  );
};