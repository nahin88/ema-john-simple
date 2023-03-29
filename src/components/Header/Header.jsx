import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="header-link">
        <a href="/Order">Order</a>
        <a href="/Order Riview">Order Riview</a>
        <a href="/Manage Invetory">Manage Invetory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
