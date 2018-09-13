import React, { Component } from "react";
import HeaderBar from "./components/Header_Bar/header";
import BoxViewContainer from "./components/boxViewContainer";
import LoginViewContainer from "./components/loginViewContainer";
class App extends Component {
  state = {
    login: true
  };

  render() {
    return (
      <React.Fragment>
        <HeaderBar login={this.state.login} />
        {this.state.login ? <BoxViewContainer /> : <LoginViewContainer />}
      </React.Fragment>
    );
  }
}

export default App;
