/**
 * Created by emols on 2/26/2017.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
