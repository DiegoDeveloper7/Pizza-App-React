//import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center not-found">
      <div className="container my-5 profile">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8">
            <div className="card shadow-lg border-0 text-center form-card-container">
              <div className="text-center p-5">
                
                <h2 className="not-found-title">
                  404
                </h2>

                <h3 className="mb-3 not-found-subtitle">
                  Página no encontrada
                </h3>

                <p className="mb-5 not-found-description">
                  La página que buscas no existe o ha sido movida
                </p>

                <div className="mb-4">
                  <div className="pizza-divider-container">
                    <div className="pizza-divider-line"></div>
                    <i className="fas fa-pizza-slice pizza-icon"></i>
                    <div className="pizza-divider-line"></div>
                  </div>
                </div>

               {/* <Link to={"/"} className="btn px-5 py-3 btn-home">
                  <i className="fas fa-home me-2"></i> Volver al Inicio
                </Link> */} 

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}