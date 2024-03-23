import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          &copy; {new Date().getFullYear()} Mi Portfolio
        </div>
        <div>
          <a href="#" className="mr-4">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
