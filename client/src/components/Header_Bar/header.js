import React from "react";
import "./header.css";

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
        {this.props.login === true && (
          <div className="burgerMenu">
            <div className="p1" />
            <div className="p2" />
            <div className="p3" />
          </div>
        )}
      </React.Fragment>
    );
  }
}
