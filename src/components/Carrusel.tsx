import React from "react";

const Carrusel: React.FC = () => {
  return (
    <section id="proyectos" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Aquí puedes mapear sobre tu lista de proyectos y mostrar cada uno */}
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/evento.png" alt="Proyecto 1" className="w-full mb-2" />
            <h3 className="text-lg font-bold">The Planner</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/bazar.png" alt="Proyecto 1" className="w-full mb-2" />
            <h3 className="text-lg font-bold">Bazar Tech</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/evento.png" alt="Proyecto 1" className="w-full mb-2" />
            <h3 className="text-lg font-bold">Proyecto 1</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/evento.png" alt="Proyecto 1" className="w-full mb-2" />
            <h3 className="text-lg font-bold">Proyecto 1</h3>
          </div>
          {/* Otros proyectos */}
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
