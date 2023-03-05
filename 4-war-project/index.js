let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            document.getElementById("cards").innerHTML = `
                <img src=${data.cards[0].image} />
                <img src=${data.cards[1].image} />
            `
        })
})
/**
 * Challenge:
 * 
 * Start making this look lots nicer :)
 * 
 * 1. Add a card table background with the img/table.png image provided.
 * 2. Move the draw button to the very bottom of the page, full width
 * 3. Add some button styles. You can use the photo on the slides
 * for one option.
 */