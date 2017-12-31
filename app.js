let button = document.getElementById('button');


//quotes array
let quotes = [
  {
  quote: "Your appeal to my humanity is pointless.",
  author:'Seven2'
  },
  {
  quote: "There is coffee in that nebula.",
  author: 'Janeway1'
  },
  {
  quote: "I'll complain if I want to. It's comforting.",
  author: 'Doctor3'
  },
]

//character cards
let characterCards = [
  {
  name: "janeway",
  cardImage: "images/janeway_margin.jpg"
  },
  {
  name: "seven",
  cardImage: "images/seven_card.jpg"
  },
  {
  name: "doctor",
  cardImage: "images/doctor_margin.jpg"
  }
]

//for loop that loops through character cards array and creates and appends character card image to game board
for (let i = 0; i < characterCards.length; i++) {
  let card = document.createElement("img");
  card.src = characterCards[i].cardImage;
  card.id = characterCards[i].name;
  let gameBoard = document.getElementById('game-board');
  gameBoard.append(card)
}


let elem2 = document.createElement("h5");
  let source = quotes[Math.floor(Math.random()*quotes.length)];
  elem2.id = source.author;
  elem2.innerHTML = source.quote
  let quote = document.getElementById('quote');
  quote.append(elem2)

// button.addEventListener("click",function(){
//   let quote = document.getElementById('quote');
//   quote.append(elem2)
// })

let counter = 10

let sevenElement = document.getElementById("seven");
sevenElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h5');
  if (quoteElement[0].id==='Seven2') {
    alert('Correct');
    window.location.reload(true);
  } else {
    alert('Incorrect, try again!');
    }
  })

let janewayElement = document.getElementById("janeway");
janewayElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h5');
    if (quoteElement[0].id==='Janeway1') {
      alert('Correct');
      window.location.reload(true);
    } else {
      alert('Incorrect, try again!');
      }
    })

let doctorElement = document.getElementById("doctor");
doctorElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h5');
    if (quoteElement[0].id==='Doctor3') {
          alert('Correct');
          window.location.reload(true);
    } else {
          alert('Incorrect, try again!');
      }
    })
