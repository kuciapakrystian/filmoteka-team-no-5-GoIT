import { fetchGenres, getGenres } from './cards-home';

function loadDefaultMovies() {
  const apiKey = '4055b791708338774332fbeb5d716522';
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error('Error while fetching default movies:', error));
}

function searchMovies(query) {
  const apiKey = '4055b791708338774332fbeb5d716522';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    query,
  )}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      fetchGenres().then(genres => {
        displayResults(data, genres);
        clearSearchInput();
      });
    })
    .catch(error => console.error('Error while searching for movies:', error));
}

function clearSearchInput() {
  document.getElementById('inputSearch').value = '';
}

function displayResults(data, genres) {
  const list = document.querySelector('.cards-home-list');
  list.innerHTML = '';

  if (data.results.length === 0) {
    list.innerHTML = '<li>No movies found. Try another search.</li>';
    return;
  }

  data.results.forEach(movie => {
    const movieItem = document.createElement('li');
    movieItem.classList.add('cards-home-movie_list_item');

    const checkGenres = getGenres(movie.genre_ids, genres);
    const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const releaseDate = movie.release_date.split('-')[0];

    movieItem.innerHTML = `
    <div href="" class='cards-home-movie-link'>
    <div class="cards-home-movie-photo"
      data-poster_path="${movie.poster_path}"
      data-title="${movie.title}"
      data-genre_ids="${checkGenres}"
      data-original_title="${movie.original_title}"
      data-release_date="${movie.release_date}"
    ></div>
      <img class="cards-home-movie-image" src=${poster} alt='Poster ${
      movie.original_title
    }' loading='lazy' />
      <div class='cards-home-movie-info'>
          <p class='cards-home-movie-title'>
            <b>${movie.title.toUpperCase()}</b>
          </p>
          <p class='cards-home-movie-date'>
            <span>${checkGenres} | ${releaseDate}</span>
          </p>
      </div>
      </div>
        `;
    list.appendChild(movieItem);
  });
}

function clearSearchAndReloadMovies() {
  document.getElementById('inputSearch').value = '';
  const list = document.querySelector('.cards-home-list');
  list.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.header-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputSearch = document.getElementById('inputSearch').value;
    searchMovies(inputSearch);
  });

  const links = document.querySelectorAll('.logo-header, .active-page-header');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      clearSearchAndReloadMovies();
      window.location.reload();
    });
  });
});
