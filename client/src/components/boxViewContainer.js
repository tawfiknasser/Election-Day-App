import React from "react";
import style from "./boxViewContainer.css";
import SearchBar from "./search_info_components/search";
import InfoBar from "./search_info_components/infoBar";
import Card from "./cardComponent/card";

export default class BoxViewContainer extends React.Component {
  state = {
    box: 10,
    voters: [],
    votersAmount: 0,
    voted: 0
  };
  searchVoter = e => {
    // here should add the search query on e.target.value
    if (e.target.value) {
      fetch(`/useronbox/voter/${e.target.value}`)
        .then(res => res.json())
        .then(voters => this.setState({ voters }));
      return;
    }
  };

  setInfoBarVars = () => {
    // here it setState for votersAmount and voted so we can send it to the InfoBar Component
    // we should call this function each time we mark/unMark someone
    fetch(`/useronbox/votersnumber/${this.state.box}`)
      .then(res => res.json())
      .then(number => this.setState({ votersAmount: Number(number) }));

    fetch(`/useronbox/votednumber/${this.state.box}`)
      .then(res => res.json())
      .then(number => this.setState({ voted: Number(number) }));
  };
  render() {
    return (
      <React.Fragment>
        <section className="flex-box">
          <SearchBar searchVoter={this.searchVoter} />
        </section>
        <section className="flex-box">
          <InfoBar
            voted={this.state.voted}
            votersAmount={this.state.votersAmount}
          />
        </section>
        <section id="flexbox" className="flex-container">
          {this.state.voters.map(voter => (
            <Card
              key={voter.id}
              id={voter.id}
              name={voter.full_name}
              box_number={voter.serial_box_number}
              setInfoBarVars={this.setInfoBarVars}
            />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
