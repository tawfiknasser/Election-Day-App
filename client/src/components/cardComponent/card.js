import React from "react";
import "./card.css";

export default class Card extends React.Component {
  state = {
    clicked: false // when clicked it should change color
  };

  render() {
    return (
      <React.Fragment>
        <div className="card" />
      </React.Fragment>
    );
  }
}
