import React from "react";
import "./card.css";

export default class Card extends React.Component {
  state = {
    clicked: false, // when clicked it should change color
    classIs: "card cardUnclicked"
  };
  colorClick = () => {
    // confirm message first
    let confirmValue = window.confirm(
      `${this.state.clicked ? "Unmark" : "Mark"} ${this.props.name} ?`
    );
    if (!confirmValue) return;
    fetch(`/?idVoter=${this.props.id}&status=${!this.state.clicked}`)
      .then(
        this.setState({
          clicked: !this.state.clicked,
          classIs: this.state.clicked
            ? "card cardUnclicked"
            : "card cardClicked"
        })
      )

      .catch(error => console.log(error));
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
