import React from "react";

const Carrusel: React.FC = () => {
  return (
    <section id="proyectos" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
          <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
            
            <img src="./img/evento.png" alt="Proyecto 1" className="w-full mb-2" />
            <h3 className="text-lx font-bold"><a href="https://www.eventostheplanner.website/">Eventos</a></h3>
           
          </div>
          <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
            <img src="./img/bazar.png" alt="Proyecto 2" className="w-full mb-2" />
            <h3 className="text-lx font-bold"><a href="https://bazar-tech.vercel.app">Bazar Tech</a></h3>
          </div>
          <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
            <img src="./img/danyweb.png" alt="Proyecto 3" className="w-full mb-2" />
            <h3 className="text-lx font-bold"><a href="https://www.disenowebdany.store/">Diseño Web</a></h3>
          </div>
          <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
            <img src="./img/petfood.png" alt="Proyecto 4" className="w-full mb-2" />
            <h3 className="text-lx font-bold"><a href="https://golden-breed.vercel.app/">Pet Food</a></h3>
          </div>
          <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
            <img src="./img/solyluna.png" alt="Proyecto 5" className="w-full mb-2" />
            <h3 className="text-lx font-bold">  <a href="https://sol-and-luna-casa-de-campo.vercel.app/">Casa de Campo</a></h3>
          </div>
          <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
            <img src="./img/Cinenema.jpg" alt="Proyecto 6" className="w-full mb-2" />
            <h3 className="text-lx font-bold"><a href='https://c4-g17-m.vercel.app/'> Cinema</a></h3>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
