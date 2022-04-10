import CONSTANTS from "./constants";

export const setHeaderValues = (payload) => (dispatch) =>
  dispatch({ type: CONSTANTS.SET_HEADER_VALUES, payload });
