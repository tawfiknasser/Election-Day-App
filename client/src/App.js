import React, { Component } from "react";
import HeaderBar from "./components/Header_Bar/header";
import BoxViewContainer from "./components/boxViewContainer";
import LoginViewContainer from "./components/loginViewContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    login: true
  };

  render() {
    console.log("render in app.js");
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
