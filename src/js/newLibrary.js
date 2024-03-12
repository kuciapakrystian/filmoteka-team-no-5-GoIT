/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";*/

/* firebase config */

const firebaseConfig = {
  apiKey: 'AIzaSyBNLEzuH7_NWgUdc10PpBQJ3yYnW8--YcU',
  authDomain: 'filmoteka-7c3af.firebaseapp.com',
  projectId: 'filmoteka-7c3af',
  storageBucket: 'filmoteka-7c3af.appspot.com',
  messagingSenderId: '682408166658',
  appId: '1:682408166658:web:2474c42901069264acee1b',
  measurementId: 'G-1VKNJ7ZXFT',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)*/

/*dostajemy się do kontenera maina, kontenera karty filmy, oraz przycisków add to watched,  watched, add to queue i queue */

const movieGallery = document.querySelector('.gallery-container');
const movieCard = document.querySelector('.movie-container');
const buttonAddToWatched = document.querySelector('.add-to-watched');
const modalMovieCard = document.querySelector('.modal-movie-card');
const watchedButton = document.querySelector('.watched-button');
const buttonAddToQueue = document.querySelector('.add-to-queue');
const queueButton = document.querySelector('.queue-button');

/* dodajemy addEventListenersy na przyciski add to watched i add to queue, dzięki którym dane zostaną dodane do firebase*/

buttonAddToWatched.addEventListener('click', data => {
  db.collection('movies').set({
    image: data.poster_path,
    alt: data.outerview,
    name: data.title,
    tags: data.title,
    year: data.release_data,
    grade: data.vote_average,
  });
});

buttonAddToQueue.addEventListener('click', data => {
  db.collection('movies').set({
    image: data.poster_path,
    alt: data.outerview,
    name: data.title,
    tags: data.title,
    year: data.release_data,
    grade: data.vote_average,
  });
});

/* dodajemy addEventListenersy na przyciski watched i queue aby wyświetlić karty filmów na stronie z danych zapisanych w firebase, które dodalismy za poocą add to queue i add to watched */

watchedButton.addEventListener('click', () => {
  const moviesTemplate = db
    .collection('movies')
    .get()
    .map(({ image, alt, name, tags, year, grade }) => {
      `<div class"card-library-template>
            <a class="cards-library-poster">
                <img src="${image}" alt="${alt}" loading="lazy" />
            </a>
            <div class="cards-library-information">
                <h2 class="cards-library-title">${name}</h2>
                <div class="cards-library-container-info">
                    <p class="cards-library-tags-year">${tags} | ${year}</p>
                    <p class="cards-library-grade">${grade}</p>
                </div>
        </div>`;
    })
    .join('');
  movieCard.insertAdjacentHTML('afterstart', moviesTemplate);
});

queueButton.addEventListener('click', () => {
  const moviesTemplate = db
    .collection('movies')
    .get()
    .map(({ image, alt, name, tags, year, grade }) => {
      `<div class"card-library-template>
              <a class="cards-library-poster">
                  <img src="${image}" alt="${alt}" loading="lazy" />
              </a>
              <div class="cards-library-information">
                  <h2 class="cards-library-title">${name}</h2>
                  <div class="cards-library-container-info">
                      <p class="cards-library-tags-year">${tags} | ${year}</p>
                      <p class="cards-library-grade">${grade}</p>
                  </div>
          </div>`;
    })
    .join('');
  movieCard.insertAdjacentHTML('afterstart', moviesTemplate);
});
