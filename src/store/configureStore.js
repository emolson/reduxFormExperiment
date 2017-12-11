/**
 * Created by emols on 10/6/2017.
 */
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore (
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
