/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formValueSelector} from 'redux-form';

import * as userActions from "../../../actions/vendorAction";
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
    this.props.actions.loadVendor("Ethan");
  }

  onAddressClick(event) {
    const fieldaddress = {
      address1: "808 Military Rd",
      city: "Rothschild",
      state: "WI",
      zip: "54474",
      country: "United States"
    }
    //this.props.actions.loadAddress(address);
  }

  render() {
    return (
      <div>
        <h1>Vendor: {this.props.vendor}</h1>
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

const selector = formValueSelector('fieldLevelValidation');

function mapStateToProps(state, ownProps) {
  // What is returned will show up in props, state is the redux state
  return {
    vendor: state.vendor,
    address1: selector(state, 'type1')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, userActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateVendor);
