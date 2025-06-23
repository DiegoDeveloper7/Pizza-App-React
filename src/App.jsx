//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'



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
