import React from 'react';
import logo from './logo.svg';
import './App.css';

import CommunityFundPage from './Components/CommunityFundPage/CommunityFundPage.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="App">
        <div id="website_column">
          <CommunityFundPage/>
        </div>
      </div>
    );
  }

}

export default App;
