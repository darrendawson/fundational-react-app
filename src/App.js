import React from 'react';
import logo from './logo.svg';
import './App.css';

import WorkingData from './WorkingData.js';

import Navbar from './Components/Navbar/Navbar.js';
import FundPage from './Components/FundPage/FundPage.js';

class App extends React.Component {

  constructor() {
    super();
    let fakeData = new WorkingData();
    this.state = {
      funds: fakeData.getFunds()
    };
  }

  renderFundPage = () => {
    let fund = this.state.funds[1]; // <- MODIFY THIS TO GET THE SELECTED FUND
    return (
      <FundPage
        title={fund.title}
        description={fund.description}
        coverPhoto={fund.cover_photo_url}
        fundType={fund.fund_type}
        atAGlanceStats={fund.at_a_glance_stats}
        userDonations={fund.user_donations}
        address={fund.address}
        tags={fund.tags}
        fundOwner={fund.owner_user}
      />
    );
  }


  // MODIFY THIS FUNCTION TO USE THE RIGHT STATE
  renderPage = () => {
    return this.renderFundPage();
  }

  render() {
    return (
      <div id="App">
        <div id="navbar_container">
          <Navbar/>
        </div>
        <div id="website_content">
          {this.renderPage()}
        </div>
      </div>
    );
  }

}

export default App;
