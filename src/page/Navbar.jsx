// Navbar.js
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../page/UserContext";
import "../css/Navbar.css";

const Navbar = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink exact to="/" className="logo">
          Your Logo
        </NavLink>

        <div className="nav-links">
          <NavLink exact to="/" activeClassName="active-link">
            Inicio
          </NavLink>
          <NavLink to="/about" activeClassName="active-link">
            Conocenos
          </NavLink>
          <NavLink to="/services" activeClassName="active-link">
            Servicios
          </NavLink>
          <NavLink to="/contact" activeClassName="active-link">
            Contacto
          </NavLink>
          {user ? (
            <>
              <span className="user-name">{user.name}</span>
              <NavLink to="/Servicios-recibidos" activeClassName="active-link">
              Servicios recibidos
              </NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" activeClassName="active-link">
              Iniciar Sesion
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
