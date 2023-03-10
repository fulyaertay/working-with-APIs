"https://www.omdbapi.com/?t=aa&apikey=60c3cf12";

const submitBtn = document.querySelector(".submit-btn");
const searchInput = document.querySelector(".search-input");
let container = document.querySelector(".movie-container");
let addWatchListBtn= document.querySelector(".add-watchlist-icon")
let addRemoveMovie = document.querySelector(".add-remove-movie")
let isRemove=false
const moviesFromLocalStorage = JSON.parse( localStorage.getItem("movieId") )

document.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target.dataset.movie) {
  
        renderMyMovies(e.target.dataset.movie);
    }
})

function searchMovies() {
  if (searchInput.value == "") {
    container.innerHTML = `
          <img src="./images/no-data-initial.png" class="no-data" />

          `;
  }
  submitBtn.addEventListener("click", () => {
    fetch(`https://www.omdbapi.com/?t=${searchInput.value}&apikey=60c3cf12&type=movie&r=json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        container.innerHTML =""
        if (data.Response==="False") {
          container.innerHTML = `
            <h2 class="no-movie">Unable to find what you’re looking for. Please try another search.</h2>
         `;
        } else {
         
            container.innerHTML += `


                <div class="movie-card">
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
                                    <img src="./images/my-watclish-icon.png" class="add-remove-movie" id="add-remove-movie-${data.imdbID}" data-movie=${data.imdbID}>
                                
                                </div>
                            <h5 class="add-watchlist">Watchlist</h5>
                        
                        </div>


                        <div class="movie-info">
                            <p class="movie-text">${data.Plot}</p>
                        </div>
            
                    </div>
                    
                </div>

          
            `;

           
          
        }
        
      });

    searchInput.value = "";
  });
}

function renderMyMovies(movieId){
   if( document.readyState === "complete"){

    if(isRemove==false){

        localStorage.setItem("movieId", JSON.stringify(movieId) )
        document.getElementById(`add-remove-movie-${movieId}`).src="./images/remove-icon.png"
        isRemove=true

    } else{
        document.getElementById(`add-remove-movie-${movieId}`).src="./images/my-watclish-icon.png"
        localStorage.removeItem("movieId");
        isRemove=false
    }
    

   


    }
  
        
        
       
        
       

    
}









//Search on index.html
searchMovies();


