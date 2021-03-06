import React from 'react';
import logo from './logo.svg';
import './App.css';

import WorkingData from './WorkingData.js';
import FirebaseApp from './Components/FirebaseTest/FirebaseApp.js';

import Navbar from './Components/Navbar/Navbar.js';
import FundPage from './Components/FundPage/FundPage.js';
import ProfilePage from './Components/ProfilePage/ProfilePage.js';
import SearchPage from './Components/SearchPage/SearchPage.js';

class App extends React.Component {

  constructor() {
    super();
    let fakeData = new WorkingData();
    this.state = {
      funds: fakeData.getFunds(),
      users: fakeData.getUsers(),
      transactions: fakeData.getTransactions(),

      selectedPage: 'search', // <- user, fund
      selectedUserID: 'test',
      selectedFund: false
    };
  }

  // onClick and page navigation -----------------------------------------------

  onClick_selectPage = (pageID) => {
    this.setState({selectedPage: pageID});
  }

  onClick_selectFund = (fundID) => {
    this.setState({selectedFund: fundID});
  }


  // manipulation --------------------------------------------------------------

  // gets a random String to act as a unique key
  getNewUniqueID() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newID = "";
    for (let i = 0; i < 10; i++) {
      newID += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return newID;
  }


  onClick_makeDonation = (receiverID, receiverType, amount, memo) => {
    let senderID = this.state.selectedUserID;
    
    let newTransaction = {
      id: this.getNewUniqueID(),
      destination: {id: receiverID, account_type: receiverType, memo: ""},
      origin: {id: senderID, account_type: 'user', memo: memo},
      amount: amount,
      date: Date.now(),
      status: 'accepted'
    };
    let transactions = this.state.transactions;
    transactions[newTransaction.id] = newTransaction;
    this.setState({transactions: transactions});

    // add to sender's account
    let users = this.state.users;
    users[senderID]['messages']['contributions'][newTransaction.id] = true;

    // add to receiver's account
  }


  // Processing ----------------------------------------------------------------

  // both times are unix epoch times (in milliseconds)
  // time1 is supposed to be larger than time2
  checkIfInLastDay = (time1, time2) => {
    if ((time1 - time2) <= (1000 * 60 * 60 * 24)) {
      return true;
    }
    return false;
  }

  checkIfInLastMonth = (time1, time2) => {
    if ((time1 - time2) <= (1000 * 60 * 60 * 24 * 31)) {
      return true;
    }
    return false;
  }



  // also converts transactions from a dict to a list
  getAllTransactionsByReceiver = (receiverID) => {
    let transactions = [];
    for (let transactionID in this.state.transactions) {
      if (this.state.transactions[transactionID]['destination']['id'] == receiverID) {
        transactions.push(this.state.transactions[transactionID]);
      }
    }
    return transactions;
  }

  // generates
  getPatronsFromTransactions = (transactions) => {
    let patronLookup = {};
    let patrons = [];
    for (let i = 0; i < transactions.length; i++) {
      let senderID = transactions[i]['origin']['id'];
      if (senderID in patronLookup) {
        patronLookup[senderID]['amount']        += transactions[i]['amount'];
        patronLookup[senderID]['num_donations'] += 1;
      } else {
        let userInfo = this.state.users[senderID];
        patronLookup[senderID] = {};
        patronLookup[senderID]['amount']            = transactions[i]['amount'];
        patronLookup[senderID]['num_donations']     = 1;
        patronLookup[senderID]['id']                = senderID;
        patronLookup[senderID]['name']              = userInfo['name'];
        patronLookup[senderID]['profile_photo_url'] = userInfo['profile_photo_url'];
        patronLookup[senderID]['location']          = userInfo['location'];
      }
    }

    // reduce lookup into list
    for (let patronID in patronLookup) {
      patrons.push(patronLookup[patronID]);
    }
    return patrons;
  }


