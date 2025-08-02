
export const Profile = () => {

  const user = {
    name: 'Steve Jobs',
    email: 'SteveDG@correo.com'
  }

  const handleLogout = () => alert('Sesion Cerrada!')

  return (
    <div className="container my-5 profile">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="card shadow-lg border-0 form-card-container">

            <div className="card-header text-center border-0 mb-4">
              <div className="d-inline-flex align-items-center justify-content-center mb-3 logo-form-header">
								<i className="fa-solid fa-user fa-2x text-light"></i>
              </div>
              <h3 className="mb-0">
                Mi Perfil
              </h3>
            </div>

            <div className="card-body px-4 pb-4 profile-container">
              <div className="text-center mb-4">
                <h4 className="fw-bold mb-2 user-name">
                  <i className="fas fa-user me-2"></i>
                  { user.name }
                </h4>

                <p className="mb-0 user-email">
                  <i className="fas fa-envelope me-2"></i>
                  { user.email }
                </p>

                <hr className="my-4" />

                <button
                  className="btn btn-danger w-100 py-3 mt-3 btn-logout"
                  onClick={ handleLogout }
                >
                  <i className="fas fa-sign-out-alt me-2"></i> Cerrar Sesión
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}