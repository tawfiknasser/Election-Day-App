import React, { Component } from "react";
import HeaderBar from "./components/Header_Bar/header";
import BoxViewContainer from "./components/boxViewContainer";
import LoginViewContainer from "./components/LoginComponent/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);
    this.state = {
      login: false,
      box: 0
    };
  }

  loggedIn() {
    fetch("/verify", { method: "post" })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(response => {
        console.log("Success:", JSON.stringify(response));

        this.setState(
          {
            login: response.status,
            box: response.box
          },
          () => {
            console.log("logged!");
          }
        );
      });
  }

  
  componentDidMount() {
    console.log("343");
    if (document.cookie) {
      fetch("/verify", { method: "post" })
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(response => {
          console.log("Success:", JSON.stringify(response));

          this.setState(
            {
              login: response.status,
              box: response.box
            },
            () => {
              console.log("logged!");
            }
          );
        });
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <HeaderBar login={this.state.login} />

          <Route
            component={
              this.state.login
                ? () => <BoxViewContainer box={this.state.box} />
                : () => <LoginViewContainer loggedIn={this.loggedIn} />
            }
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
