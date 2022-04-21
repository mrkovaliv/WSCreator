import CONSTANTS from "./constants";
import { SET_DEFAULT_CONTENT } from "../constants";
import { DEFAULT_CONTENT } from "../content";

const INITIAL_STATE = {
  showHeader: true,
  showServices: true,
  showFooter: true,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.SET_SETINGS_VALUES:
      return { ...state, ...action.payload };
    case SET_DEFAULT_CONTENT:
      return DEFAULT_CONTENT.settings;

    default:
      return state;
  }
};

export default reducer;
