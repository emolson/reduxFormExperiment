/**
 * Created by emols on 12/5/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, FormSection, formValueSelector} from 'redux-form';

import {required, alphaNumeric} from "../../../validation/validation";
import Address from "../../common/Address";

const renderField = ({
  input,
  label,
  type,
  meta: {touched, error, warning}
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched &&
      ((error && <span>{error}</span>) ||
      (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let TaxInfoForm = props => {
  const {handleSubmit, pristine, reset, submitting, username} = props
  return (
    <form onSubmit={handleSubmit}>

      <Address/>
      <div>
        I'm in Tax info, but check out this username: {username}
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
TaxInfoForm = reduxForm({
  form: 'taxInfoForm' // a unique identifier for this form
})(TaxInfoForm);

// Decorate with connect to read form values
const selector = formValueSelector('businessInfo'); // <-- same as form name
TaxInfoForm = connect(state => {
  // can select values individually
  const username = selector(state, 'username');
  return {
    username
  }
})(TaxInfoForm)

// You have to connect() to any reducers that you wish to connect to yourself
TaxInfoForm = connect(
  state => ({
    initialValues: {address1: 23} // pull initial values from user reducer
  })
  //,
  // { load: loadAccount } // bind account loading action creator
)(TaxInfoForm);

export default TaxInfoForm
