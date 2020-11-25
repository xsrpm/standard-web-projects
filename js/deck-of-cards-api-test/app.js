console.log("exito")
const btnSuffleDeck = document.getElementById("btnSuffleDeck")
const btnGiveP1 = document.getElementById("btnGiveP1")
const btnGiveP2 = document.getElementById("btnGiveP2")
const btnGiveP3 = document.getElementById("btnGiveP3")
const btnGiveP4 = document.getElementById("btnGiveP4")
const btnShowP1 = document.getElementById("btnShowP1")
const btnShowP2 = document.getElementById("btnShowP2")
const btnShowP3 = document.getElementById("btnShowP3")
const btnShowP4 = document.getElementById("btnShowP4")
const spanP1 = document.getElementById("spanP1")
const spanP2 = document.getElementById("spanP2")
const spanP3 = document.getElementById("spanP3")
const spanP4 = document.getElementById("spanP4")
let DECK_ID = "nk3ezp5o43zo"
btnSuffleDeck.onclick = function (){
    fetch(`https://deckofcardsapi.com/api/deck/${DECK_ID}/shuffle/`)
    .then(response => {
        console.log(response)
        if(response.status===500){
            return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then(response => response.json())
        }
    })
    .then(data => {
        if(data.deck_id !== DECK_ID) DECK_ID = data.deck_id
        console.log(data)
        spanP1.innerText =""
        spanP2.innerText =""
        spanP3.innerText =""
        spanP4.innerText =""
    })
    .catch(e=>console.error(e))
}

function give(){
    let pj = this.id.substr(7).toLowerCase()
    console.log(pj)
    fetch(`https://deckofcardsapi.com/api/deck/${DECK_ID}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return fetch(`https://deckofcardsapi.com/api/deck/${DECK_ID}/pile/${pj}/add/?cards=${data.cards[0].code}`)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e=>console.error(e))
}

function show(){
    let pj = this.id.substr(7)
    fetch(`https://deckofcardsapi.com/api/deck/${DECK_ID}/pile/${pj.toLowerCase()}/list/`)
    .then(response => response.json())
    .then(data => {
        if(!data.piles[`${pj.toLowerCase()}`]) throw new Error("No existe pila para el jugador")
        console.log(data)
        let span = document.getElementById(`span${pj}`)
        let cards = data.piles[`${pj.toLowerCase()}`].cards
        let codes = []
        for (const iterator of cards) {
            codes.push(iterator.code)
        }
        span.innerText=codes.join(",")
    })
    .catch(e=>console.error(e))
}

btnGiveP1.onclick = give
btnGiveP2.onclick = give
btnGiveP3.onclick = give
btnGiveP4.onclick = give
btnShowP1.onclick = show
btnShowP2.onclick = show
btnShowP3.onclick = show
btnShowP4.onclick = show
