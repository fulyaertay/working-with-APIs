let containerWatchlist = document.querySelector(".movie-container-watchlist");
let addWatchListBtn = document.querySelector(".add-watchlist-icon");
let addRemoveMovie = document.querySelector(".add-remove-movie");
let isRemove = false;
let moviesFromLocalStorage =""
let myMovies = [];
let isAdded=false

document.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.dataset.movie) {
    renderMyMovies(e.target.dataset.movie);
  }
});

function listMyMovies() {
    moviesFromLocalStorage = JSON.parse(localStorage.getItem("movieId"));
  if (moviesFromLocalStorage) {
    myMovies = moviesFromLocalStorage;
    fetch(
      `https://www.omdbapi.com/?i=${myMovies}&apikey=60c3cf12&type=movie&r=json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        containerWatchlist.innerHTML = "";

        containerWatchlist.innerHTML += `

                <div class="movie-card" id="movie-card-${data.imdbID}">
                    <div class="poster-image">
                        <img src="${data.Poster}" class="movie-image">
                    </div>
            
                    <div class="movie-content">

                        <div class="movie-info">
                            <h3>${data.Title}</h3>
                            <img src="./images/star-icon.png" class="star-icon">
                            <h5>${data.imdbRating}</h5>
                            
                        </div>

                        <div class="movie-info">
                            <h5>${data.Runtime}</h5>
                            <h5 class="genre">${data.Genre}</h5>
                                <div class="toggleMovie">
                                    <img src="./images/remove-icon.png" class="add-remove-movie" id="add-remove-movie-${data.imdbID}" data-movie=${data.imdbID}>
                                
                                </div>
                            <h5 class="add-watchlist">Remove</h5>
                        
                        </div>


                        <div class="movie-info">
                            <p class="movie-text">${data.Plot}</p>
                        </div>
            
                    </div>
                    
                </div>

          
            `;
      });
  } else {
    containerWatchlist.innerHTML = `
        <h2 class="no-my-movie">Your watchlist is looking a little empty...</h2>
        <div class="no-data-container">
            <a href="index.html">
                <img src="./images/my-watclish-icon.png" class="add-my-movie" >
            </a>
            <h3 class="add-my-movie">Let’s add some movies!</h3>
        
        </div>
   
    
              `;
  }
}

function renderMyMovies(movieId) {

    document.getElementById(`movie-card-${movieId}`).style.display="none"
    localStorage.removeItem("movieId");
    listMyMovies()
   
  
  
}
    

//List my movies on watchlist.html
listMyMovies();
