/**
 * Created by emols on 12/5/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {reduxForm, formValueSelector} from 'redux-form';
import {Field} from 'redux-form';

import {required} from "../../validation/validation";
import ButtonSet from "../common/ButtonSet";
import Address from "./Address";
import RadioButton from "../renderFields/RadioButtonField";
import ReduxFormDropzone from "../renderFields/ReduxFormDropzone";

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.handleAddressRadioButtonChange = this.handleAddressRadioButtonChange.bind(this);
  }

  handleAddressRadioButtonChange(event) {
    event.target.value == "Party Address" && this.props.change('address', this.props.businessAddress);
    event.target.value == "User Address" && this.props.change('address', {});
  }

  render() {
    const {handleSubmit, pristine, reset, submitting, businessAddress, addressType} = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <h1>UserInfo:</h1>
        <RadioButton
          validate={[required]}
          name="addressType"
          label=" "
          valueList={["Party Address", "User Address"]}
          onChange={this.handleAddressRadioButtonChange}/>

        <Address/>

        <Field name="userFile" component={ReduxFormDropzone}></Field>
        {this.props.file && <img src={this.props.file[0].preview}/>}

        <ButtonSet
          pristine={pristine}
          reset={reset}
          submit="Next Page"
          clear="Clear Values"
          submitting={submitting}/>
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
  form: 'userInfo',
  destroyOnUnmount: false
})(connect(mapStateToProps, mapDispatchToProps)(UserInfo));
