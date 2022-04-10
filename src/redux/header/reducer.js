import CONSTANTS from "./constants";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.SET_HEADER_VALUES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
