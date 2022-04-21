import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import headerReducer from "../redux/header/reducer";
import settingsReducer from "../redux/settings/reducer";
import mainReducer from "../redux/main/reducer";
import aboutReducer from "../redux/about/reducer";
import footerReducer from "../redux/footer/reducer";
import teamReducer from "../redux/team/reducer";


const rootReducer = combineReducers({
  header: headerReducer,
  settings: settingsReducer,
  main: mainReducer,
  about: aboutReducer,
  footer: footerReducer,
  team: teamReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
