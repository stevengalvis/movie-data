import { RENDER_CARD, RENDER_CARD_ERORR } from "../actions/card";

const initialState = {
  movie: undefined
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
    default:
      return state;
  }
};

export default cardReducer;
