import {
  getWatchedMovies,
  getQueueMovies,
  renderStorageMovies,
} from './library';
import {
  refreshRendering,
  refreshRenderingPagination,
} from './refreshrendering';
import { watchedMoviesContainer, templCard } from './library';
import { generatePageButtons } from './newpagin';
//import { selectedPage, totalPages } from './fetch';

const libBtnWatched = document.querySelector('.js-btn-watched');
const libBtnQueue = document.querySelector('.js-btn-queue');

const paginationContainer = document.getElementById('pagination-numbers');

//modalCard.addEventListener('click', libraryUpdate);

export function libraryMovies(event) {
  // event.preventDefault();
  paginationContainer.classList.add('hidden');
  preloader.classList.remove('hidden');
  refreshRendering();
  refreshRenderingPagination();
  setTimeout(() => {
    if (getWatchedMovies[0]) {
      renderStorageMovies(getWatchedMovies[0]);
    }
    if (getQueueMovies[0]) {
      renderStorageMovies(getQueueMovies[0]);
    }
    preloader.classList.add('hidden');
    libBtnWatched.classList.remove('btn-lib-js-active');
    libBtnQueue.classList.remove('btn-lib-js-active');
    paginationContainer.classList.remove('hidden');
  }, 500);
}

export function reviewMovies(event) {
  // event.preventDefault();

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (event.target.classList.contains('js-btn-watched')) {
    libBtnWatched.classList.add('btn-lib-js-active');
    libBtnQueue.classList.remove('btn-lib-js-active');
    paginationContainer.classList.add('hidden');
    preloader.classList.remove('hidden');
    refreshRendering();

    refreshRenderingPagination();

    generatePageButtons(1, 1);
    setTimeout(() => {
      if (getWatchedMovies[0]) {
        renderStorageMovies(getWatchedMovies[0]);
      } else {
        watchedMoviesContainer.appendChild(templCard);
      }

      preloader.classList.add('hidden');
      paginationContainer.classList.remove('hidden');
    }, 500);
  }

  if (event.target.classList.contains('js-btn-queue')) {
    libBtnQueue.classList.add('btn-lib-js-active');
    libBtnWatched.classList.remove('btn-lib-js-active');
    paginationContainer.classList.add('hidden');
    preloader.classList.remove('hidden');
    refreshRendering();

    

    refreshRenderingPagination();
    generatePageButtons(1, 1);

    setTimeout(() => {
      if (getQueueMovies[0]) {
        renderStorageMovies(getQueueMovies[0]);
      } else {
        watchedMoviesContainer.appendChild(templCard);
      }

      preloader.classList.add('hidden');
      paginationContainer.classList.remove('hidden');
    }, 500);
  }
}

function libraryUpdate(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (event.target.classList.contains('btn__addToWatched')) {
    renderStorageMovies(getWatchedMovies[0]);
  }

  if (event.target.classList.contains('btn__addToQue')) {
    renderStorageMovies(getQueueMovies[0]);
  }
}