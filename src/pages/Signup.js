import React, { Component } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import FormSignup from "../components/FormSignup/FormSignup";

export class SignupPage extends Component {
  state = {
    email: "",
    password: "",
    firsName: "",
    lastName: "",
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
    alert(
      "firsName: " +
        firsName +
        "\n" +
        "lastName: " +
        lastName +
        "\n" +
        "email: " +
        email +
        "\n" +
        "password: " +
        password
    );
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
                  <h5 className="card-title text-center">SIGNUP</h5>
                  <FormSignup
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangePassword={this.handleChangePassword}
                    handleChangeFirsName={this.handleChangeFirsName}
                    handleChangeLastName={this.handleChangeLastName}
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
