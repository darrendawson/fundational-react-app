import React from 'react';
import './FundPage.css';

import AboutFundSection from './Sections/AboutFundSection.js';
import PatronSection from './Sections/PatronSection.js';

class FundPage extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="FundPage">
        <AboutFundSection
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          coverPhoto={this.props.coverPhoto}
          fundType={this.props.fundType}
          atAGlanceStats={this.props.atAGlanceStats}
          userDonations={this.props.userDonations}
          address={this.props.address}
          tags={this.props.tags}
          fundOwner={this.props.fundOwner}
          transactions={this.props.transactions}
          patrons={this.props.patrons}
          recipients={this.props.recipients}
          makeDonation={this.props.makeDonation}
        />

        <PatronSection
          patrons={this.props.patrons}
          transactions={this.props.transactions}
        />
      </div>
    );
  }

}

export default FundPage;
