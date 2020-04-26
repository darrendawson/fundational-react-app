import React from 'react';
import './SearchPage.css';

class SearchPage extends React.Component {

  constructor() {
    super();
    this.state = {
      query: "",
      results: []
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    this.setState({query: e.target.value});
  }

  onClick_selectFund = (fundID) => {
    this.props.selectFund(fundID);
    this.props.selectPage('fund');
  }

  renderTags = (tags) => {
    let tagsToRender = [];
    for (let tag in tags) {
      tagsToRender.push(
        <span className="color_bg_primary_light tag">{tag}</span>
      );
    }
    return (
      <div id="tag-container">
        {tagsToRender}
      </div>
    );
  }

  renderFund = (fund) => {
    return (
      <div className="fund_search_listing" style={{background: fund.profile_photo_url}} onClick={() => this.onClick_selectFund(fund.id)}>
        <img className="cover_photo" src={fund.cover_photo_url}/>
        <div className="text_container">
          <div className="flex_space_between">
            <div id="about_fund_container">
              <div>
                <h1 className="major_title">{fund.title}</h1>
                <h3 class="small_title color_txt_not_focus">@ {fund.address}</h3>
                <p className="small_title color_txt_not_focus" style={{'margin-bottom': '10px'}}>{fund.fund_type}</p>
                {this.renderTags(fund.tags)}
                <div>
                  <p>{fund.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  renderFundsNoSearch = () => {
    if (this.state.query.length > 3) { return; }
    let toRender = [];
    let i = 0;
    for (let key in this.props.funds) {
      let fund = this.props.funds[key];
      if (i == 0) {
        toRender.push(<h1 style={{'width': '100%'}}>Small Businesses</h1>)
      } else if (i == 12) {
        toRender.push(<h1 style={{'width': '100%'}}>Community Funds</h1>)
      } else if (i == 24) {
        toRender.push(<h1 style={{'width': '100%'}}>Trending!</h1>)
      }

      toRender.push(
        <div id="fund_card" onClick={() => this.onClick_selectFund(fund.id)}>
          <img id="img" src={fund.cover_photo_url}/>
          <h3>{fund.title}</h3>
          <p className="color_txt_not_focus">{fund.address}</p>
          <p className="color_txt_not_focus">{fund.fund_type}</p>
        </div>
      );
      i += 1;
    }
    return (
      <div id="fund_cards_container">
        {toRender}
      </div>
    );
  }


  render() {
    let funds = [];
    for(let fundID in this.props.funds) {
      let query = this.state.query.toLowerCase();
      let fund = this.props.funds[fundID];
      let matched = false;

      for(let tag in fund.tags) {
        if(tag.toLowerCase().indexOf(query) !== -1) {
          matched = true;
        }
      }
      if(fund.title.toLowerCase().indexOf(query) !== -1) {
        matched = true;
      }

      if(matched && query.length > 3) {
        funds.push(this.props.funds[fundID]);
      }
    }

    return (
      <div id="SearchPage">
        <input type="text" placeholder="Community Search" onChange={this.updateSearch} value={this.state.query}/>
        <select>
          <option>Mountain View, California</option>
        </select>
        <ul id="FundSearchResults">
          {funds.map((fund) => {
            return this.renderFund(fund);
          })}
        </ul>
        {this.renderFundsNoSearch()}
      </div>
    );
  }

}

export default SearchPage;
