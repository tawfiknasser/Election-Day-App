import React from "react";
import "./infoBar.css";
export default class infoBar extends React.Component {
  state = {
    clicked: false
  };

  render() {
    return (
      <React.Fragment>
        <div className="infoBar">
          <span>
            Box : {this.props.box} Voters: {this.props.voted}/{this.props.votersAmount}{" "}
          </span>
        </div>
      </React.Fragment>
    );
  }
}
