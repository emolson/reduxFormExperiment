/**
 * Created by emols on 12/5/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {bindActionCreators} from "redux";

import {required, alphaNumeric} from "../../../validation/validation";
import Address from "../../common/Address";
import InputField from "../../renderFields/InputField";

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
      <label>{label}: </label>
      <input {...input} placeholder={label} type={type}/>
      {touched &&
      ((error && <span>{error}</span>) ||
      (warning && <span>{warning}</span>))}
    </div>
);

class BusinessInfo extends Component {
  constructor(props) {
    super(props);
  }

  // click(event) {
  //   event.preventDefault();
  //   console.log(this.props.change);
  //   this.props.change('username', "Ethan");
  // }

  render() {
    const {handleSubmit, pristine, reset, submitting, change} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <InputField
          name="businessName"
          type="text"
          label="Business Name"
          validate={[required]}
          warn={alphaNumeric}
        />

        <Address/>

        <div className="container">
          <div className="row">
            <button className="col-xs-4" type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
            <button className="col-xs-4" type="submit" disabled={submitting}>
              Next Page
            </button>
          </div>
        </div>

      </form>
    );
  }
}

const selector = formValueSelector('businessInfo'); // <-- same as form name

function mapStateToProps(state, ownProps) {
  return {
    username: selector(state, 'username')
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
