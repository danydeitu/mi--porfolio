import React from "react";

interface NavbarProps {
  theme: string;
}

const Navbar: React.FC<NavbarProps>=({theme})  => {
  return (
    <nav className={`bg-blue-300 text-black py-4 ${theme === 'dark' ? 'dark:bg-black dark:text-white' : ''}`}>

      <div className="container mx-auto flex justify-between items-center">
        <div className="text-x font-bold"><a href="#/">Desarrollador Full Stack </a></div>
       
        <ul className="flex space-x-4 font-bold">
          <li><a href="#acerca">Daniel Rodriguez </a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
