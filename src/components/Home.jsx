import { TarjetaPizza } from "./tarjetaPizza"
import napolitanaImg from '../assets/imgs/napolitana.jpg';
import españolaImg from '../assets/imgs/española.jpg';
import peperoniImg from '../assets/imgs/peperoni.webp';

export const Home = () => {
  return (
    <>
      <div  className="container my-1 ">
        <div id="home" className="row g-5 ">
          <div className="col-md-4">
            <TarjetaPizza
              name="Pizza Napolitana"
              price={9000}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={napolitanaImg}
            />
          </div>
          <div className="col-md-4">
            <TarjetaPizza
              name="Pizza Española"
              price={8000}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "aceitunas"]}
              img={españolaImg}
            />
          </div>
          <div className="col-md-4">
            <TarjetaPizza
              name="Pizza Pepperoni"
              price={7000}
              ingredients={["mozzarella", "pepperoni", "orégano", "pimienta negra"]}
              img={peperoniImg}
            />
          </div>
        </div>
      </div>
    </>
  )
}