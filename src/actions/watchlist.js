import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const RENDER_WATCH_LIST = "RENDER_WATCH_LIST";
export const renderWatchlist = watchlist => ({
  type: RENDER_WATCH_LIST,
  watchlist
});

export const RENDER_WATCH_LIST_ERROR = "RENDER_WATCH_LIST_ERROR";
export const renderWatchlistError = error => ({
  type: RENDER_WATCH_LIST_ERROR,
  error
});

export const UPDATE_WATCHLIST = "UPDATE_WATCHLIST";
export const updateWatchlist = () => ({
  type: UPDATE_WATCHLIST
});

export const UPDATE_WATCHLIST_ERROR = "UPDATE_WATCHLIST_ERROR";
export const updateWatchlistError = error => ({
  type: UPDATE_WATCHLIST_ERROR
});

export const getWatchlist = () => dispatch => {
  const token = localStorage.getItem("authToken");
  return fetch(`${API_BASE_URL}/users/watchlist`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      return dispatch(renderWatchlist(data.watchList));
    })
    .catch(err => {
      const { message } = err;
      return dispatch(renderWatchlistError(message));
    });
};

export const deleteMovie = movie => dispatch => {
  const token = localStorage.getItem("authToken");
  return fetch(`${API_BASE_URL}/users/watchlist`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(movie)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      return dispatch(updateWatchlist());
    })
    .catch(err => {
      const { message } = err;
      return dispatch(updateWatchlistError(message));
    });
};
