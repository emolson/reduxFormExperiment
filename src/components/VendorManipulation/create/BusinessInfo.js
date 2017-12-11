/**
 * Created by emols on 12/5/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';

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

let BusinessInfo = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required]}
        warn={alphaNumeric}
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
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
BusinessInfo = reduxForm({
  form: 'businessInfo' // a unique identifier for this form
})(BusinessInfo);

// Decorate with connect to read form values
const selector = formValueSelector('businessInfo'); // <-- same as form name
BusinessInfo = connect(state => {
  // can select values individually
  const username = selector(state, 'username');
  return {
    username
  }
})(BusinessInfo);

const transformVendorToBusinessInfo = vendor => {
  if(vendor) {
    return {
      address: {
        address1: vendor.baddress1,
        city: vendor.bcity
      }
    }
  } else {
    return {}
  }
}

// You have to connect() to any reducers that you wish to connect to yourself
BusinessInfo = connect(
  state => ({
    initialValues: transformVendorToBusinessInfo(state.vendor) // pull initial values from user reducer
  })
  //,
  // { load: loadAccount } // bind account loading action creator
)(BusinessInfo);

export default BusinessInfo
