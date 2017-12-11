/**
 * Created by emols on 12/6/2017.
 */
import React from 'react';
import {Field, FormSection} from 'redux-form';

import InputField from '../renderFields/InputField';
import DropDownField from '../renderFields/DropDownField';
import {required, numeric} from "../../validation/validation";


class Address extends FormSection {
  render() {
    return (
      <div>
        <InputField
          name="address1"
          type="text"
          label="Address Line 1"
          validate={[required]}
        />
        <InputField
          name="city"
          type="text"
          label="City"
          validate={[required]}
        />
        <DropDownField
          name="state"
          label="State"
          options={['WI','MI','WA']}
          validate={[required]}
        />
        <InputField
          name="zip"
          type="text"
          label="Zip"
          validate={[required, numeric]}
        />
        <DropDownField
          name="country"
          type="text"
          options={['United States', 'Canada', 'Mexico']}
          label="Country"
          validate={[required]}
        />
      </div>
    );
  }
}

Address.defaultProps = {
  name: "address"
};

// // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
// Address = reduxForm({
//   form: 'address' // a unique identifier for this form
// })(Address);
//
// // You have to connect() to any reducers that you wish to connect to yourself
// Address = connect(
//   state => ({
//     initialValues: state.user // pull initial values from account reducer
//   })
// )(Address);

export default Address;