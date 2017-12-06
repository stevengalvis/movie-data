import { RENDER_WATCH_LIST, UPDATE_WATCHLIST, UPDATE_WATCHLIST_ERROR } from "../actions/watchlist";

const initialState = {
  watchlistMovies: undefined,
  movieDeleted: false,
  error: undefined
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_WATCH_LIST:
      return Object.assign({}, state, {
        watchlistMovies: action.watchlist,
        movieDeleted: false
      });

    case UPDATE_WATCHLIST:
      return Object.assign({}, state, {
        movieDeleted: true
      });

    case UPDATE_WATCHLIST_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

export default watchlistReducer;
