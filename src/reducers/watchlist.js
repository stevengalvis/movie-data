import { RENDER_WATCH_LIST } from "../actions/watchlist";

const initialState = {
  watchlistMovies: undefined
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_WATCH_LIST:
      return Object.assign({}, state, {
        watchlistMovies: action.watchlist
      });

    default:
      return state;
  }
};

export default watchlistReducer;
