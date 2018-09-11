import React from "react";
import "./header.css";

export default class SearchBar extends React.Component {
  state = {
    clicked: false // on the burger menue
  };

  render() {
    return (
      <React.Fragment>
        <div className="HeadRectangle">
          <span className="textHeader">Elections Day</span>
        </div>
        <div className="burgerMenu">
          <div className="p1" />
          <div className="p2" />
          <div className="p3" />
        </div>
      </React.Fragment>
    );
  }
}
