import React from "react";
import style from "./boxViewContainer.css";
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
    if (e.target.value) {
      fetch(`/voter/${e.target.value}`)
        .then(res => res.json())
        .then(voters => this.setState({ voters }));
      return;
    }
  };
  markVoter = e => {
    // here should add the mark query to change the voted state
  };

  render() {
    return (
      <React.Fragment>
        <section className="flex-box">
          <SearchBar searchVoter={this.searchVoter} />
        </section>
        <section className="flex-box">
          <InfoBar />
        </section>
        <section id="flexbox" className="flex-container">
          {this.state.voters.map(voter => (
            <Card
              key={voter.id}
              id={voter.id}
              name={voter.full_name}
              box_number={voter.serial_box_number}
            />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
