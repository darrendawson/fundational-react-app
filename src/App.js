import React from 'react';
import './App.css';

import CommunityFundPage from './Components/CommunityFundPage/CommunityFundPage.js';
import FirebaseApp from './Components/FirebaseTest/FirebaseApp.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="App">
        <div id="website_column">
          <FirebaseApp />
        </div>
      </div>
    );
  }

}

export default App;
