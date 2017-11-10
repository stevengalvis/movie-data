import { getMovie } from "../movies";

export const RENDER_CARD = "RENDER_CARD";
export const renderCard = movie => ({
  type: RENDER_CARD,
  movie
});

export const RENDER_CARD_ERORR = "RENDER_CARD_ERORR";
export const renderCardError = error => ({
  type: RENDER_CARD_ERORR,
  error
});

export const updateCard = movieId => dispatch => {
  getMovie(movieId).then(movie => dispatch(renderCard(movie)));
};
