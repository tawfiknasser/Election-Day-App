import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burgerMenu.css";

export default class MainMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
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
