import { RENDER_CARD, RENDER_CARD_ERORR, RENDER_SIMILAR_MOVIES } from "../actions/card";

const initialState = {
  movie: undefined,
  similarMovies: undefined,
  isLoading: true,
  error: undefined
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_CARD_ERORR:
      return Object.assign({}, state, {
        error: action.erorr
      });
    case RENDER_CARD:
      return Object.assign({}, state, {
        movie: action.movie
      });
    case RENDER_SIMILAR_MOVIES:
      return Object.assign({}, state, {
        similarMovies: action.movies,
        isLoading: false
      });

    default:
      return state;
  }
};

export default cardReducer;
