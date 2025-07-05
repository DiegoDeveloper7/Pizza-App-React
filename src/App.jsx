import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

//import { Register } from './components/Register';
//import { Login } from './components/Login';

function App() {

  return (
  <div className="app-container">
    <Navbar />
    <Header />
     <main>

       <Home /> 

      {/*<Register/>*/}

      {/* <Login/> */ } 
       
      </main>
    <Footer />
  </div>
  )
}

export default App
