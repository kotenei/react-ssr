import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import homeReducer from "../pages/home/reducer";
import detailReducer from "../pages/detail/reducer";

const isServer = typeof window === "undefined";

const reducers = combineReducers({
  home: homeReducer,
  detail: detailReducer,
});

const configureStore = (initialState = {}) => {
  let defaultState = isServer ? {} : window.context && window.context.state;
  const store = createStore(
    reducers,
    { ...initialState, ...defaultState },
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
