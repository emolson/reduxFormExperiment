/**
 * Created by emols on 12/5/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {reduxForm, formValueSelector} from 'redux-form';

import {required, alphaNumeric} from "../../../validation/validation";
import Address from "../../common/Address";
import RadioButton from "../../renderFields/RadioButtonField";

class TaxInfo extends Component {
  constructor(props) {
    super(props);

    this.handleAddressRadioButtonChange = this.handleAddressRadioButtonChange.bind(this);
  }

  handleAddressRadioButtonChange(event) {
    event.target.value == "Tax Address" && this.props.change('address', {});
    event.target.value == "Business" && this.props.change('address', this.props.businessAddress);
  }

  render() {
    const {handleSubmit, pristine, reset, submitting, businessAddress} = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <RadioButton
          validate={[required]}
          name="addressType"
          label="Type of Address: "
          valueList={["Business", "Tax Address"]}
          onChange={this.handleAddressRadioButtonChange}
        />

        <Address/>

        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>

      </form>
    );
  }
}

const selectorBusinessInfo = formValueSelector('businessInfo'); // <-- same as form name
const selectorTaxInfo = formValueSelector('taxInfo'); // <-- same as form name

function mapStateToProps(state, ownProps) {
  return {
    businessAddress: selectorBusinessInfo(state, 'address'),
    addressType: selectorTaxInfo(state, 'addressType')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  };
}

export default reduxForm({
  form: 'taxInfo'
})(connect(mapStateToProps, mapDispatchToProps)(TaxInfo));
