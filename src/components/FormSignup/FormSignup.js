import React from "react";
import { Link } from "react-router-dom";

const FormSignup = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-label-group">
        <label htmlFor="inputEmail">
          Nombres <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          onChange={props.handleChangeFirsName}
          required
        />
      </div>
      <div className="form-label-group">
        <label htmlFor="inputEmail">Apellidos</label>
        <input
          type="text"
          className="form-control"
          onChange={props.handleChangeLastName}
        />
      </div>
      <div className="form-label-group">
        <label htmlFor="inputEmail">
          Correo electrónico <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="ejemplo@mail.com"
          onChange={props.handleChangeEmail}
          required
        />
      </div>

      <div className="form-label-group mb-4">
        <label htmlFor="inputPassword">
          Contraseña <span className="text-danger">*</span>
        </label>
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
        Registrarse
      </button>
      <p className="my-2 text-center">
        ¿Ya tienes una cuenta? <br />
        <Link to="/landing-exercise/login" className="has-text-link">
          Iniciar sesión
        </Link>
      </p>
    </form>
  );
};

export default FormSignup;
