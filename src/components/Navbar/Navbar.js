import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
          <Link to="/" className="navbar-brand logo">
            LO
          </Link>
          <div className="d-flex">
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={this.handleClickCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${collapse ? "show" : ""}`}
            >
              <div className="navbar-nav">
                <HashLink to="/#about-section" className="nav-link">
                  Nosotros
                </HashLink>
                <HashLink to="/#articles-section" className="nav-link">
                  Articulos
                </HashLink>
                <HashLink to="/#subscribe-section">
                  <button className="btn btn-outline-primary">
                    SUSCRIBIRSE
                  </button>
                </HashLink>
              </div>
            </div>
            <Link to="/login" className="nav-login">
              <i className="far fa-user"></i>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
