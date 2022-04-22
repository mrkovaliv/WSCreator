import CONSTANTS from "./constants";

export const setValues = (payload) => (dispatch) =>
  dispatch({ type: CONSTANTS.SET_VALUES, payload });
