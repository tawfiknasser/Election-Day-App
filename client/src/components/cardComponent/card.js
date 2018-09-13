import React from "react";
import "./card.css";

export default class Card extends React.Component {
  state = {
    clicked: false, // when clicked it should change color
    classIs: "card cardUnclicked"
  };
  colorClick = () => {
    if (this.state.clicked) {
      this.setState({
        clicked: false,
        classIs: "card cardUnclicked"
      });
    } else {
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
