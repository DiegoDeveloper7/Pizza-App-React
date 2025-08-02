import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Pizza } from './pages/Pizza';
import { NotFound } from './pages/notFound';
import { Profile } from './pages/profile';

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

     {/* <NotFound/> */}

      <Profile />
 
      </main>
    <Footer />
  </div>
  )
}

export default App
