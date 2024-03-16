import '../sass/components/_header-home.scss';
import { loadMovies, moviesContainer } from './cards-home';
import { getGenres, getMovieDetails } from './fetch';
import { libraryMovies, reviewMovies } from './library-render';
import { generatePageButtons } from './newpagin';
import { refreshRendering, refreshRenderingPagination } from './refreshrendering';
import { clearInput } from './search-form';
import { preloader } from './spinner';
const watchedMoviesContainer = document.querySelector('.cards-watched-container');
const headerHome = document.querySelector('.header-home');
const headerLibrary = document.querySelector('.header-library');
const myLibrary = headerLibrary.querySelector('.js-library');
const cardsLibraryWatched = document.querySelector('.cards-watched-container');
const libraryEmptyTempl = document.querySelector('.library-empty');
const templ = libraryEmptyTempl.content.cloneNode(true);
const templCard = templ.querySelector('.content-library__card');
const LOCALSTORAGE_WATCHED = 'watched';
const LOCALSTORAGE_QUE = 'que';
const paginationContainer = document.getElementById('pagination-numbers');
const watched = localStorage.getItem(LOCALSTORAGE_WATCHED) || '';
const queue = localStorage.getItem(LOCALSTORAGE_QUE) || '';
let watchedParsed = [];
if (watched) {
  watchedParsed = JSON.parse(watched);
}
let queueParsed = [];
if (queue) {
  queueParsed = JSON.parse(queue);
}
export { headerLibrary, queueParsed, templCard, watchedMoviesContainer, watchedParsed };
headerLibrary.addEventListener('click', libraryHidden);
headerHome.addEventListener('click', homeHidden);
export function homeHidden(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  if (event.target.classList.contains('js-library')) {
    preloader.classList.remove('hidden');
    paginationContainer.classList.add('hidden');
    refreshRendering();
    refreshRenderingPagination();
    generatePageButtons(1, 1);
    headerHome.classList.add('visually-hidden');
    moviesContainer.classList.add('visually-hidden');
    headerLibrary.classList.remove('visually-hidden');
    cardsLibraryWatched.classList.remove('visually-hidden');
    setTimeout(() => {
      if (getWatchedMovies[0]) {
        renderStorageMovies(getWatchedMovies[0]);
      }
      if (getQueueMovies[0]) {
        renderStorageMovies(getQueueMovies[0]);
      }
      if (getQueueMovies.length === 0 && getWatchedMovies.length === 0) {
        watchedMoviesContainer.appendChild(templCard);
      }
      preloader.classList.add('hidden');
      paginationContainer.classList.remove('hidden');
    }, 500);
  }
}
function libraryHidden(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-home-page')) {
    preloader.classList.remove('hidden');
    paginationContainer.classList.add('hidden');
    refreshRendering();
    refreshRenderingPagination();
    clearInput();
    setTimeout(() => {
      loadMovies();
      preloader.classList.add('hidden');
    }, 500);
    headerHome.classList.remove('visually-hidden');
    moviesContainer.classList.remove('visually-hidden');
    paginationContainer.classList.remove('hidden');
    headerLibrary.classList.add('visually-hidden');
    cardsLibraryWatched.classList.add('visually-hidden');
  }
}
let watchedMovies = [];
export const getWatchedMovies =
  watchedParsed.length === 0
    ? []
    : watchedParsed.map(el => {
        getMovieDetails(el)
          .then(result => {
            const storageMovies = result;
            watchedMovies.push(storageMovies);
          })
          .catch(function (error) {
            // handle error
          });
        return watchedMovies;
      });
let queueMovies = [];
export const getQueueMovies =
  queueParsed.length === 0
    ? []
    : queueParsed.map(el => {
        getMovieDetails(el)
          .then(result => {
            const storageMovies = result;
            queueMovies.push(storageMovies);
          })
          .catch(function (error) {
            // handle error
          });
        return queueMovies;
      });
export function renderStorageMovies(response) {
  refreshRendering();
  //get genres for movies
  if (response !== undefined) {
    getGenres().then(el => {
      const genres = el;
      generateCards(response);
    });
  }
  //create set of movie cards
  function generateCards(data) {
    data.map(el => {
      createMovieCard(el);
    });
  }
  //create single movie card element
  function createMovieCard(singleMovie) {
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
      "this.src = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'",
    );
    moviePicture.setAttribute('loading', 'lazy');
    let movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie-card__title');
    movieTitle.textContent = singleMovie.title;
    let movieInfo = document.createElement('p');
    movieInfo.classList.add('movie-card__info');
    movieInfo.textContent = `${singleMovie.release_date.slice(0, 4)}`;
    watchedMoviesContainer.appendChild(movieWrapper);
    movieWrapper.append(moviePicture, movieTitle, movieInfo);
  }
}
myLibrary.addEventListener('click', libraryMovies);
headerLibrary.addEventListener('click', reviewMovies);
// window.addEventListener('load',reviewMovies)
