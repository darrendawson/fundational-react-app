import React from 'react';
import './FundPage.css';

import AboutFundSection from './Sections/AboutFundSection.js';

class FundPage extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="FundPage">
        <AboutFundSection
          title={this.props.title}
          description={this.props.description}
          coverPhoto={this.props.coverPhoto}
          fundType={this.props.fundType}
          atAGlanceStats={this.props.atAGlanceStats}
          userDonations={this.props.userDonations}
          address={this.props.address}
          tags={this.props.tags}
          fundOwner={this.props.fundOwner}
        />
      </div>
    );
  }

}

export default FundPage;
