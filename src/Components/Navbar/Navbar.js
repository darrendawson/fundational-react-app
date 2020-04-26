import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="Navbar">
        <h1 className="navbar_title" onClick={() => this.props.selectPage('search')}>F<span id="heart_icon" className="color_txt_primary">&hearts;</span>ndational</h1>
        <div className="links_container">
          <h3 className="navbar_title link_spacing" onClick={() => this.props.selectPage('search')}>Browse</h3>
          <h3 className="navbar_title link_spacing" onClick={() => this.props.selectPage('user')}>Profile</h3>
        </div>
      </div>
    );
  }

}

export default Navbar;
