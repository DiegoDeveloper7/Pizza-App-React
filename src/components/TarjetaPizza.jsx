
export const TarjetaPizza = ({ img, name, price, ingredients }) => {
    
  return (
    <div className="card h-100 shadow border-0">
      <img src={ img } className="card-img-top" alt={ name } />
      <div className="card-body">
        <h5 className="card-title text-center fw-bold text-capitalize mb-3">{ name }</h5>
        {/* Ingredientes */}
        <div className="text-center mb-4">
          <p className="mb-3 ingredients-title">Ingredientes:</p>
          <div className="d-flex flex-wrap justify-content-center gap-2 list-ingredients">
            { ingredients.map( (ingredient, index) => (
              <span key={ index } className="badge px-3 py-2 text-capitalize">
                  <i className="fas fa-leaf me-1" style={{ fontSize: "0.7em" }}></i> { ingredient }
                </span>
              ))
            }
          </div>
        </div>
        {/* Precio */}
        <div className="text-center mb-4">
          <h4 className="price">
            Precio: { price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
          </h4>
        </div>
        {/* Botones */}
        <div className="d-flex justify-content-between mt-auto gap-3 btn-options">
          <button className="btn flex-fill py-2 see-more">
            <i className="fas fa-eye me-2"></i> Ver más
          </button>
          <button className="btn flex-fill py-2 add-to-cart">
            <i className="fas fa-cart-plus me-2"></i> Añadir
          </button>
        </div>
      </div>
    </div>
  )
}