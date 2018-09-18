import React from "react";
import "./header.css";
import MainMenu from "./burgerMenu";
export default class HeaderBar extends React.Component {
  state = {
    clicked: false // on the burger menue
  };

  render() {
    return (
      <React.Fragment>
        <div className="HeadBar">
          <span className="HeadText">Elections Day</span>
        </div>

        {this.props.login === true && <MainMenu />}
      </React.Fragment>
    );
  }
}
