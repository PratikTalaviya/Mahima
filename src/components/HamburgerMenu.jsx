import React, { useState } from "react";
// import "./styles.css"; // Make sure this file includes your Tailwind CSS

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button id="menu-button" className="relative w-10 h-10 focus:outline-none" onClick={toggleMenu}>
      <span
        className={`block absolute h-0.5 w-8 bg-black transform transition duration-500 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2.5 translate-x-2.5" : "-translate-y-2.5"
        }`}
        aria-hidden="true"
      ></span>
      <span
        className={`block absolute h-0.5 w-8 bg-black transition duration-500 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      ></span>
      <span
        className={`block absolute h-0.5 w-8 bg-black transform transition duration-500 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2.5 -translate-x-2.5" : "translate-y-2.5"
        }`}
        aria-hidden="true"
      ></span>
    </button>
  );
};

export default HamburgerMenu;
