import React, { Component } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import UserService from "../services/UserService";
import AuthService from "../services/AuthService";
import { Redirect } from "react-router-dom";

export class ProfilePage extends Component {
  state = {
    redirect: "",
    user: {},
  };

  componentWillMount() {
    UserService.validateUser()
      .then((res) => {
        if (res.error) {
          alert(res.error);
          this.setState({
            redirect: <Redirect to="/landing-exercise/login" />,
          });
        } else {
          this.setState({
            user: {
              email: res.email,
              firsName: res.firsName,
              lastName: res.lastName,
            },
          });
        }
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  logout = () => {
    AuthService.logout();
    this.setState({ redirect: <Redirect to="/landing-exercise/login" /> });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        {this.state.redirect}
        <Navbar />
        <ProfileCard
          FirsName={this.state.user.firsName}
          LastName={this.state.user.lastName}
          Email={this.state.user.email}
          logout={this.logout}
        />
      </div>
    );
  }
}

export default ProfilePage;
