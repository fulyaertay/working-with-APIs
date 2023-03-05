// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// document.getElementById("new-deck").addEventListener("click", handleClick)

const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
console.log(promise.then(res => res.json()))

/**
 * Mini challenge: Figure out what `promise.then()` returns! 
 * Save the result to a variable and log it to the console.
 */
    // .then(data => console.log(data))