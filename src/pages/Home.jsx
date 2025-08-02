import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { TarjetaPizza } from "../components/TarjetaPizza";

//import { pizzas } from "../helpers/pizzas";
//import napolitanaImg from '../assets/imgs/napolitana.jpg';
//import españolaImg from '../assets/imgs/española.jpg';
//import peperoniImg from '../assets/imgs/peperoni.webp';

export const Home = () => {

const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
       
      axios
      .get("http://localhost:5001/api/pizzas") 
      .then((res) => {
        setPizzas(res.data); // ✅ Guardamos la data en el estado
      })

      .catch((error) => {
         console.error("Error al obtener las pizzas:", error);
            Swal.fire({
               icon: "error",
               title: "Error",
               text: "No se pudo cargar el listado de pizzas.",
           });
        });

  }, []); // El array vacío asegura que esto corre solo una vez al montar

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