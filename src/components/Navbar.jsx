import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider"; // 🆕 Importar hook

export const Navbar = () => {
  const token = false;
  const { total } = useCart(); // 🆕 Obtener total del contexto

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
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">
                <i className="fas fa-home me-1"></i> Home
              </Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/profile">
                    <i className="fas fa-user me-1"></i> Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#">
                    <i className="fas fa-sign-out-alt me-1"></i> Logout
                  </a>
                </li>
              </>
            ) : (
              <>
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
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/Profile">
                    <i className="fas fa-user-plus me-1"></i> Profile
                  </Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link px-3" to="/pizza">
                     <i className="fas fa-pizza-slice me-2"></i> Pizza
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Botón Total que lleva a Cart */}
          <Link
            to="/cart"
            className="btn btn-outline-light d-flex align-items-center ms-auto btn-price btn-success me-5 mt-3 mt-lg-0"
          >
            <i className="fas fa-shopping-cart me-2"></i>
            Total:{" "}
            {total.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}{" "}
            {/* 🆕 total desde contexto */}
          </Link>
        </div>
      </div>
    </nav>
  );
};