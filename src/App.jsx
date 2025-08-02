import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Pizza } from './components/Pizza';
import { NotFound } from './components/notFound';

//import { Register } from './components/Register';
//import { Login } from './components/Login';
//import { Cart } from './components/Cart';

function App() {

  return (
  <div className="app-container">
    <Navbar />
    <Header />
     <main>

      {/*<Home />  */} 

      {/*<Register/>*/}

      {/* <Login/> */ } 
       
     {/*  <Cart /> */} 

    {/*   <Pizza /> Componente para mostrar una pizza específica desde el backend */}

     <NotFound/>
 
      </main>
    <Footer />
  </div>
  )
}

export default App
