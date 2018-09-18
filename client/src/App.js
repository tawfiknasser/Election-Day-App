import React, { Component } from "react";
import HeaderBar from "./components/Header_Bar/header";
import BoxViewContainer from "./components/boxViewContainer";
import LoginViewContainer from "./components/LoginComponent/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    login: false
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <HeaderBar login={this.state.login} />

          <Route
            component={this.state.login ? BoxViewContainer : LoginViewContainer}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
