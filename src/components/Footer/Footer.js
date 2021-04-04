import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container section-space">
      <div class="icons-container">
        <div className="social-icons">
          <span className="icon-circle">
            <i class="fab fa-facebook-f"></i>
          </span>
          <span className="icon-circle">
            <i class="fab fa-instagram"></i>
          </span>
          <span className="icon-circle">
            <i class="fab fa-twitter"></i>
          </span>
          <span className="icon-circle">
            <i class="fab fa-pinterest-p"></i>
          </span>
        </div>
      </div>
      <div class="nav-container">
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
