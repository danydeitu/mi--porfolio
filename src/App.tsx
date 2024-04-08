import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`transition-colors duration-500 ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <About />
      <Carrusel />
      <Footer />
      <button
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Desactivar" : "Activar"} Modo Oscuro
      </button>
    </div>
  );
}

export default App;
