import React, { useContext } from "react";
import './UserPage.css';

import { UserConsumer } from "../../Providers/UserProvider.js";
class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <UserConsumer>
          { context => (
            context.user &&
            <div className="UserPage">
              <img src={context.user.photoURL}/>
              <h3>{context.user.displayName}</h3>
            </div>
          )}
      </UserConsumer>
    );
  }
}

UserPage.contextType = UserConsumer;
export default UserPage;
