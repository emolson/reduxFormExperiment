/**
 * Created by emols on 10/6/2017.
 */
import initialState from "../store/initialState";

export default function vendorReducer(state = initialState.vendor, action) {
  switch (action.type) {
    case 'LOAD_VENDOR':
      return {vendor: action.vendor};

    default:
      return state;
  }
}
