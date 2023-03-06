

let containerWatchlist = document.querySelector(".movie-container-watchlist");
let addWatchListBtn= document.querySelector(".add-watchlist-icon")
let addRemoveMovie = document.querySelector(".add-remove-movie")
let isRemove=false
const moviesFromLocalStorage = JSON.parse( localStorage.getItem("movieId") )



function listMyMovies(){
    console.log(moviesFromLocalStorage)
    if (moviesFromLocalStorage) {
        console.log("pooooo")
        
      }else{
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







//List my movies on watclist.html
listMyMovies();