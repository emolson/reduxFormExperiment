/**
 * Created by emols on 12/5/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {reduxForm, formValueSelector} from 'redux-form';
import {Field} from 'redux-form';

import {required} from "../../validation/validation";
import Address from "./Address";
import RadioButton from "../renderFields/RadioButtonField";
import ReduxFormDropzone from "../renderFields/ReduxFormDropzone";

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.handleAddressRadioButtonChange = this.handleAddressRadioButtonChange.bind(this);
  }

  handleAddressRadioButtonChange(event) {
    event.target.value == "Tax Address" && this.props.change('address', {});
    event.target.value == "Business" && this.props.change('address', this.props.businessAddress);
  }

  render() {
    const {handleSubmit, pristine, reset, submitting, businessAddress, addressType} = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <div>Address Type is : {addressType}</div>
        <RadioButton
          validate={[required]}
          name="addressType"
          label="Type of Address: "
          valueList={["Party Address", "User Address"]}
          onChange={this.handleAddressRadioButtonChange}
        />

        <Address/>

        <Field name="userFile" component={ReduxFormDropzone}></Field>
        {this.props.file[0] && <img src={this.props.file[0].preview}/>}

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

const selectorBusinessInfo = formValueSelector('partyInfo'); // <-- same as form name
const selectorUserInfo = formValueSelector('userInfo'); // <-- same as form name

function mapStateToProps(state, ownProps) {
  return {
    businessAddress: selectorBusinessInfo(state, 'address'),
    addressType: selectorUserInfo(state, 'addressType'),
    file: selectorUserInfo(state, 'userFile')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  };
}

export default reduxForm({
  form: 'userInfo'
})(connect(mapStateToProps, mapDispatchToProps)(UserInfo));
