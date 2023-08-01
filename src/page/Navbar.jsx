import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [isScrollLocked, setScrollLocked] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", text: "Inicio" },
    { path: "/services", text: "Servicios" },
    { path: "/partners", text: "Proyectos" },
    { path: "/cybersecurity", text: "Métricas" },
    { path: "/about", text: "Conócenos" },
    { path: "/contact", text: "Contacto" },
  ];

  const handleClick = debounce(() => {
    if (!isScrollLocked) {
      // Debounce the scroll locking for 800ms
      setScrollLocked(true);
      setTimeout(() => {
        setScrollLocked(false);
      }, 800);
    }
  }, 800);

  const renderNavLinks = () => {
    return navLinks.map(({ path, text }) => (
      <li key={path}>
        <NavLink
          to={path}
          onClick={handleClick}
          isActive={() => location.pathname === path} // Verifica si la ruta actual coincide con la ruta del link
        >
          {text}
        </NavLink>
      </li>
    ));
  };

  return (
    <nav className={`navbar ${isScrollLocked ? "scroll-locked" : ""}`}>
      <div className="navbar-container">
        <NavLink exact to="/" className="logo-link">
          Your Logo
        </NavLink>

        <ul className="nav-links">{renderNavLinks()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
