import '../sass/components/_modal-card.scss';
import { moviesContainer } from './cards-home';
import { getMovieDetails } from './fetch';
import { saveToWatched } from './localStorage';
import { saveToQue } from './localStorage';
import { movieID } from './fetch';
import { libraryUpdate, pageState } from './newLibrary';
import debounce from 'lodash.debounce';

const modal = document.querySelector('.modal-card');
const btnClose = modal.querySelector('.btn--close');
let variablesCSS = document.querySelector(':root');
const watchedMoviesContainer = document.querySelector(
  '.cards-watched-container'
);

export const createModalCard = el => {
  const modalImage = document.createElement('img');
  modalImage.classList.add('modal-card__img');
  modalImage.setAttribute(
    'src',
    `https://image.tmdb.org/t/p/w185${el.poster_path}`
  );
  modalImage.setAttribute(
    'srcset',
    `https://image.tmdb.org/t/p/w300${el.poster_path} 300w,
    https://image.tmdb.org/t/p/w500${el.poster_path} 500w`
  );
  modalImage.setAttribute(
    'sizes',
    '(min-width: 1024px) 500px, (min-width: 768px) 300px, 100vw'
  );
  // modalImage.setAttribute(
  //   'onerror',
  //   "src = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'"
  // );
  modalImage.setAttribute('alt', `${el.title}`);

  const modalHeader = document.createElement('h2');
  modalHeader.classList.add('modal-card__title');
  modalHeader.textContent = el.title;

  //create container for lists
  const listsContainer = document.createElement('div');
  listsContainer.classList.add('modal-card__list-container');

  //create movie list categories for modal
  const movieCategoriesList = document.createElement('ul');
  movieCategoriesList.classList.add('modal-card__list');

  const movieInfoTypes = [
    'Vote/Votes',
    'Popularity',
    'Original Title',
    'Genre',
  ];

  movieInfoTypes.map(content => {
    let movieInfoItem = document.createElement('li');
    movieInfoItem.classList.add('modal-card__list-item');
    movieInfoItem.textContent = content;
    movieCategoriesList.appendChild(movieInfoItem);
  });

  let genresDesc = el.genres.map(el => el.name);

  let movieInfoTypesData = [
    `${el.vote_count}`,
    `${el.popularity.toFixed(0)}`,
    `${el.original_title}`,
    `${genresDesc.join(', ')}`,
  ];

  //create list with values for movie categories list
  const movieCategoriesValues = document.createElement('ul');
  movieCategoriesValues.classList.add('modal-card__list');

  movieInfoTypesData.map((content, index) => {
    let movieInfoValue = document.createElement('li');
    movieInfoValue.classList.add('modal-card__list-details');
    movieInfoValue.textContent = content;

    // adding details to Vote/Votes section
    if (index === 0) {
      movieInfoValue.textContent = '';

      let movieInfoDetails = document.createElement('span');
      movieInfoDetails.classList.add(
        'modal-card__list-details',
        'modal-card__list-details--avg-color'
      );
      movieInfoDetails.textContent = `${el.vote_average.toFixed(1)}`;

      let movieInfoSkewLine = document.createElement('span');
      movieInfoSkewLine.classList.add('modal-card__skew-line');
      movieInfoSkewLine.textContent = '/';

      let movieInfoContent = document.createElement('span');
      movieInfoContent.classList.add('modal-card__votes');
      movieInfoContent.textContent = content;

      movieInfoValue.append(movieInfoDetails);
      movieInfoValue.append(movieInfoSkewLine);
      movieInfoValue.append(movieInfoContent);
    }

    movieCategoriesValues.appendChild(movieInfoValue);
  });

  listsContainer;

  const modalMovieAbout = document.createElement('h3');
  modalMovieAbout.classList.add('modal-card__movie-about');
  modalMovieAbout.textContent = 'ABOUT';

  const modalMovieDesc = document.createElement('p');
  modalMovieDesc.classList.add('modal-card__movie-desc');
  modalMovieDesc.textContent = el.overview;

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('modal-card__buttons');

  const modalBtnAddWatch = document.createElement('button');
  modalBtnAddWatch.classList.add('btn', 'btn__addToWatched');
  modalBtnAddWatch.textContent = 'ADD TO WATCHED';

  const modalBtnAddQue = document.createElement('button');
  modalBtnAddQue.classList.add('btn', 'btn__addToQue');
  modalBtnAddQue.textContent = 'ADD TO QUE';

  const movieDescWrapper = document.createElement('div');
  movieDescWrapper.classList.add('modal-card__movie-data');

  modal.append(btnClose, modalImage, movieDescWrapper);

  movieDescWrapper.append(
    modalHeader,
    listsContainer,
    modalMovieAbout,
    modalMovieDesc,
    btnWrapper
  );

  listsContainer.append(movieCategoriesList, movieCategoriesValues);

  btnWrapper.append(modalBtnAddWatch, modalBtnAddQue);

  //Adding EvenListener to watched and Que buttons
  //Adding logic for their textContent
  let watched = [];
  const watchedData = JSON.parse(localStorage.getItem('watched'));

  if (watchedData != null) {
    watched.push(...watchedData);
  }

  if (watched.includes(movieID)) {
    modalBtnAddWatch.textContent = 'REMOVE FROM WATCHED';
    modalBtnAddQue.textContent = 'ADD TO QUE';
  }

  modalBtnAddWatch.addEventListener('click', saveToWatched);

  let que = [];
  const queData = JSON.parse(localStorage.getItem('que'));

  if (queData != null) {
    que.push(...queData);
  }

  if (que.includes(movieID)) {
    modalBtnAddQue.textContent = 'REMOVE FROM QUE';
  }

  modalBtnAddQue.addEventListener('click', saveToQue);

  //Listeners to dynamic library
  if (pageState === 'library-watched') {
    modalBtnAddWatch.addEventListener('click', libraryUpdate)
  }

  if (pageState === 'library-que') {
  modalBtnAddQue.addEventListener('click', libraryUpdate)
  
   if (modalBtnAddWatch.textContent === 'ADD TO WATCHED') {
    modalBtnAddWatch.addEventListener('click', libraryUpdate)
  }
  }
};

