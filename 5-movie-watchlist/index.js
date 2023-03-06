"https://www.omdbapi.com/?t=aa&apikey=60c3cf12";

const submitBtn = document.querySelector(".submit-btn");
const searchInput = document.querySelector(".search-input");
let container = document.querySelector(".container");

function renderMovies() {
  if (searchInput.value == "") {
    container.innerHTML = `
        <img src="./images/no-data-initial.png" class="no-data" />
        `;
  }
  submitBtn.addEventListener("click", () => {
    fetch(`https://www.omdbapi.com/?t=${searchInput.value}&apikey=60c3cf12`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Title == undefined) {
          container.innerHTML = `
        <h2 class="no-movie">Movie not found!</h2>
        `;
        }
        
      });
    searchInput.value = "";
  });
}

renderMovies();
