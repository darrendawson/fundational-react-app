import React from "react";
import './UserPage.css';

import firebase from '../../firebase.js';
import { UserConsumer } from "../../Providers/UserProvider.js";

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.changeUserName = this.changeUserName.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  changeUserName(e) {
    console.log(e.target.value);

    const userRef = firebase.database().ref('users');
    userRef.on('value', (snapshot) => {
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

  updateProfile(e, context) {
    e.preventDefault();
    console.log(e);
    firebase.database().ref('users/' + context.authUser.uid).set({
      displayName: "value",
      email: "email",
      profile_picture : "imageUrl"
    });
  }

  render() {
    return (
      <UserConsumer>
          { context => (
            <div className="UserPage">
              {
                context.authUser ?
                <div>
                  <img src={context.authUser.photoURL}/>
                  <h3>{context.authUser.uid}</h3>
                  <input type="text" name="displayName" value={context.authUser.displayName} onChange={this.changeUserName} />
                  <div>
                    { context.user.displayName }
                  </div>
                  <form onSubmit={(e) => this.updateProfile(e, context)}>
                    <input type="text" name="displayName" placeholder="Display Name" />
                    <button>Submit</button>
                  </form>
                </div>
                :
                <div>
                  <h3>Log in to edit user info</h3>
                </div>
            }
            </div>
          )}
      </UserConsumer>
    );
  }
}

export default UserPage;
