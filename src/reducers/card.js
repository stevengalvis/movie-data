import { RENDER_CARD, RENDER_CARD_ERORR } from "../actions/card";

const initialState = {
  id: 999861,
  title: "Avengers: Age of Ultron",
  budget: 280000000,
  revenue: 1405403694,
  releaseDate: "2015-04-22",
  runtime: 141,
  tagLine: "A New Age Has Come.",
  overview:
    "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
  popularity: 29.924913,
  voteAverage: 7.3,
  posterImg: "https://image.tmdb.org/t/p/w500/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
  backdropImg: "https://image.tmdb.org/t/p/w500//rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg",
  genres: ["Action", "Adventure", "Science Fiction"],
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
