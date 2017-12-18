/**
 * Created by emols on 12/5/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {bindActionCreators} from "redux";

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

class BusinessInfo extends Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click(event) {
    event.preventDefault();
    console.log(this.props.change);
    this.props.change('username', "Ethan");
  }

  render() {
    const {handleSubmit, pristine, reset, submitting, change} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <button onClick={this.click}></button>
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
}

// Decorate with connect to read form values
const selector = formValueSelector('businessInfo'); // <-- same as form name

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
};


function mapStateToProps(state, ownProps) {
  // What is returned will show up in props, state is the redux state
  return {
    initialValues: transformVendorToBusinessInfo(state.vendor), // pull initial values from user reducer
    username : selector(state, 'username')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  };
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
export default reduxForm({
  form: 'businessInfo' // a unique identifier for this form
})(connect(mapStateToProps, mapDispatchToProps)(BusinessInfo));
