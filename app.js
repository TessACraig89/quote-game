//button
$("#dealButton").click(function () {
  ;
});

//character cards
let characterCards = [{
  name: "",
  cardImage: ""
}, {
  name: "",
  cardImage: ""
}, {
  name: "",
  cardImage: ""
}];

//quote cards
let quoteCards = [{
  name: "",
  cardImage: ""
}, {
  name: "",
  cardImage: ""
}, {
  name: "",
  cardImage: ""
}];

var cardsInPlay = [];
//flip card
const flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(characterCards[cardId].name);
  this.setAttribute('src', characterCards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

//check for Match
var checkForMatch = function() {
  if () {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }

//createBoard
let createBoard = function() {
  for (let i = 0; i < characterCards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', '');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();
