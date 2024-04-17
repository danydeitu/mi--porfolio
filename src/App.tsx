import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };


useEffect(() => {
  document.body.classList.remove('dark-mode', 'light-mode');
  document.body.classList.add(theme + '-mode');
}, [theme]);


  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">

      <Navbar theme={theme}/>
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="mr-2" />
          Cambiar tema
        </button>
      </div>
      <About />
      <Carrusel />
      <Footer />
  
    </div>
  );
};

export default App;
