"https://www.omdbapi.com/?t=aa&apikey=60c3cf12";

const submitBtn = document.querySelector(".submit-btn");
const searchInput = document.querySelector(".search-input");
let container = document.querySelector(".movie-container");

function renderMovies() {
    if (searchInput.value == "") {
      container.innerHTML = `
          <img src="./images/no-data-initial.png" class="no-data" />

          `;
    }
  submitBtn.addEventListener("click", () => {
    fetch(`https://www.omdbapi.com/?s=${searchInput.value}&apikey=60c3cf12`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Title == undefined) {
           container.innerHTML = `
            <h2 class="no-movie">Movie not found!</h2>
         `;
        }
        console.log(data)
        for (movie of data.Search){
            container.innerHTML += `

          
                <div class="movie-card">
                    <div class="poster-image">
                        <img src="${movie.Poster}" class="movie-image">
                    </div>
            
                    <div class="movie-content">

                        <div class="movie-info">
                            <h3>${movie.Title}</h3>
                            <img src="./images/star-icon.png" class="star-icon">
                            <h5>${movie.imdbRating}</h5>
                            
                        </div>

                        <div class="movie-info">
                            <h5>${movie.Runtime}</h5>
                            <h5 class="genre">${movie.Genre}</h5>
                            <img src="./images/my-watclish-icon.png" class="star-icon">
                            <h5 class="add-watchlist">Watchlist</h5>
                        
                        </div>


                        <div class="movie-info">
                            <p class="movie-text">${movie.Plot}</p>
                        </div>
            
                    </div>
                    
                </div>

          
            `;
      
        }
    })
  
    searchInput.value = "";
  });
}


renderMovies();
