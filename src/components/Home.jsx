import { TarjetaPizza } from "./TarjetaPizza";
import { pizzas } from "../helpers/pizzas";

//import napolitanaImg from '../assets/imgs/napolitana.jpg';
//import españolaImg from '../assets/imgs/española.jpg';
//import peperoniImg from '../assets/imgs/peperoni.webp';

export const Home = () => {
  return (
    <>
     <div className="container-fluid my-1">
 <div id="home" className="row gx-1 gy-4">
    {
      pizzas.map(pizza => (
        <div  key={pizza.id} className="col-lg-4 mt-5"> {/* se coloco la propiedad pizza.id en este div por sintaxis de react padre e hijos*/}
          <TarjetaPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            description={pizza.desc}
            img={pizza.img}
          />
        </div>
      ))
    }
  </div>
</div>
    </>
  )
}