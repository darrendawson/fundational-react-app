import React, { Component, createContext } from "react";
import firebase, { auth } from "../firebase";

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  state = {
    authUser: null,
    user: {
      displayName: "",
      profileIcon: "",
      businessIDs: []
    }
  };

  componentDidMount() {
    auth.onAuthStateChanged(userAuth => {
      var user = {
        displayName: "",
        profileIcon: "",
        businessIDs: []
      };
      var that = this;
      firebase.database().ref('users/' + userAuth.uid).once('value').then(function(snapshot) {
        user = snapshot.val();
        if(user == null) {
          console.log("create a new user");
          user = {
            displayName: "",
            profileIcon: "",
          }
        }
        that.setState({ authUser: userAuth, user: user });
      })
    });
  };

  render() {
    return (
      <Provider value={{ authUser: this.state.authUser, user: this.state.user }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };


/*

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth});
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
*/
