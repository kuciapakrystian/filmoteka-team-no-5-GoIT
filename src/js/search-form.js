import debounce from 'lodash.debounce';
import { getSearchedMovies, getGenres } from './fetch';
import {
  refreshRendering,
  refreshRenderingPagination,
} from './refreshrendering';
import { moviesContainer } from './cards-home';
import { Notify } from 'notiflix';
import { preloader, delayForSpinner } from './spinner';
const DEBOUNCE_DELAY = 3000;
export let searchInput;
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-form input');
export const handleSubmit = function (e) {
  preloader.classList.remove('hidden');
  refreshRendering();
  refreshRenderingPagination();
  e.preventDefault();
  searchInput = input.value.trim();
  setTimeout(() => {
    getSearchedMovies(searchInput);
    preloader.classList.add('hidden');
  }, 500);
  //clearInput();
};
form.addEventListener('submit', handleSubmit);
// ATTENTION!
// cards rendering function should be separate to its own js file
export function renderMovies(response) {
  refreshRendering();
  //get genres for movies
  getGenres().then(el => {
    const genres = el;
    generateCards(response.data.results, genres);
  });
  //create set of movie cards
  function generateCards(data, genres) {
    data.map(movie => {
      const genresDesc = getGenresDescription(movie, genres);
      createMovieCard(movie, genresDesc);
    });
  }
  function getGenresDescription(movie, genres) {
    return genres.reduce((acc, el) => {
      if (movie.genre_ids.includes(el.id)) {
        acc.push(el.name);
      }
      return acc;
    }, []);
  }
  //create single movie card element
  function createMovieCard(singleMovie, genresDesc) {
    let movieWrapper = document.createElement('div');
    movieWrapper.classList.add('movie-card');
    movieWrapper.setAttribute('id', singleMovie.id);
    //create full url for images
    let urlImg = `https://image.tmdb.org/t/p/w300${singleMovie.poster_path}`;
    let moviePicture = document.createElement('img');
    moviePicture.classList.add('movie-card__img');
    moviePicture.setAttribute('src', urlImg);
    moviePicture.setAttribute('alt', singleMovie.title);
    moviePicture.setAttribute(
      'onerror',
      "this.src = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'"
    );
    moviePicture.setAttribute('loading', 'lazy');
    let movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie-card__title');
    movieTitle.textContent = singleMovie.title;
    let movieInfo = document.createElement('p');
    movieInfo.classList.add('movie-card__info');
    if (genresDesc.length > 3) {
      genresDesc = genresDesc.slice(0, 2);
      movieInfo.textContent = `${
        genresDesc.join(', ') + ', Other'
      } | ${singleMovie.release_date.slice(0, 4)}`;
    } else {
      movieInfo.textContent = `${genresDesc.join(
        ', '
      )} | ${singleMovie.release_date.slice(0, 4)}`;
    }
    let movieRating = document.createElement('span');
    movieRating.classList.add('movie-card__rating');
    movieRating.textContent = singleMovie.vote_average.toFixed(1);
    moviesContainer.appendChild(movieWrapper);
    movieWrapper.append(moviePicture, movieTitle, movieInfo, movieRating);
  }
}
export function clearInput() {
  input.value = '';
}