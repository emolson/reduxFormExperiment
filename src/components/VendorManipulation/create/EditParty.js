/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formValueSelector} from 'redux-form';

import * as vendorActions from "../../../actions/partyAction";
import BusinessInfo from "./BusinessInfo";
import TaxInfo from "./TaxInfo";


class EditParty extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onLoadPartyClick = this.onLoadPartyClick.bind(this);
  }


  onSubmit(values) {
    console.log("I be the one handling the submit: " + values);
  }

  onLoadPartyClick(event) {
    const vendor = {
      businessName: "Ethan's Business",
      address: {
        address1: "808 Military Rd",
        city: "Rothschild",
        state: "WI",
        zip: "54474",
        country: "United States"
      }
    }
    this.props.actions.loadParty(vendor);
  }

  render() {
    return (
      <div>
        <h1>Party:</h1>
        <button onClick={this.onLoadPartyClick}>Load Party</button>
        <h1>BusinessInfo:</h1>
        <BusinessInfo
          initialValues={{
            address: this.props.vendor.address,
            businessName: this.props.vendor.businessName
          }}
          onSubmit={this.onSubmit}
          enableReinitialize={true}
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
    vendor: state.vendor,
    address1: selector(state, 'type1')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, vendorActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditParty);
