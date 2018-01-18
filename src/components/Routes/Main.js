/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import CreateParty from '../VendorManipulation/create/CreateParty';
import {Switch, Route} from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/createParty' component={CreateParty}/>
    </Switch>
  </main>
);

export default Main;
