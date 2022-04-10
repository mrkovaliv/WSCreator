import CONSTANTS from "./constants";

const INITIAL_STATE = {
  showHeader: true,
  showServices: true,
  showFooter: true,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.SET_SETINGS_VALUES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
