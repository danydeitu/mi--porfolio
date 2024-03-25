import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-800 text-white py-8">
        <div className="container items-center pb-2 pt-8 mb-6">
       Podes contactarme por
        </div>
        <div className="container mx-auto flex justify-evenly "> 
<div>
        <a href="https://wa.me/+5401140941119" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp whatsapp"></i></a>
        </div>
        <div>
        <a href="mailto:disenosdanyweb@gmail.com"
            target="_blank"
            rel="noreferrer">
            <i className="fa fa-envelope"aria-hidden="true"></i>
          </a>
          </div>
        <div>
          <a href="https://www.linkedin.com/in/daniel-alberto-rodriguez/" className="mr-4"><i className="fab fa-linkedin linkedin"></i></a></div>
          <div>
          <a href="https://github.com/danydeitu/"><i className="fab fa-github github" ></i></a>
        </div>
  
      </div>
      <div className="container items-center pb-2 pt-8">
      
      &copy; {new Date().getFullYear()} Daniel Rodriguez
    </div>
    </footer>
  );
};

export default Footer;
