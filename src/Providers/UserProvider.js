import React, { Component, createContext } from "react";
import { auth } from "../firebase";

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth});
    });
  };

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === "Day" ? "Night" : "Day"
      };
    });
  };

  render() {
    return (
      <Provider value={{ user: this.state.user }}>
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
