//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
