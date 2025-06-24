import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {

  return (
  <div className="app-container">
    <Navbar />
    <Header />
     <main>
        <Home />
      </main>
    <Footer />
  </div>
  )
}

export default App
