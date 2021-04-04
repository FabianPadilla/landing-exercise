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
          <Link to="/landing-exercise" className="navbar-brand logo">
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
                <HashLink
                  to="/landing-exercise#about-section"
                  className="nav-link"
                >
                  Nosotros
                </HashLink>
                <HashLink
                  to="/landing-exercise#articles-section"
                  className="nav-link"
                >
                  Articulos
                </HashLink>
                <HashLink to="/landing-exercise#subscribe-section">
                  <button className="btn btn-outline-primary">
                    SUSCRIBIRSE
                  </button>
                </HashLink>
              </div>
            </div>
            <Link to="/landing-exercise/login" className="nav-login">
              <i className="far fa-user"></i>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
