import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Election Insight</Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
