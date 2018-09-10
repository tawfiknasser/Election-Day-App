import React from "react";
import "./infoBar.css";
export default class GridItem extends React.Component {
  state = {
    clicked: false
  };

  render() {
    return(
      <React.Fragment>

      <div className="infoBar">
        Box : 432     Voters: 252/320
      </div>
      </React.Fragment>
    );
  }
}
