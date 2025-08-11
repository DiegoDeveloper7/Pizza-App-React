import { useApi } from "../context/ApiContext"; // ✅ Importamos el hook del contexto
import { TarjetaPizza } from "../components/TarjetaPizza";
//import { pizzas } from "../helpers/pizzas";
//import napolitanaImg from '../assets/imgs/napolitana.jpg';
//import españolaImg from '../assets/imgs/española.jpg';
//import peperoniImg from '../assets/imgs/peperoni.webp';

export const Home = () => {
  const { pizzas, loading } = useApi(); // ✅ Obtenemos datos del contexto

  // Mientras carga
  if (loading) {
    return <p className="text-center">Cargando pizzas...</p>;
  }

  return (
    <>
      <div className="container-fluid my-1">
        <div id="home" className="row gx-1 gy-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-lg-4 mt-5">
              <TarjetaPizza
                id={pizza.id} // ← Necesario para CartProvider
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                description={pizza.desc}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};