import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // incluye pooper.js 
import { UserProvider } from "./context/UserProvider.jsx";
import { ApiProvider } from "./context/ApiContext.jsx";
import { CartProvider } from "./context/CartProvider.jsx";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/estilos/estilos.css';
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <ApiProvider>
    <CartProvider>
        <App />
    </CartProvider>
    </ApiProvider>
    </UserProvider>
  </StrictMode>,
)
