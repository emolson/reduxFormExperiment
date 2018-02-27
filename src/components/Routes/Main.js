/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import CreateParty from '../VendorManipulation/create/CreateParty';
import SimpleForm from '../common/SimpleForm';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route path='/createParty/:page' component={CreateParty}/>
      <Route path='/simple' component={SimpleForm}/>
    </Switch>
  </main>
);

export default Main;
