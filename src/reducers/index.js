import { combineReducers } from "redux";
import movie from "./movie";
import favorites from "./favorites";
import authReducer from "./auth";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  movie,
  favorites,
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
