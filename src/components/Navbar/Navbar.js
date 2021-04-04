import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  state = {
    collapse: false,
  };

  handleClickCollapse = () => {
    this.setState((prevState) => ({
      collapse: !prevState.collapse,
    }));
  };

  render() {
    const { collapse } = this.state;
    return (
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container-fluid container">
          <a className="navbar-brand logo" href="#">
            LO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={this.handleClickCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${collapse ? "show" : ""}`}>
            <div className="navbar-nav">
              <a href="#about-section" className="nav-link">
                Nosotros
              </a>
              <a href="#articles-section" className="nav-link">
                Articulos
              </a>
              <a href="#subscribe-section">
                <button className="btn btn-outline-primary">SUSCRIBIRSE</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
