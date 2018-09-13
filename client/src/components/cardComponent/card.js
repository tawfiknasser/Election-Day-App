import React from "react";
import "./card.css";

export default class Card extends React.Component {
  state = {
    clicked: false, // when clicked it should change color
    classIs: "card cardUnclicked"
  };
  colorClick = () => {
    // confirm message first

    if (this.state.clicked) {
      let confirmValue = window.confirm(`Unmark ${this.props.name}  ?`);
      if (!confirmValue) return;
      this.setState({
        clicked: false,
        classIs: "card cardUnclicked"
      });
    } else {
      let confirmValue = window.confirm(`Mark ${this.props.name}  ?`);
      if (!confirmValue) return;
      this.setState({
        clicked: true,
        classIs: "card cardClicked"
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className={this.state.classIs} onClick={this.colorClick}>
          {this.props.name}
          {this.props.id}
        </div>
      </React.Fragment>
    );
  }
}
