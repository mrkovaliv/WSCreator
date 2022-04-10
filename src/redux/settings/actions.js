import CONSTANTS from "./constants";

export const setSettingsValues = (payload) => (dispatch) =>
  dispatch({ type: CONSTANTS.SET_SETINGS_VALUES, payload });
