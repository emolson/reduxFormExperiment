/**
 * Created by emols on 5/25/2017.
 */
/**
 * Created by emols on 5/25/2017.
 */
//Handles App templates used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Main from './Routes/Main';

export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
