/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {formValueSelector, reset} from 'redux-form';
import {Route} from 'react-router-dom';

import PartyInfo from "../common/PartyInfo";
import UserInfo from "../common/UserInfo";

class CreateParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ''
    };
    this.onPartySubmit = this.onPartySubmit.bind(this);
    this.onUserSubmit = this.onUserSubmit.bind(this);
    this.colorBasedOnPartyType = this.colorBasedOnPartyType.bind(this);
    this.partyInfoWrapper = this.partyInfoWrapper.bind(this);
    this.userInfoWrapper = this.userInfoWrapper.bind(this);
  }

  onPartySubmit(values) {
    this.props.history.push('/createParty/guestInfo');
  }
  onUserSubmit(values) {
    this.props.history.push('/createParty/guestInfo');
    //todo test to make sure you can reset pages on final submission
    values.address.zip === '333' && this.props.dispatch(reset('partyInfo'));
  }

  colorBasedOnPartyType() {
    if (this.props.partyType === 'Birthday') {
      return require("../../styles/backgrounds/birthdayBackground.png");
    } else if (this.props.partyType === 'Sports') {
      return require("../../styles/backgrounds/sportsBackground.png");
    } else if (this.props.partyType === 'Rager') {
      return require("../../styles/backgrounds/ragerBackground.png");
    }
  }

  partyInfoWrapper() {
    return (<PartyInfo
      onSubmit={this.onPartySubmit}
    />);
  }

  userInfoWrapper() {
    return ( <UserInfo
      initialValues={{addressType: 'Party Address', address: this.props.partyAddress}}
      onSubmit={this.onUserSubmit}
      enableReinitialize
    />);
  }

  render() {

    return (
      <div className="container">
        <div className="col-sm-6">
          <Route path='/createParty/partyInfo' render={this.partyInfoWrapper}/>
          <Route path='/createParty/guestInfo' render={this.userInfoWrapper}/>
        </div>
        <div className="col-sm-6"
             style={{height: '300px', backgroundImage: 'url(' + this.colorBasedOnPartyType() + ')',
               backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>Party type here:
        </div>
      </div>
    );
  }
}

const selector = formValueSelector('partyInfo');

function mapStateToProps(state, ownProps) {
  return {
    partyAddress: selector(state, 'address'),
    partyType: selector(state, 'partyType')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: (func) => {
      dispatch(func);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateParty);
