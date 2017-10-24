import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadAuthToken } from "./local-storage";
import { setAuthToken } from "./actions/auth";

import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// check if authentication token exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;
