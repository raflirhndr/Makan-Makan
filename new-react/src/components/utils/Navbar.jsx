import React, { useState } from "react";
import Logo from "../assets/MakanMakanLogo.jpg";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="" />

      <button
        className={`hamburger-btn ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <div className="foods">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="Foods">Foods</NavLink>
          </li>
          <li>
            <NavLink to="Contact">Contact</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
