/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import CreateVendor from '../VendorManipulation/create/CreateVendor';
import {Switch, Route} from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/createVendor' component={CreateVendor}/>
    </Switch>
  </main>
);

export default Main;
