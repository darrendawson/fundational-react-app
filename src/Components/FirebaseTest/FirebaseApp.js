import React from 'react';
import './FirebaseApp.css';

import { UserProvider } from "../../Providers/UserProvider.js";
import firebase, { auth, provider } from '../../firebase.js';
import UserPage from "./UserPage.js";
class FirebaseApp extends React.Component {

  constructor() {
    super();
    this.state = {
      user: null,
      username: "",
      users: [],
      transactions: [],
      businesses: [],
      formData: {},
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.pushTransaction = this.pushTransaction.bind(this);
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  firebaseUserToState(id, user) {
    return {
      id: id,
      displayName: user.displayName,
      profileIcon: user.profileIcon,

    };
  }

  firebaseTransactionToState(id, transaction) {
    return {
      id: id,
      from: transaction.from,
      to: transaction.to,
      money: transaction.money,
      date: transaction.date,
      state: transaction.state
    };
  }

  firebaseBusinessToState(id, business) {
    return {
      id: id,
      displayName: business.displayName
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      }
    });

    const usersRef = firebase.database().ref('users');
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val();
      let state = [];
      for (let key in users) {
        state.push(this.firebaseUserToState(key, users[key]));
      }

      this.setState({users: state});
    });

    const transactionsRef = firebase.database().ref('transactions');
    transactionsRef.on('value', (snapshot) => {
      let transactions = snapshot.val();
      let state = [];
      for (let key in transactions) {
        state.push(this.firebaseTransactionToState(key, transactions[key]));
      }

      this.setState({transactions: state});
    });

    const businessesRef = firebase.database().ref('businesses');
    businessesRef.on('value', (snapshot) => {
      let businesses = snapshot.val();
      let state = [];
      for (let key in businesses) {
        state.push(this.firebaseBusinessToState(key, businesses[key]));
      }

      this.setState({businesses: state});
    });
  }

  pushTransaction(e) {
    if(this.state.formData["tf-from"] === undefined || this.state.formData["tf-to"] === undefined) {
      // should pop up an error
      return;
    }

    const transactionsRef = firebase.database().ref('transactions');
    var transaction = {
      from: {
        accountType: "",
        id: this.state.formData["tf-from"],
        memo: this.state.formData["tf-message"]
      },
      to: {
        accountType: "",
        id: this.state.formData["tf-from"],
        memo: ""
      },
      money: this.state.formData["tf-amount"],
      date: new Date().getTime() / 1000,
      state: "pending"
    };
    transactionsRef.push(transaction);
  }

  updateInput(e) {
    let newFormData = this.state.formData;
    newFormData[e.target.id] = e.target.value;
    this.setState({"formData": newFormData});
  }

  render() {
    return (
      <UserProvider>
        <div id="FirebaseApp">
          <div className="wrapper">
            {this.state.user ?
              <button onClick={this.logout}>Log Out</button>
              :
              <button onClick={this.login}>Log In</button>
            }
          </div>

          <div id="TestTransactionForm">
            <h3>Create a Transaction</h3>
            <select onChange={this.updateInput} id="tf-from" name="from">
              <option disabled selected value>select user</option>
              { this.state.users.map((user) => {
                return (<option value={user.id}>{user.displayName}</option>);
              })}
            </select>
            <select onChange={this.updateInput} id="tf-to" name="to">
              <option disabled selected value>select receiver</option>
              { this.state.businesses.map((business, key) => {
                return (<option value={business.id}>{business.displayName}</option>);
              })}
            </select>
            <div style={{display: "flex"}}>
              <input onChange={this.updateInput} id="tf-amount" placeholder="Amount" type="number" />
              <input onChange={this.updateInput} id="tf-message" style={{flex: 1}} placeholder="Message" type="text" />
            </div>
            <button onClick={this.pushTransaction}>Create</button>
          </div>

          <h3>Transactions</h3>
          <ul id="TransactionsList">
            { this.state.transactions.map((transaction) => {
              return (
                <li>
                  {transaction.state}, {transaction.from.memo}
                </li>
              );
            })}
          </ul>

          <UserPage />
        </div>
      </UserProvider>
    );
  }

}

export default FirebaseApp;
