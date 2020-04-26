import React from "react";
import './UserPage.css';

import firebase, { storage } from '../../firebase.js';
import { UserConsumer } from "../../Providers/UserProvider.js";

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      iconAsFile: ''
    };

    this.changeDisplayName = this.changeDisplayName.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.changeProfileIcon = this.changeProfileIcon.bind(this);
  }

  changeDisplayName(e) {
    this.setState({displayName: e.target.value});
  }

  updateProfile(e, context) {
    e.preventDefault();
    console.log(e, this.state);
    firebase.database().ref('users/' + context.authUser.uid).set({
      displayName: this.state.displayName,
      profileIcon : this.state.profileIcon
    });
  }

  changeProfileIcon(e, context) {
    const ref = firebase.storage().ref();
    const file = e.target.files[0]
    const name = context.authUser.uid;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    var that = this;
    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      console.log(url);
      that.setState({ profileIcon: url });
    }).catch(console.error);
  }


  render() {
    return (
      <UserConsumer>
          { context => (
            <div className="UserPage">
              {
                context.authUser ?
                <div>
                  <img src={context.user.profileIcon || context.authUser.photoURL}/>
                  <h3>{context.authUser.uid}</h3>
                  <div>
                    { context.user.displayName }
                  </div>
                  <img id="someImageTagId" src={this.state.profileIcon} />
                  <form onSubmit={(e) => this.updateProfile(e, context)}>
                    <input type="text" name="displayName" onChange={this.changeDisplayName} value={this.state.displayName} placeholder="Display Name" />
                    <input id="profileUpload" type="file" onChange={(e) => this.changeProfileIcon(e, context)} />
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
