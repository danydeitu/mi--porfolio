import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para desplazarse hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <footer id="contacto" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex items-center justify-center mt-4 mb-5">
        <p>Mis medios de contacto</p>
        
      </div>
      <div className="container mx-auto flex items-center justify-center">
       
       <div className="mr-6">
         
          <a href="https://wa.me/+5401140941119" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp whatsapp"></i>
          </a>
        </div>
        <div className="mr-6">
          <a href="mailto:disenosdanyweb@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div className="mr-6">
          <a href="https://www.linkedin.com/in/daniel-alberto-rodriguez/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/danydeitu/" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
      {isVisible && (
          <div className="mr-6 cursor-pointer" onClick={scrollToTop}>
            <FaArrowUp size={24} />
          </div>
        )}
      <div className="container mx-auto flex items-center justify-center mt-4">
        <p>&copy; {new Date().getFullYear()} Daniel Rodriguez</p>
        
      </div>
      
    </footer>
  );
};

export default Footer;
