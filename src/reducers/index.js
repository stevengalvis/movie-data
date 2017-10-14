import { combineReducers } from "redux";
import movie from "./movie";
import favorites from "./favorites";

const rootReducer = combineReducers({
  movie,
  favorites
});

export default rootReducer;
