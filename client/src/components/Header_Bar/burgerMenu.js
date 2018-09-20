import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burgerMenu.css";

export default class MainMenu extends React.Component {
  logOut() {
    document.cookie =
      "election-app" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.reload();
  }

  render() {
    return (
      <React.Fragment>
        <Menu>
          <a id="Logout" onClick={this.logOut} className="menu-item" href="#">
            Logout
          </a>
          <a id="about" className="menu-item" href="/">
            About
          </a>
          <a id="contact" className="menu-item" href="/">
            Contact
          </a>
        </Menu>
      </React.Fragment>
    );
  }
}
