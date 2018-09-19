import React from "react";
import "./search.css";

export default class SearchBar extends React.Component {
  state = {
    clicked: false
  };

  render() {
    return (
      <React.Fragment>
        <input onKeyUp={this.props.searchVoter} className="searchBar" />
      </React.Fragment>
    );
  }
}
