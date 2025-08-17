import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // incluye pooper.js 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/estilos/estilos.css';
import App from './App.jsx'

import { UserProvider } from "./context/UserProvider.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </StrictMode>,
)
