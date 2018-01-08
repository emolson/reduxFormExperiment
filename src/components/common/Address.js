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
          label="Address Line 1"
          validate={[required]}
        />
        <InputField
          name="city"
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
          label="Zip"
          validate={[required, numeric]}
        />
        <DropDownField
          name="country"
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

export default Address;
