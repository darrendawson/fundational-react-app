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
        <h1 className="navbar_title">F<span id="heart_icon" className="color_txt_primary">&hearts;</span>ndational</h1>
        <div className="links_container">
          <h3 className="navbar_title link_spacing">Link1</h3>
          <h3 className="navbar_title link_spacing">Link2</h3>
        </div>
      </div>
    );
  }

}

export default Navbar;
