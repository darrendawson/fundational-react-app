import React from 'react';
import './PatronSection.css';

class PatronSection extends React.Component {

  constructor(props) {
    super(props);
    let selectedID = (this.props.patrons.length > 0) ? this.props.patrons[0]['id'] : false;
    this.state = { selectedPatronID: selectedID, selectedPatronIndex: 0 };
  }


  // get -----------------------------------------------------------------------

  getSelectedPatron = () => {
    return this.props.patrons[this.state.selectedPatronIndex];
  }

  getTransactionsForPatron = (id) => {
    let patronTransactions = [];
    for (let i = 0; i < this.props.transactions.length; i++) {
      if (this.props.transactions[i]['sender_id'] == id) {
        patronTransactions.push(this.props.transactions[i]);
      }
    }
    return patronTransactions;
  }


  // render --------------------------------------------------------------------

  renderPatronsBar= () => {

    let renderPatronIcon = (index, patronObject, selectedPatronID) => {
      if (selectedPatronID == patronObject['id']) {
        return (
          <div>
            <img className="patron_profile_photo selected" src={patronObject.profile_photo_url}/>
          </div>
        );
      } else {
        return (
          <div onMouseEnter={() => this.setState({'selectedPatronID': patronObject.id, 'selectedPatronIndex': index})}>
            <img className="patron_profile_photo unselected" src={patronObject.profile_photo_url}/>
          </div>
        );
      }
    }

    let patronIconsToRender = [];
    for (let i = 0; i < 13 & i < this.props.patrons.length; i++) {
      patronIconsToRender.push(renderPatronIcon(i, this.props.patrons[i], this.state.selectedPatronID));
    }
    let numAdditionalPatrons = this.props.patrons.length - patronIconsToRender.length;
    return (
      <div id="patrons_bar">
        <div id="icon_section">
          {patronIconsToRender}
        </div>
        <p className="" style={{'margin-right': '20px', 'cursor': 'pointer'}}>+ {numAdditionalPatrons} more</p>
      </div>
    )
  }


  renderUserCard = (user) => {

    let donationsLabel = (user.num_donations > 1) ? "donations" : "donation";
    return (
      <div id="user_card">
        <div id="top_section">
          <div id="photo_container">
            <img id="photo" src={user.profile_photo_url}/>
          </div>
        </div>
        <div id="bottom_section">
          <div style={{'width': '100%', 'text-align': 'center'}}>
            <h2 className="title">{user.name}</h2>
            <h3 className="title">${user.amount.toFixed(2)}</h3>
            <h3 className="title">{user.num_donations} {donationsLabel}</h3>
          </div>

          <h3 className="title color_txt_not_focus">{user.location}</h3>
        </div>
      </div>
    );
  }

  renderMemo = (patron) => {
    let transactions = this.getTransactionsForPatron(patron.id);
    let memo = "...";
    let date = "...";
    if (transactions.length > 0) {
      memo = transactions[0]['memo'];
      date = new Date(transactions[0]['date']);
      date = (date.getMonth() + 1) + "/" + (date.getDay() + 1) + "/" + date.getFullYear();
    }
    return (
      <div id="memo_container">
        <p id="memo_text">"{memo}"</p>
        <p id="memo_date">- {patron.name}, {date}</p>
      </div>
    );
  }

  renderPatron = (patron) => {
    return (
      <div id="patron_container">
        {this.renderUserCard(patron)}
        {this.renderMemo(patron)}
      </div>
    );
  }


  render() {

    let selectedPatron = this.getSelectedPatron();

    return (
      <div id="PatronSection">
        <div className="content_column" style={{'display': 'flex', 'flex-direction': 'column'}}>
          <h1>Patrons</h1>
          {this.renderPatronsBar()}
          {this.renderPatron(selectedPatron)}
        </div>
      </div>
    );
  }

}

export default PatronSection;
