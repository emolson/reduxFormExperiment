/**
 * Created by emols on 12/8/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, FormSection, formValueSelector} from 'redux-form';

import {required, alphaNumeric} from "../../validation/validation";


class AribaInformation extends React.Component {
  render() {
    return (
    <div>
      <Field name="givenName" component="input" type="text"/>
      <Field name="middleName" component="input" type="text"/>
      <Field name="surname" component="input" type="text"/>
    </div>
    )
  }
}

export default AribaInformation;
