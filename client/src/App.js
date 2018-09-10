
import React, { Component } from 'react';
import SearchRectangle from './components/search_info_components/search';
import InfoBar from './components/search_info_components/infoBar';
class App extends Component {
render(){
  return (
    <React.Fragment>
    <SearchRectangle />
    <InfoBar />
    </React.Fragment>

  );
}

}

export default App;
