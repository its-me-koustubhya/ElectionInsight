import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../styles/index.css";

const Navbar = () => {
  const location = useLocation();
  const scrollToContactUs = () => {
    scroll.scrollTo("contact-us-section", {
      smooth: "easeInOutQuart",
      offset: -50, // Adjust the offset according to your design
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Election Insight</h2>
      </div>
      <div className="nav-links">
        <Link
          to="/ElectionInsight"
          className={
            location.pathname === "/ElectionInsight" ? "active-link" : ""
          }
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className={location.pathname === "/about-us" ? "active-link" : ""}
        >
          About Us
        </Link>
        <ScrollLink
          to="contact-us-section"
          smooth={true}
          duration={1000}
          onClick={scrollToContactUs}
          className="contact-link"
        >
          Contact Us
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
