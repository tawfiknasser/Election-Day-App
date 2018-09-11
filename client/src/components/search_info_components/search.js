import React from "react";
import "./search.css";

export default class SearchBar extends React.Component {
  state = {
    clicked: false
  };

  render() {
    return(
      <React.Fragment>
      <div className='searchSymbole' />
      <input className="searchRectangle" />

      </React.Fragment>
    );
  }
}
