fetch('https://api.themoviedb.org/3/movie/550?api_key=4055b791708338774332fbeb5d716522')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        
        // Aktualizacja danych w modalu
        document.querySelector('.movie-poster').src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        document.querySelector('.votes').textContent = data.vote_count;
        document.querySelector('.popularity').textContent = data.popularity;
        document.querySelector('.original-title').textContent = data.original_title;
        document.querySelector('.genre').textContent = data.genres.map(genre => genre.name).join(', ');
        document.querySelector('.about').textContent = data.overview;

        // Pokazanie modala
        document.querySelector('.modal').style.display = 'block';
    })
    .catch(error => console.error('Error fetching data:', error));