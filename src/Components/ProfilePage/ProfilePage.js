import React from 'react';
import './ProfilePage.css';

class ProfilePage extends React.Component {

  constructor() {
    super();
    this.state = {};
  }


  // sort these by date values
  getAllTransactionIDs = () => {
    let ids = [];
    for (let key in this.props.transactionIDsGainMoney) {
      ids.push({id: key, date: this.props.transactions[key]['date']});
    }
    for (let key in this.props.transactionIDsLoseMoney) {
      ids.push({id: key, date: this.props.transactions[key]['date']});
    }

    ids.sort(function(first, second) {
      return second.date - first.date;
    });

    let justIDs = [];
    for (let i = 0; i < ids.length; i++) {
      justIDs.push(ids[i]['id']);
    }
    return justIDs;
  }

  renderTransactions = () => {
    let toRender = [];
    let transactionIDs = this.getAllTransactionIDs();
    for (let i = 0; i < transactionIDs.length; i++) {
      let transactionID = transactionIDs[i];

      // get info about sender
      let transaction = this.props.transactions[transactionID];
      let sender;
      let senderName;
      let senderProfilePic;
      let amount;
      let paymentDescription;
      if (transaction.origin.account_type == 'user') {
        sender = this.props.users[transaction.origin.id];
        senderName = "You";
        amount = <p className="loss">- {transaction.amount.toFixed(2)}</p>

        let receiverName;
        let receiver;
        if (transaction.destination.account_type == 'community fund') {
          receiver = this.props.funds[transaction.destination.id];
          receiverName = receiver.title;
        } else if (transaction.destination.account_type == 'business') {
          receiver = this.props.funds[transaction.destination.id];
          receiverName = receiver.title;
        }
        paymentDescription = " donated to " + receiverName;
      } else if (transaction.origin.account_type == 'community fund') {
        sender = this.props.funds[transaction.origin.id];
        senderName = sender.title;
        amount = <p className="gain">+ {transaction.amount.toFixed(2)}</p>
        paymentDescription = " paid you";
      }
      senderProfilePic = sender.profile_photo_url;

      // format transaction date
      let date = new Date(transaction.date);
      date = (date.getMonth() + 1) + "/" + (date.getDay() + 1) + "/" + date.getFullYear();


      toRender.push(
        <div id="transaction">
          <img id="transaction_profile_pic" src={senderProfilePic}/>
          <div id="description_container">
            <span style={{'display': 'flex', 'align-items': 'center'}}><h3 id="description_title">{senderName}</h3> <p style={{'margin': '0px 0px 0px 7px'}}>{paymentDescription}</p></span>
            <p id="memo_text">{date}</p>
            <p id="memo_text">{transaction.origin.memo}</p>
          </div>

          <div id="amount_container">
            {amount}
          </div>
          <p></p>
        </div>
      );
    }
    return toRender;
  }


  render() {
    return (
      <div id="ProfilePage">
        <div className="content_column" id="col">
          <div id="top_container">
            <div id="profile_container">
              <img id="profile_pic" src={this.props.profilePic}/>
              <h1 className="title">{this.props.name}</h1>
              <h3 className="small_title">{this.props.location}</h3>
            </div>

            <div id="about_container">

            </div>
          </div>

          <div id="transactions_container">
            {this.renderTransactions()}
          </div>


        </div>
      </div>
    );
  }

}

export default ProfilePage;
