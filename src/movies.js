import { MOVIE_DB_API_KEY } from "./config";
const _search = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${MOVIE_DB_API_KEY}&language=en-US&page=1&include_adult=false`
  )
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => data.results.map(movie => movie.title));
};

export function search(query) {
  return _search(query);
}
