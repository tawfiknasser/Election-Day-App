import React, { Component } from 'react';
import SearchBar from './components/search_info_components/search';
import InfoBar from './components/search_info_components/infoBar';
import HeaderBar from './components/Header_Bar/header';

class App extends Component {
render(){


  return (
    <React.Fragment>
    <HeaderBar />
    <SearchBar/>
    <InfoBar />
    </React.Fragment>

  );
}

}

export default App;
