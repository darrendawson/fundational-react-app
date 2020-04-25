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
      username: ""
    };

    this.testSubmit = this.testSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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



  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      }
    });

    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }


  testSubmit(e) {
    e.preventDefault();
    const ownersRef = firebase.database().ref('owners');
    const owner = {
      owner: "ciceros",
      img: "invalid image"
    }
    ownersRef.push(owner);
    console.log("this is a test");
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

          <button onClick={this.testSubmit}>this is a test</button>
          <UserPage />
        </div>
      </UserProvider>
    );
  }

}

export default FirebaseApp;
