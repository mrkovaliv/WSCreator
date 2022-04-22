import CONSTANTS from "./constants";
import { SET_DEFAULT_CONTENT } from "../constants";
import { DEFAULT_CONTENT } from "../content";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.SET_VALUES:
      return { ...state, ...action.payload };
    case SET_DEFAULT_CONTENT:
      return DEFAULT_CONTENT.brand;
    default:
      return state;
  }
};

export default reducer;
