// get quote button
//

//

var quotes = [
  {quote: 'Your appeal to my humanity is pointless.',
    author:'Seven2'},
  {quote: 'there is coffee in that nebula',
    author: 'Janeway1'},
  {quote: 'I will complain if I want to. It is comforting.',
    author: 'Doctor3'},
]

//character cards
let characterCards = [
  {
  name: "janeway",
  cardImage: "images/janeway_card.jpg"
  },
  {
  name: "seven",
  cardImage: "images/seven_card.jpg"
  },
  {
  name: "doctor",
  cardImage: "images/doctor_card.jpg"
  }
];

//

// var cardsInPlay = [];
//
// var checkForMatch = function() {
//   if (cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");
//     location.reload();
//   }
// }

var createBoard = function() {
    var janewayCardElement = document.createElement('img');
    janewayCardElement.setAttribute('src', 'images/janeway_card.jpg');

    var doctorCardElement = document.createElement('img');
    doctorCardElement.setAttribute('src', 'images/doctor_card.jpg');

    var sevenCardElement = document.createElement('img');
    sevenCardElement.setAttribute('src', 'images/seven_card.jpg');

    var quoteCardElement = document.createElement('img');
    sevenCardElement.setAttribute('src', 'images/seven_card.jpg');

    document.getElementById('game-board').appendChild(janewayCardElement);

    document.getElementById('game-board').appendChild(sevenCardElement);


    document.getElementById('game-board').appendChild(doctorCardElement);

};

var elem2 = document.createElement("h5");
  var source = quotes[Math.floor(Math.random()*quotes.length)];
  elem2.id = source.author;
  elem2.innerHTML = `"<i>${source.quote}</i>"`
  var k = document.getElementById('quote');
  k.append(elem2)

createBoard();
