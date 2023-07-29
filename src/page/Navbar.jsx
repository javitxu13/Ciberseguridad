// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const navLinks = [
    { path: "/", text: "Inicio" },
    { path: "/about", text: "Conócenos" },
    { path: "/services", text: "Servicios" },
    { path: "/contact", text: "Contacto" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink exact to="/" className="logo-link">
          Your Logo
        </NavLink>

        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink exact to={link.path} activeClassName="active-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
