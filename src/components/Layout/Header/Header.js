import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/Header.css";
const Header = () => {
  return (
    <header className="header_element">
      <div>Weather App</div>
      <div>
        <Link to="/">Search Location</Link>
        <Link to="detail">Weather Detail</Link>
      </div>
    </header>
  );
};

export default Header;
