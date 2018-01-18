/**
 * Created by emols on 10/6/2017.
 */
import initialState from "../store/initialState";

export default function vendorReducer(state = initialState.party, action) {
  switch (action.type) {
    case 'LOAD_PARTY':
      return action.party;

    default:
      return state;
  }
}
