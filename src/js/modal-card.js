document.addEventListener("DOMContentLoaded", function() {
        const movieCards = document.querySelectorAll('.693134 ');

        movieCards.forEach(card => {
            card.addEventListener('click', function() {
                const movieId = card.dataset.movieId;

                fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4055b791708338774332fbeb5d716522`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data); 
                        
                        document.querySelector('.movie-poster').src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
                        document.querySelector('.vote-count').textContent = data.vote_count; // Poprawienie klasy .votes na .vote-count
                        document.querySelector('.vote-average').textContent = data.vote_average; // Dodanie klasy .vote-average
                        document.querySelector('.popularity').textContent = data.popularity;
                        document.querySelector('.original-title').textContent = data.original_title;
                        document.querySelector('.genre').textContent = data.genres.map(genre => genre.name).join(', ');
                        document.querySelector('.about').textContent = data.overview;

                        document.querySelector('.modal').style.display = 'block';
                        
                        document.addEventListener('keydown', function(event) {
                            if (event.key === 'Escape') {
                                closeMovieModal();
                            }
                        });

                        document.querySelector('.modal-overlay').addEventListener('click', function(event) {
                            if (event.target === document.querySelector('.modal-overlay')) {
                                closeMovieModal();
                            }
                        });
                    })
                    .catch(error => console.error('Error fetching data:', error));
            });
        });
    });

    function closeMovieModal() {
        document.querySelector('.modal').style.display = 'none';
    }
