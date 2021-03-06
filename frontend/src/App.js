//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import { Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/landing-exercise" component={HomePage} />
        <Route exact path="/landing-exercise/login" component={LoginPage} />
        <Route exact path="/landing-exercise/signup" component={SignupPage} />
        <Route exact path="/landing-exercise/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
