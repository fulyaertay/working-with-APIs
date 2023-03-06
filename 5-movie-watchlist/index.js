"https://www.omdbapi.com/?t=aa&apikey=60c3cf12"

const submitBtn = document.querySelector(".submit-btn")
const searchInput = document.querySelector(".search-input")
let container = document.querySelector(".container")

function renderMovies(){
    if (searchInput.value==""){
        container.innerHTML=`
        <img src="./images/no-data-initial.png" class="no-data" />
        `

    }
}




renderMovies()