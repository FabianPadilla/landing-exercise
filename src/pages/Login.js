import React, { Component } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import FormLogin from "../components/FormLogin/FormLogin";

export class LoginPage extends Component {
  state = {
    email: "",
    password: "",
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
    alert("email: " + email + "\n" + "password: " + password);
  };

  render() {
    return (
      <div>
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
