import React from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="navbar-title">Peewah</h1>
      </div>
      <ul className="navbar-categories">
        <li>Frutas y Verduras</li>
        <li>Granos y Cereales</li>
        <li>Productos Lácteos</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;