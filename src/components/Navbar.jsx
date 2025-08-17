// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import { useUser } from "../context/UserProvider"; // 🆕 Importar hook de usuario

export const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser(); // 🆕 Obtener token y logout del contexto

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "black" }}
    >
      <div className="container-fluid">
        {/* Marca */}
        <Link className="navbar-brand fw-bold fs-3 me-auto ms-5" to="/">
          <i className="fas fa-pizza-slice me-2"></i>
          Pizzería MammaMia!
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenedor colapsable */}
        <div
          className="collapse navbar-collapse justify-content-between align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {/* Home siempre visible */}
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">
                <i className="fas fa-home me-1"></i> Home
              </Link>
            </li>

            {token ? (
              <>
                {/* Si está logueado */}
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/profile">
                    <i className="fas fa-user me-1"></i> Profile
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Botón logout */}
                  <button
                    className="nav-link px-3 btn btn-link text-light"
                    onClick={logout}
                  >
                    <i className="fas fa-sign-out-alt me-1"></i> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Si no está logueado */}
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/login">
                    <i className="fas fa-sign-in-alt me-1"></i> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/register">
                    <i className="fas fa-user-plus me-1"></i> Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Total siempre visible */}
          <Link
            to="/cart"
            className="btn btn-outline-light d-flex align-items-center ms-auto btn-price btn-success me-5 mt-3 mt-lg-0"
          >
            <i className="fas fa-shopping-cart me-2"></i>
            Total:{" "}
            {total.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </Link>
        </div>
      </div>
    </nav>
  );
};