const displayMovieInfo = async e => {
  const movie_id = e.target.parentElement.getAttribute('id');

  getMovieDetails(movie_id).then(el => {
    createModalCard(el);
    modal.parentElement.classList.toggle('is-hidden');
    setGrowElement();

    //check if image is loaded
    let imgsrc = modal.children[2];

    if (imgsrc.getAttribute('src').endsWith('null')) {
      imgsrc.removeAttribute('srcset');
      imgsrc.setAttribute(
        'src',
        'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
      );
      modal.children[0].classList.add('is-hidden');
    }
  });
};

export function hideModal() {
  modal.parentElement.classList.add('is-hidden');

  //select elements to be removed
  let imgChild = modal.children[2];
  let descChild = modal.children[3];

  modal.removeChild(imgChild);
  modal.removeChild(descChild);
}

function setGrowElement() {
  //var with list of movie details
  const listDetails = document.getElementsByClassName('modal-card__list');
  //var for movie title and genres
  let listTitleHeight = listDetails[1].children[2].offsetHeight;
  let listGenresHeight = listDetails[1].children[3].offsetHeight;

  //line height 16 for division
  if (listTitleHeight > 16 && listGenresHeight !== 16) {
    variablesCSS.style.setProperty(
      '--grow_title',
      Math.floor(listTitleHeight / 16)
    );
    variablesCSS.style.setProperty(
      '--grow_genres',
      Math.floor(listGenresHeight / 16)
    );
  } else {
    variablesCSS.style.setProperty('--grow_genres', 0);
  }
}

//steering setting of flex-grow property for styling
window.addEventListener(
  'resize',
  debounce(() => {
    //start if modal content exist
    if (modal.childNodes.length > 5) {
      setGrowElement();
    }
  }, 100)
);

moviesContainer.addEventListener('click', displayMovieInfo);
watchedMoviesContainer.addEventListener('click', displayMovieInfo);

btnClose.addEventListener('click', hideModal);

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideModal();
  }
});

modal.parentElement.addEventListener('click', el => {
  if (el.target.classList.contains('modal-container')) {
    hideModal();
  }
});