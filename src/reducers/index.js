import { combineReducers } from "redux";
import movie from "./movie";
import favorites from "./favorites";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  movie,
  favorites,
  form: formReducer
});

export default rootReducer;
