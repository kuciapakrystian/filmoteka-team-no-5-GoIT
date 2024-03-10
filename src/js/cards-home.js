const apiKey = 'cc5e154eef1a5f4b837eb970b7b620d1';

const baseUrl = 'https://api.themoviedb.org/3';

let page = 1;

const galleryMovies = document.querySelector('.cards-home-list');





async function fetchPopularMovie(page) {

  const url = new URL(`${baseUrl}/trending/movie/week`);

 async function fetchMovieId(id) {

  const data = await res.json();

  return data;

}


async function fetchGenres() {

  const url = new URL(`${baseUrl}/genre/movie/list`);

  url.searchParams.append('api_key', apiKey);

  const res = await fetch(url);
  const data = await res.json();
  return data.genres;
}

function getGenres(arrayId, genres) {
  const arrayGenres = [];

  for (const value of genres) {
    if (arrayId === 'N/A' || arrayId.length === 0) {
      arrayGenres.push('Other');
      break;
    } else if (arrayId.includes(value.id)) {
      arrayGenres.push(value.name);
    }
  }

  if (arrayGenres.length > 2) {
    arrayGenres.splice(2, arrayGenres.length - 2, 'Other');
  }

  return arrayGenres.join(', ');
}

async function renderPopularMovies(movies) {
  const genres = await fetchGenres();
  return movies
    .map(
      ({
        id,
        poster_path,
        title,
        release_date,
        genre_ids,
        original_title,
        popularity,
        overview,
      } = movies) => {
        const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : NO_POSTER;
        const year = release_date ? release_date.split('-')[0] : 'Unknown';
        const checkGenres = genre_ids ? getGenres(genre_ids, genres) : 'Unknown';
        return `
      <li class='cards-home-movie_list_item' data-id="${id}" >
      <div href="" class='cards-home-movie-link' id=${id}>
      <div class="cards-home-movie-photo"
        data-id="${id}"
        data-poster_path="${poster_path}"
        data-title="${title}"
        data-genre_ids="${checkGenres}"
        data-original_title="${original_title}"
        data-release_date="${release_date}"
      ></div>
        <img class="cards-home-movie-image" src=${poster} alt='Poster ${original_title}' loading='lazy' />
        <div class='cards-home-movie-info'>
            <p class='cards-home-movie-title'>
              <b>${title.toUpperCase()}</b>
            </p>
            <p class='cards-home-movie-date'>
              <span>${checkGenres} | ${year}</span>
            </p>
        </div>
        </div>
      </li>
      `;
      },
    )
    .join('');
}

fetchPopularMovie(page)
  .then(res => {
    const obj = res.results;
    return renderPopularMovies(obj);
  })
  .then(res => {
    galleryMovies.insertAdjacentHTML('beforeend', res);
  })
}