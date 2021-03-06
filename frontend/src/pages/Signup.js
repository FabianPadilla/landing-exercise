import React, { Component } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import FormSignup from "../components/FormSignup/FormSignup";
import AuthService from "../services/AuthService";
import { Redirect } from "react-router-dom";

export class SignupPage extends Component {
  state = {
    email: "",
    password: "",
    firsName: "",
    lastName: "",
    error: "",
    redirect: "",
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleChangeFirsName = (e) => {
    this.setState({ firsName: e.target.value });
  };
  handleChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firsName, lastName } = this.state;
    AuthService.signup(email, password, firsName, lastName)
      .then((res) => {
        if (res.error) {
          this.setState({ error: res.error });
        } else {
          if (res.Email === email) {
            this.setState({ error: "" });
            alert("registrado con exito");
            this.setState({
              redirect: <Redirect to="/landing-exercise/profile" />,
            });
          }
        }
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.redirect}
        <Navbar />
        <div className="container-fluid full-container">
          <div className="row align-items-center">
            <div className="col-sm-4 mx-auto">
              <div className="card my-5 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-center">SIGNUP</h5>
                  <FormSignup
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangePassword={this.handleChangePassword}
                    handleChangeFirsName={this.handleChangeFirsName}
                    handleChangeLastName={this.handleChangeLastName}
                    handleSubmit={this.handleSubmit}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
