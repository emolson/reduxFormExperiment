/**
 * Created by emols on 10/6/2017.
 */
import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';

//name of the reducer maps to a var/state in the store
const rootReducer = combineReducers({
  // ... put own reducers here

  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  //... still dont quite understand how this works
  form: formReducer
});

export default rootReducer;
