import React from "react";
import "./card.css";

export default class Card extends React.Component {
  state = {
    clicked: this.props.voted, // when clicked it should change color
    classIs: this.props.voted ? "card cardClicked" : "card cardUnclicked"
  };
  changeColorOnClick = () => {
    // confirm message first
    let confirmValue = window.confirm(
      `${this.state.clicked ? "Unmark" : "Mark"} ${this.props.name} ?`
    );
    if (!confirmValue) return;
    fetch(`useronbox/idVoter/${this.props.id}/status/${!this.state.clicked}`)
      .then(
        this.setState({
          clicked: !this.state.clicked,
          classIs: this.state.clicked
            ? "card cardUnclicked"
            : "card cardClicked"
        })
      )
      .then(this.props.setInfoBarVars)
      .catch(() => alert("Something wrong ! please call your provider"));
  };
  render() {
    return (
      <React.Fragment>
        <div className={this.state.classIs} onClick={this.changeColorOnClick}>
          {this.props.name}
          {this.props.id}
        </div>
      </React.Fragment>
    );
  }
}
