import React from 'react';
import './FirebaseApp.css';

import firebase, { auth, provider } from '../../firebase.js';

class FirebaseApp extends React.Component {

  constructor() {
    super();
    this.state = {
      list: [{id: 1}, {id: 2}, {id: 3}],
      user: null
    };

    this.testSubmit = this.testSubmit.bind(this);
  }

  componentDidMount() {
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
      <div id="FirebaseApp">
        <button onClick={this.testSubmit}>this is a test</button>
        <ul>
          { this.state.list.map((item) => {
            return (
              <li key={item.id}>
                entry {item.id}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

}

export default FirebaseApp;
