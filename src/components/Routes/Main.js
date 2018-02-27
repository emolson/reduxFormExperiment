/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import CreateParty from '../manipulateParty/CreateParty';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route path='/createParty/:page' component={CreateParty}/>
    </Switch>
  </main>
);

export default Main;
