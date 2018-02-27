/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formValueSelector, reset} from 'redux-form';

import * as partyActions from "../../../actions/partyAction";
import PartyInfo from "../../common/PartyInfo";
import UserInfo from "../../common/UserInfo";

class CreateParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formBackground: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.colorBasedOnPartyType = this.colorBasedOnPartyType.bind(this);
    this.determinePage = this.determinePage.bind(this);
  }

  onSubmit(values) {
    this.props.history.push('/createParty/guestInfo');
    values.address.zip === '333' && this.props.dispatch(reset('partyInfo'));
    console.log("I be the one handling the submit: " + values);
  }

  colorBasedOnPartyType() {
    if (this.props.partyType === 'Birthday') {
      return require("../../../styles/backgrounds/birthdayBackground.png");
    } else if (this.props.partyType === 'Sports') {
      return require("../../../styles/backgrounds/sportsBackground.png");
    } else if (this.props.partyType === 'Rager') {
      return require("../../../styles/backgrounds/ragerBackground.png");
    }
  }

  determinePage(pageName) {
    switch (pageName) {
      case "partyInfo":
        return (
          <div>
            <PartyInfo
              onSubmit={this.onSubmit}
            />
          </div>);
      case "guestInfo":
        return (
          <div>
            <h1>UserInfo:</h1>
            <UserInfo
              initialValues={{
                addressType: 'Business',
                address: this.props.partyAddress
              }}
              onSubmit={this.onSubmit}
              enableReinitialize
            />
          </div>);
      default:
        return (
          <div>
            Error Error Error!
          </div>);
    }
  }

  render() {
    let page = this.determinePage(this.props.match.params.page);

    return (
      <div className="container">
        <div className="col-sm-6">
          <h1>Party:</h1>
          {page}
        </div>
        <div className="col-sm-6"
             style={{
               height: '300px',
               backgroundImage: 'url(' + this.colorBasedOnPartyType() + ')',
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat'
             }}>
          Party type here:
        </div>
      </div>
    );
  }
}

const selector = formValueSelector('partyInfo');

function mapStateToProps(state, ownProps) {
  // What is returned will show up in props, state is the redux state
  return {
    party: state.form.partyInfo,
    partyAddress: selector(state, 'address'),
    partyType: selector(state, 'partyType')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, partyActions), dispatch),
    dispatch: (func) => {
      dispatch(func);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateParty);
