import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import headerReducer from "../redux/header/reducer";
import settingsReducer from "../redux/settings/reducer";
import mainReducer from "../redux/main/reducer";
import aboutReducer from "../redux/about/reducer";
import footerReducer from "../redux/footer/reducer";
import teamReducer from "../redux/team/reducer";
import serviceReducer from "../redux/service/reducer";
import reviewReducer from "../redux/review/reducer";
import brandReducer from "../redux/brand/reducer";
import workReducer from "../redux/work/reducer";


const rootReducer = combineReducers({
  header: headerReducer,
  settings: settingsReducer,
  main: mainReducer,
  about: aboutReducer,
  footer: footerReducer,
  team: teamReducer,
  service: serviceReducer,
  review: reviewReducer,
  brand: brandReducer,
  work: workReducer
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
