import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handle scroll to toggle sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar container ${isSticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={`nav-links ${isMobileMenuOpen ? "show" : "hide-mobile-menu"}`}>
        {[
          { to: "vocational", label: "Home", offset: 0 },
          { to: "program", label: "Program", offset: -260 },
          { to: "about", label: "About us", offset: -150 },
          { to: "campus", label: "Campus", offset: -260 },
          { to: "testimonials", label: "Testimonials", offset: -260 },
          { to: "contact", label: "Contact us", offset: -260, isButton: true },
        ].map(({ to, label, offset, isButton }) => (
          <li key={to}>
            <Link
              to={to}
              smooth={true}
              offset={offset}
              duration={500}
              className={isButton ? "btn" : ""}
              onClick={() => setIsMobileMenuOpen(false)} // auto close menu
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <img
        src={menuIcon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      />
    </nav>
  );
};

export default Navbar;
