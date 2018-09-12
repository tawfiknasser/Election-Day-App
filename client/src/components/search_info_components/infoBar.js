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
          <span>Box : 432 Voters: 252/320 </span>
        </div>
      </React.Fragment>
    );
  }
}
