import '../sass/components/_header-library.scss';
import '../sass/components/_header-home.scss';

import { preloader } from './spinner';
import {
  refreshRenderingPagination,
  refreshRendering,
} from './refreshrendering';
import { generatePageButtons } from './newpagin';
import { moviesContainer, loadMovies } from './cards-home';
import { getMovieDetails } from './fetch';
import { clearInput } from './search-form';
import { hideModal } from './modal-card';

const myLibrary = document.querySelector('.js-library');
const paginationContainer = document.getElementById('pagination-numbers');
const headerHome = document.querySelector('.header-home');
const headerLibrary = document.querySelector('.header-library');
const cardsLibraryWatched = document.querySelector('.cards-watched-container');
const watchedMoviesContainer = document.querySelector(
  '.cards-watched-container'
);

export let pageState = 'home'

const watchedButton = document.querySelector('.js-btn-watched')
const queueButton = document.querySelector('.js-btn-queue')

const libraryEmptyTempl = document.querySelector('.library-empty');


//Generate library after clicking "My Library"
function showLibrary(event) {
  const queue = JSON.parse(localStorage.getItem('que')) || '';

/*   if (event.target.nodeName !== 'A') {
    return;
  } */

  if (event.target.classList.contains('js-library')) {
    preloader.classList.remove('hidden');
    paginationContainer.classList.add('hidden');
    refreshRendering();
    refreshRenderingPagination();
    generatePageButtons(1, 1);
    libraryEmptyTempl.classList.add('visually-hidden')

    headerHome.classList.add('visually-hidden');
    moviesContainer.classList.add('visually-hidden');
    headerLibrary.classList.remove('visually-hidden');
    cardsLibraryWatched.classList.remove('visually-hidden');
    watchedButton.classList.remove('btn-lib-js-active');
    queueButton.classList.add('btn-lib-js-active');

    let queueMovies = [];

    const getQueueMovies =
      queue.length === 0
        ? []
        : queue.map(el => {
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


    setTimeout(() => {
/*         let trueOrFalse = 'true'

          for (let i = 0; i < queueMovies.length; i++) {
                const el = queueMovies[i];
                const elId = el.id

                if (queue.includes(elId)) {
                    console.log('mam to')
                }
            }*/
       if (queueMovies) {
        renderStorageMovies(queueMovies);
      } 
      if (queueMovies.length === 0) {

       libraryEmptyTempl.classList.remove('visually-hidden')
       refreshRenderingPagination();
      }
      preloader.classList.add('hidden');
      paginationContainer.classList.remove('hidden');
    }, 500);

    pageState = 'library-que'
  }
}

//Generate cards with saved movies
export function renderStorageMovies(response) {
  refreshRendering();
  //get genres for movies
   if (response !== undefined) {

      generateCards(response)
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
      "this.src = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'"
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

//Generate home after clicking "home"
function showHome(event) {

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
    pageState = 'home'
  }
}

//Generate library-watched after clicking "watched"
function showWatched() {
    const watched = JSON.parse(localStorage.getItem('watched')) || '';

    let watchedMovies = [];

    const getWatchedMovies =
      watched.length === 0
        ? []
        : watched.map(el => {
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

          preloader.classList.remove('hidden');
          paginationContainer.classList.add('hidden');
          refreshRendering();
          refreshRenderingPagination();
          generatePageButtons(1, 1);
          libraryEmptyTempl.classList.add('visually-hidden')
          watchedButton.classList.add('btn-lib-js-active');
          queueButton.classList.remove('btn-lib-js-active');
          
          setTimeout(() => {

             if (watchedMovies) {
              renderStorageMovies(watchedMovies);
            } 
            if (watchedMovies.length === 0) {
                libraryEmptyTempl.classList.remove('visually-hidden')
                refreshRenderingPagination();
            }
            preloader.classList.add('hidden');
            paginationContainer.classList.remove('hidden');
          }, 500);

          pageState = 'library-watched'

}

//Generate library-queue after clicking "queue"
function showQueue() {
    const queue = JSON.parse(localStorage.getItem('que')) || '';

    let queueMovies = [];

    const getQueueMovies =
      queue.length === 0
        ? []
        : queue.map(el => {
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

          preloader.classList.remove('hidden');
          paginationContainer.classList.add('hidden');
          refreshRendering();
          refreshRenderingPagination();
          generatePageButtons(1, 1);
          libraryEmptyTempl.classList.add('visually-hidden')
          watchedButton.classList.remove('btn-lib-js-active');
          queueButton.classList.add('btn-lib-js-active');
      
          setTimeout(() => {
            if (queueMovies) {
              renderStorageMovies(queueMovies);
            }
            if (queueMovies.length === 0) {
                libraryEmptyTempl.classList.remove('visually-hidden')
                refreshRenderingPagination();
            }
            preloader.classList.add('hidden');
            paginationContainer.classList.remove('hidden');
          }, 500);

          pageState = 'library-que'
}

//Generate dynamic library
export function libraryUpdate(event) {
    event.preventDefault();

    if (pageState === 'home') {
        
    }
    if (pageState === 'library-que') {


        showQueue()
        hideModal()

    }
    if (pageState === 'library-watched') {
        console.log('library-watched')
        showWatched()
        hideModal()

    }
}

//EventListeners to buttons
myLibrary.addEventListener('click', showLibrary);

headerLibrary.addEventListener('click', showHome);

watchedButton.addEventListener('click', showWatched);

queueButton.addEventListener('click', showQueue)
