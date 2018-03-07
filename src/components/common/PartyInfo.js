/**
 * Created by emols on 12/5/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {reduxForm, formValueSelector} from 'redux-form';

import {required} from "../../validation/validation";
import ButtonSet from "../common/ButtonSet";
import Address from "./Address";
import DropDownField from "../renderFields/DropDownField";


class PartyInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleSubmit, pristine, reset, submitting, change} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h1>Party Information:</h1>
        <DropDownField
          name="partyType"
          options={['Birthday', 'Sports', 'Rager']}
          label="Type of Party"
          validate={[required]}
        />

        <Address/>

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

const selector = formValueSelector('partyInfo'); // <-- same as form name

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
  form: 'partyInfo', // a unique identifier for this form
  destroyOnUnmount: false
})(connect(mapStateToProps, mapDispatchToProps)(PartyInfo));
