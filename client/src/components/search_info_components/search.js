import React from "react";
import "./search.css";
export default class GridItem extends React.Component {
  state = {
    clicked: false
  };

  render() {
    return(
      <React.Fragment>
      <div className='searchSymbole' />
      <div className="searchRectangle" contenteditable="true">
        search
      </div>
      </React.Fragment>
    );
  }
}
