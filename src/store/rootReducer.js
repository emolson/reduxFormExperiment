/**
 * Created by emols on 10/6/2017.
 */
import {combineReducers} from "redux";
import party from "../reducers/partyReducer";
import { reducer as formReducer } from 'redux-form';

//name of the reducer maps to a var/state in the store
const rootReducer = combineReducers({
  // ...your other reducers here
  party,
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
});

export default rootReducer;
