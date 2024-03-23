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
            <h3 className="text-lg font-bold">Eventos</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/bazar.png" alt="Proyecto 2" className="w-full mb-2" />
            <h3 className="text-lg font-bold">Bazar Tech</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/danyweb.png" alt="Proyecto 3" className="w-full mb-2" />
            <h3 className="text-lg font-bold">Diseño Web</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/petfood.png" alt="Proyecto 4" className="w-full mb-2" />
            <h3 className="text-lg font-bold">Pet Food</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/solyluna.png" alt="Proyecto 5" className="w-full mb-2" />
            <h3 className="text-lg font-bold">Casa de Campo</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <img src="./img/Cinenema.jpg" alt="Proyecto 6" className="w-full mb-2" />
            <h3 className="text-lg font-bold">Cinema</h3>
          </div>
          {/* Otros proyectos */}
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
