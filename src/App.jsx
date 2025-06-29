import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

import { Register } from './components/Register';

function App() {

  return (
  <div className="app-container">
    <Navbar />
    <Header />
     <main>
      {/* <Home /> */}
        <button
    className="btn btn-success my-4"
    data-bs-toggle="modal"
    data-bs-target="#registerModal"
  >
    Abrir Registro
  </button>
      <Register/>
      </main>
    <Footer />
  </div>
  )
}

export default App
