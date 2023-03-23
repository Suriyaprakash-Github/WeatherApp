import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div>Weather App</div>
      <div>
        <Link to="/">Search Location</Link>
        <Link to="detail">Weather Detail</Link>
      </div>
    </header>
  );
};

export default Header;