  // rendered in the "Donate!" box in <AboutFundSection/>
  getAtAGlanceStatsForFund = (fundID) => {

    // use fundID to get a list of all transactions, patrons, and recipients
    let transactions = this.getAllTransactionsByReceiver(fundID);
    let patrons = this.getPatronsFromTransactions(transactions);
    let recipients = this.getRecipientsOfFund(fundID);

    // return stats
    let stats = {};
    stats['num_recipients'] = recipients.length;
    stats['num_donors'] = patrons.length;
    stats['num_donations'] = transactions.length;
    stats['average_donation'] = 0;
    stats['past_day'] = {'num_donations': 0, 'amount': 0};
    stats['past_month'] = {'num_donations': 0, 'amount': 0};

    if (transactions.length > 0) {
      let currentDate = Date.now();
      for (let i = 0; i < transactions.length; i++) {
        stats['average_donation'] += transactions[i]['amount'];
        if (this.checkIfInLastDay(currentDate, transactions[i]['date'])) {
          stats['past_day']['num_donations'] += 1;
          stats['past_day']['amount'] += transactions[i]['amount'];
        }

        if (this.checkIfInLastMonth(currentDate, transactions[i]['date'])) {
          stats['past_month']['num_donations'] += 1;
          stats['past_month']['amount'] += transactions[i]['amount'];
        }
      }
      stats['average_donation'] = stats['average_donation'] / transactions.length;
    }

    return stats;
  }

  getTransactionsBySenderAndReceiver = (senderID, receiverID, transactions = this.state.transactions) => {
    let donations = [];
    for (let transactionID in transactions) {
      if ((transactions[transactionID]['origin']['id'] == senderID) && (transactions[transactionID]['destination']['id']) == receiverID) {
        donations.push(transactions[transactionID]);
      }
    }
    return donations;
  }


  // goes over all users and returns those that get money from a member of a community fund
  getRecipientsOfFund = (fundID) => {
    let users = [];
    for (let userID in this.state.users) {
      if (fundID in this.state.users[userID]['get_from']) {
        users.push(this.state.users[userID]);
      }
    }
    return users;
  }

  // Render --------------------------------------------------------------------


  renderFundPage = () => {
    let fund = this.state.funds[this.state.selectedFund];
    let fundTransactions = this.getAllTransactionsByReceiver(fund.id);
    return (
      <FundPage
        id={fund.id}
        title={fund.title}
        description={fund.description}
        coverPhoto={fund.cover_photo_url}
        fundType={fund.fund_type}
        atAGlanceStats={this.getAtAGlanceStatsForFund(fund.id)}
        userDonations={this.getTransactionsBySenderAndReceiver(this.state.selectedUserID, fund.id)}
        address={fund.address}
        tags={fund.tags}
        fundOwner={this.state.users[fund.owner_user]}
        transactions={fundTransactions}
        patrons={this.getPatronsFromTransactions(fundTransactions)}
        recipients={this.getRecipientsOfFund(fund.id)}
        makeDonation={this.onClick_makeDonation}
      />
    );
  }

  renderUserProfilePage = () => {
    let user = this.state.users[this.state.selectedUserID];
    return (
      <ProfilePage
        name={user.name}
        profilePic={user.profile_photo_url}
        occupation={user.occupation}
        location={user.location}
        transactionIDsGainMoney={user.messages.responses}
        transactionIDsLoseMoney={user.messages.contributions}
        transactions={this.state.transactions}
        funds={this.state.funds}
        users={this.state.users}
      />
    );
  }


  renderSearchPage = () => {
    return (
      <SearchPage
        funds={this.state.funds}
        selectFund={this.onClick_selectFund}
        selectPage={this.onClick_selectPage}
      />
    );
  }

  // MODIFY THIS FUNCTION TO USE THE RIGHT STATE
  renderPage = () => {
    if (this.state.selectedPage == 'user') {
      return this.renderUserProfilePage();
    } else if (this.state.selectedPage == 'fund') {
      return this.renderFundPage();
    } else if (this.state.selectedPage == 'search') {
      return this.renderSearchPage();
    } else {
      return (
        <FirebaseApp/>
      );
    }
  }

  render() {
    return (
      <div id="App">
        <div id="navbar_container">
          <Navbar selectPage={this.onClick_selectPage}/>
        </div>
        <div id="website_content">
          {this.renderPage()}
        </div>
      </div>
    );
  }

}

export default App;
