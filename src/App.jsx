// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

// Importar rutas protegidas
import { ProtectedRoute } from './routes/ProtectedRoute';
import { PublicRoute } from './routes/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* 🔒 Rutas públicas (solo accesibles sin token) */}
            <Route 
              path="/register" 
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              } 
            />
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />

            {/* 🔒 Ruta protegida (solo accesible con token) */}
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />

            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} /> {/* ruta dinámica con id */}
            <Route path="*" element={<NotFound />} /> {/* Página 404 */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;