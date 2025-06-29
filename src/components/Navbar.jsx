export const Navbar = () => {
  const total = 25000;
  const token = false;

  return (

  <nav id="navbar" className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "black" }}>
  <div className="container-fluid">

    {/* Marca */}
    <a className="navbar-brand fw-bold fs-3 me-auto ms-5" href="#">
      <i className="fas fa-pizza-slice me-2"></i>
      Pizzería MammaMia!
    </a>

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
    <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav">

      {/* Enlaces */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active* px-3" href="#">
            <i className="fas fa-home me-1"></i> Home
          </a>
        </li>
        {
          token ? (
            <>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  <i className="fas fa-user me-1"></i> Profile
                </a>
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
                <a className="nav-link px-3" href="#">
                  <i className="fas fa-sign-in-alt me-1"></i> Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" data-bs-toggle="modal" href="#registerModal">   {/* Se agrego conexion modal form register*/}
                  <i className="fas fa-user-plus me-1"></i> Register
                </a>
              </li>
            </>
          )
        }
      </ul>

      {/* Botón Total dentro del collapse */}
      <button className="btn btn-outline-light d-flex align-items-center ms-auto btn-price btn-success me-5 mt-3 mt-lg-0">
        <i className="fas fa-shopping-cart me-2"></i>
        Total: {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
      </button>

    </div>
  </div>
</nav>
  )

}