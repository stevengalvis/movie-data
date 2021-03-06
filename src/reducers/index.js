import { combineReducers } from "redux";
import cardReducer from "./card";
import favorites from "./favorites";
import authReducer from "./auth";
import { reducer as formReducer } from "redux-form";
import searchReducer from "./search";
import watchlistReducer from "./watchlist";

const rootReducer = combineReducers({
  card: cardReducer,
  favorites,
  form: formReducer,
  auth: authReducer,
  search: searchReducer,
  watchlist: watchlistReducer
});

export default rootReducer;
