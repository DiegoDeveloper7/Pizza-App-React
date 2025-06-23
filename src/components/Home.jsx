import { TarjetaPizza } from "./tarjetaPizza"
import napolitanaImg from '../assets/imgs/napolitana.jpg';
import españolaImg from '../assets/imgs/española.jpg';
import peperoniImg from '../assets/imgs/peperoni.webp';

export const Home = () => {
  return (
    <>
      <div id="home" className="container my-5 ">
        <div className="row g-4 ">
          <div className="col-md-4">
            <TarjetaPizza
              name="Pizza Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={napolitanaImg}
            />
          </div>
          <div className="col-md-4">
            <TarjetaPizza
              name="Pizza Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone", "aceitunas"]}
              img={españolaImg}
            />
          </div>
          <div className="col-md-4">
            <TarjetaPizza
              name="Pizza Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano", "pimienta negra"]}
              img={peperoniImg}
            />
          </div>
        </div>
      </div>
    </>
  )
}