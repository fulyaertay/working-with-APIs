function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

/**
 * Challenge: 
 * 
 * Part 1: write a `setTimeout` command. Have it wait for 2000 ms before logging "I finally ran!" to the console
 * 
 * Part 2: Move the anonymous in-line function to its own, named function
 */

function callback() {
    console.log("I finally ran!")
}

setTimeout(callback, 2000)