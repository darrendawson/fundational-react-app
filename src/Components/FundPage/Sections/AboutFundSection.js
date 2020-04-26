import React from 'react';
import './AboutFundSection.css';

class AboutFundSection extends React.Component {

  constructor() {
    super();
    this.state = {};
  }



  // renders a snapshot of how many donations / recipients / donors a fund has.
  // also renders the Donate button at the bottom
  renderDonateBox = () => {

    let renderStatRow = (value, label) => {
      return (
        <li style={{'margin-top': '20px'}}>
          <p className="medium_text"><span className="color_txt_primary">{value}</span> {label}</p>
        </li>
      );
    }

    // renders a row that looks like: "4 donations in the past day totalling $100!"
    let renderStatRow2 = (value1, timeframe, value2) => {
      return (
        <li style={{'margin-top': '20px'}}>
          <p className="medium_text"><span className="color_txt_primary">{value1}</span> donations in the past {timeframe} totalling <span className="color_txt_primary">${value2.toFixed(2)}</span></p>
        </li>
      );
    }

    let renderUserStats = (userDonations, fundName) => {
      if (userDonations.length == 0) {
        return (
          <p className="medium_text" style={{'text-align': 'center', 'width': '100%'}}>You have not donated to <span style={{'font-style': 'italic'}}>{fundName}</span> yet</p>
        );
      } else if (userDonations.length == 1) {
        return (
          <div id="user_stats_container" style={{'text-align': 'center', 'width': '100%'}}>
            <p className="medium_text">You have donated <span className="color_txt_primary">once</span> to <span className="italic">{fundName}</span></p>
            <p className="medium_text italic">Total: <span className="color_txt_primary">${userDonations[0]['amount'].toFixed(2)}</span></p>
          </div>
        );
      } else {

        let totalAmount = 0;
        for (let i = 0; i < userDonations.length; i++) {
          totalAmount += userDonations[i]['amount'];
        }

        return (
          <div id="user_stats_container" style={{'text-align': 'center', 'width': '100%'}}>
            <p className="medium_text">You have donated <span className="color_txt_primary">{userDonations.length}</span> times to <span className="italic">{fundName}</span></p>
            <p className="medium_text italic">Total: <span className="color_txt_primary">${totalAmount.toFixed(2)}</span></p>
          </div>
        );
      }
    }

    let stats = this.props.atAGlanceStats;
    return (
      <div id="donate_box">
        <div style={{'width': '90%', 'display': 'flex', 'flex-direction': 'column'}}>
          <button className="medium_button color_bg_primary">Donate!</button>
        </div>
        {renderUserStats(this.props.userDonations, this.props.title)}
        <div className="boundary_line"></div>
        <div>
          <h3 className="" style={{'margin-left': '20px'}}>Fund Highlights</h3>
          <ul>
            {(this.props.fundType == "community fund") ? renderStatRow(stats.num_recipients, 'recipients') : null}
            {renderStatRow(stats.num_donors, 'donors')}
            {renderStatRow('$' + stats.average_donation.toFixed(2), 'average donation')}
            {renderStatRow2(stats.past_day.num_donations, 'day', stats.past_day.amount)}
            {renderStatRow2(stats.past_month.num_donations, 'month', stats.past_month.amount)}
          </ul>
        </div>
      </div>
    );
  }


  renderTags = () => {

    let tagsToRender = [];
    for (let tag in this.props.tags) {
      tagsToRender.push(
        <div id="tag" className="color_bg_primary_light">{tag}</div>
      );
    }
    return (
      <div id="tags_container">
        {tagsToRender}
      </div>
    );
  }


  renderFundOwner = () => {
    if (this.props.fundType !== "community fund") {
      return (
        <div id="fund_owner_container">
          <p>All donations go directly to supporting {this.props.title}</p>
        </div>
      );
    }
    let owner = this.props.fundOwner;
    return (
      <div id="fund_owner_container">
        <p className="">Fund maintained with <span className="color_txt_primary">&hearts;</span> by </p>
        <img id="fund_owner_picture" src={owner.profile_photo_url}/>
        <p className="clickable color_txt_primary">{owner.name}</p>
      </div>
    );
  }

  render() {
    return (
      <div id="AboutFundSection">
        <img id="cover_photo" src={this.props.coverPhoto}/>
        <div className="content_column">
          <div className="flex_space_between">
            <div id="about_fund_container">
              <div style={{'width': '100%'}}>
                <h1 className="major_title">{this.props.title}</h1>
                <h3 class="small_title color_txt_not_focus">@ {this.props.address}</h3>
                <p className="small_title color_txt_not_focus">{this.props.fundType}</p>
                {this.renderTags()}
                <div>
                  <p>{this.props.description}</p>
                </div>
              </div>

              {this.renderFundOwner()}
            </div>

            {this.renderDonateBox()}
          </div>
        </div>
      </div>
    );
  }

}

export default AboutFundSection;
