import React, { Component } from "react";
import SearchBar from "./components/search_info_components/search";
import InfoBar from "./components/search_info_components/infoBar";
import HeaderBar from "./components/Header_Bar/header";
import Card from "./components/cardComponent/card";

class App extends Component {
  state = {
    voters: []
  };
  // searchVoter = () => {};



  componentDidMount() {
  fetch('/voters')
    .then(res => res.json())
    .then(voters => this.setState({ voters }));
}
  render() {
    return (
      <React.Fragment>
        <HeaderBar />
        <SearchBar />
        <InfoBar /> // this three lines ^ should be in container

        {this.state.voters.map(voter =>
         <Card key={voter.id} id={voter.id} name={voter.name}/>
       )}

      </React.Fragment>
    );
  }
}

export default App;
