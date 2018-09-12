import React from "react";
import SearchBar from "./search_info_components/search";
import InfoBar from "./search_info_components/infoBar";
import Card from "./cardComponent/card";

export default class BoxViewContainer extends React.Component {
  state = {
    box: "",
    voters: [],
    votersAmount: "",
    voted: ""
  };
  searchVoter = e => {
    // here should add the search query on e.target.value
    return;
  };
  markVoter = e => {
    // here should add the mark query to change the voted state
  };
  componentDidMount() {
    fetch("/voters")
      .then(res => res.json())
      .then(voters => this.setState({ voters }));
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar searchVoter={this.searchVoter} />
        <InfoBar />
        {this.state.voters.map(voter => (
          <Card key={voter.id} id={voter.id} name={voter.name} />
        ))}
      </React.Fragment>
    );
  }
}
