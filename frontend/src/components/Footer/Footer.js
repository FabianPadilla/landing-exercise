import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container section-space">
      <div className="icons-container">
        <div className="social-icons">
          <span className="icon-circle">
            <i className="fab fa-facebook-f"></i>
          </span>
          <span className="icon-circle">
            <i className="fab fa-instagram"></i>
          </span>
          <span className="icon-circle">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="icon-circle">
            <i className="fab fa-pinterest-p"></i>
          </span>
        </div>
      </div>
      <div className="nav-container">
        <div className="nav-footer">
          <a href="#about-section">Nosotros</a>
          <a href="#articles-section">Articulos</a>
          <a href="#subscribe-section">Suscribete</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
