export const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "black" }}>
      <div className="container">
        
        <a className="navbar-brand fw-bold fs-3 me-auto" href="#"> {/* linea modificada*/}
          <i className="fas fa-pizza-slice me-2"></i>
          Pizzería MammaMia!
        </a>

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

       <div className="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarNav"> {/* linea modificada*/}
         <ul className="navbar-nav"> {/* linea modificada*/}
            <li className="nav-item">
              <a className="nav-link active px-3" href="#">
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
                    <a className="nav-link px-3" href="#">
                      <i className="fas fa-user-plus me-1"></i> Register
                    </a>
                  </li>
                </>
              )
            }
          </ul>

          <button className="btn btn-outline-light d-flex align-items-center ms-auto btn-price"> {/* linea modificada*/}
            <i className="fas fa-shopping-cart me-2"></i>
            Total: { total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
          </button>
        </div>
      </div>
    </nav>
  )

}