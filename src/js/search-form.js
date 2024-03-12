document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".header-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const inputSearch = document.getElementById("inputSearch").value;
        searchMovies(inputSearch);
    });

    // Nasłuchiwanie kliknięcia na linkach
    const links = document.querySelectorAll(".logo-header, .link-for-pages");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            clearSearchAndReloadMovies();
            window.location.reload(); // Przeładowanie strony po kliknięciu w link
        });
    });
});

function loadDefaultMovies() {
    const apiKey = "4055b791708338774332fbeb5d716522";
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error("Error while fetching default movies:", error));
}

function searchMovies(query) {
    const apiKey = "4055b791708338774332fbeb5d716522";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error("Error while searching for movies:", error));
}

function displayResults(data) {
    const list = document.querySelector(".cards-home-list");
    list.innerHTML = "";

    if (data.results.length === 0) {
        list.innerHTML = "<li>No movies found. Try another search.</li>";
        return;
    }

    data.results.forEach(movie => {
        const movieItem = document.createElement("li");
        movieItem.classList.add("card-home-item");
        movieItem.innerHTML = `
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="card-img">
                <div class="card-info">
                    <h3 class="card-title">${movie.title}</h3>
                    <p class="card-description">${movie.overview}</p>
                </div>
            </div>
        `;
        list.appendChild(movieItem);
    });
}

function clearSearchAndReloadMovies() {
    // Czyszczenie pola wyszukiwania
    document.getElementById("inputSearch").value = "";

    // Usuwanie wyników wyszukiwania
    const list = document.querySelector(".cards-home-list");
    list.innerHTML = "";
}