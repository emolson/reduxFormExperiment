/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formValueSelector} from 'redux-form';

import * as vendorActions from "../../../actions/vendorAction";
import BusinessInfo from "./BusinessInfo";
import TaxInfo from "./TaxInfo";


class CreateVendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.onLoadVendorClick = this.onLoadVendorClick.bind(this);
  }


  onSubmit(values) {
    console.log("I be the one handling the submit: " + values);
  }

  onLoadVendorClick(event) {
    const vendor = {
      baddress1: "808 Military Rd",
      bcity: "Rothschild",
      bstate: "WI",
      bzip: "54474",
      bcountry: "United States"
    }
    this.props.actions.loadVendor(vendor);
  }

  render() {
    return (
      <div>
        <h1>Vendor:</h1>
        <button onClick={this.onLoadVendorClick}>Load Vendor</button>
        <h1>BusinessInfo:</h1>
        <BusinessInfo
          onSubmit={this.onSubmit}
          enableReinitialize={true}
        />
        <h1>TaxInfo:</h1>
        <TaxInfo
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
)(CreateVendor);
