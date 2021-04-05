import React from "react";
import { Link } from "react-router-dom";

const FormLogin = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-label-group">
        <label htmlFor="inputEmail">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          placeholder="ejemplo@mail.com"
          onChange={props.handleChangeEmail}
          required
        />
      </div>

      <div className="form-label-group mb-4">
        <label htmlFor="inputPassword">Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="**********"
          onChange={props.handleChangePassword}
          required
        />
      </div>
      <button
        className="btn btn-lg btn-outline-primary btn-block text-uppercase"
        type="submit"
      >
        Iniciar sesion
      </button>
      <div
        className={`alert alert-danger mt-4 ${
          props.error == "" ? "d-none" : ""
        }`}
        role="alert"
      >
        {props.error}
      </div>
      <p className="my-2 text-center">
        ¿no tienes una cuenta? <br />
        <Link to="/landing-exercise/signup" className="has-text-link">
          Regístrate
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
