// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from "./context/CartProvider";
import { ApiProvider } from "./context/ApiContext";

import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Páginas desde la carpeta "pages"
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Pizza } from './pages/Pizza';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';

function App() {
  return (

    <CartProvider>
       <ApiProvider>
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pizza" element={<Pizza />} /> {/* temporalmente */}
            <Route path="*" element={<NotFound />} /> {/* Página 404 */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    </ApiProvider>
    </CartProvider>

  );
}

export default App;