import React, { Component } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import FormLogin from "../components/FormLogin/FormLogin";
import AuthService from "../services/AuthService";
import { Redirect } from "react-router-dom";

export class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    redirect: "",
    error: "",
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    AuthService.login(email, password).then((res) => {
      if (res.error) {
        this.setState({ error: res.error });
      } else {
        if (res.Email === email) {
          this.setState({ error: "" });
          this.setState({
            redirect: <Redirect to="/landing-exercise/profile/" />,
          });
        } else {
          this.setState({ error: "usuario o contraseña incorrectos" });
        }
      }
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
                  <h5 className="card-title text-center">LOGIN</h5>
                  <FormLogin
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangePassword={this.handleChangePassword}
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
