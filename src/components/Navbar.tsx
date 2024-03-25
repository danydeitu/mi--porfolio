import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-x font-bold">Desarrodor Full Stack</div>
       
        <ul className="flex space-x-4">
          <li><a href="#acerca">Daniel Rodriguez</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
