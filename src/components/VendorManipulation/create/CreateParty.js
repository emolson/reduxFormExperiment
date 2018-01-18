/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formValueSelector} from 'redux-form';

import * as partyActions from "../../../actions/partyAction";
import BusinessInfo from "./BusinessInfo";
import TaxInfo from "./TaxInfo";


class CreateParty extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(values) {
    console.log("I be the one handling the submit: " + values);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="alert alert-secondary" role="alert">
              This is a secondary alert—check it out!
            </div>
          </div>
          <div className="col-sm-2">
            <div className="alert alert-success" role="alert">
              This is a success alert—check it out!
            </div>
          </div>
        </div>
        <h1>Party:</h1>
        <h1>BusinessInfo:</h1>
        <BusinessInfo
          onSubmit={this.onSubmit}
        />
        <h1>TaxInfo:</h1>
        <TaxInfo
          initialValues={{
            addressType: 'Business'
          }}
          onSubmit={this.onSubmit}
          enableReinitialize={true}
        />
      </div>
    );
  }
}

const selector = formValueSelector('businessInfo');

function mapStateToProps(state, ownProps) {
  // What is returned will show up in props, state is the redux state
  return {
    party: state.party,
    address1: selector(state, 'type1')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, partyActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateParty);
