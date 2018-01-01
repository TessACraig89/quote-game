//quotes array
let quotes = [
  {
  quote: "There is coffee in that nebula.",
  author: 'Janeway1'
  },
  {
  quote: "Oh, you know the story. Girl meets boy, girl reprograms boy's subroutines.",
  author: 'Janeway1'
  },
  {
  quote: "At ease before you sprain something.",
  author: 'Janeway1'
  },
  {
  quote: "I understand the concept of humor. It may not be apparent but I am often amused by human behavior.",
  author: 'Seven2'
  },
  {
  quote: "Your appeal to my humanity is pointless.",
  author:'Seven2'
  },
  {
  quote: "Fun will now commence.",
  author:'Seven2'
  },
  {
  quote: "I'll complain if I want to. It's comforting.",
  author: 'Doctor3'
  },
  {
  quote: "You should know I'm a hologram and can't be bent, spindled, or mutilated, so don't bother trying.",
  author: 'Doctor3'
  },
  {
  quote: "The Borg: party-poopers of the galaxy.",
  author: 'Doctor3'
  }
]

//character cards
let characterCards = [
  {
  name: "janeway",
  cardImage: "images/janeway_margin.jpg"
  },
  {
  name: "seven",
  cardImage: "images/seven_margin.jpg"
  },
  {
  name: "doctor",
  cardImage: "images/doctor_margin.jpg"
  }
]

//for loop that loops through character cards array and creates and appends character card image to game board
  // creates image element and stores in variable card
  // sets img src to be the cardImage url value
  //sets card image element's id to be the name value
  // get game board element by id and stores
  // card is appended to gameBoard
for (let i = 0; i < characterCards.length; i++) {
  let card = document.createElement("img");
  card.src = characterCards[i].cardImage;
  card.id = characterCards[i].name;
  let gameBoard = document.getElementById('game-board');
  gameBoard.append(card)
}

// creates h3 element
  //Math.floor(Math.random()*quotes.length) chooses a random index from the quotes array and stores as source
      // math.floor is used to get the nearest rounded down whole number to make sure result isnt out of index range
      //Math.random returns a random number between greater than or equal to 0 and less than 1
      //*quotes.length is made because 1+high-low is 1 + quotes.length - 1
  // sets elem2 id to the character's name
  // sets elem2 html content to be the quote
  // gets quote element from document and stores as quote variable
  // elem 2 inner html, quote, is appended to the quote element


let elem2 = document.createElement('h3');
  let source = quotes[Math.floor(Math.random()*quotes.length)];
  elem2.id = source.author;
  elem2.innerHTML = source.quote
  let quote = document.getElementById('quote');
  quote.append(elem2)




// gets janeway element, that was created using for loop, and sets as janewayElement
// adds click event to janewayElement that triggers function
// gets h3 element, that was created and stored as elem2, containing character id and quote and stores as quoteElement
  //if character id is Janeway1
    //alert
let janewayElement = document.getElementById("janeway");
janewayElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h3');
    if (quoteElement[0].id==='Janeway1') {
      alert('Correct');
      window.location.reload(true);
    } else {
      alert('Incorrect, try again!');
      }
    })

let sevenElement = document.getElementById("seven");
sevenElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h3');
  if (quoteElement[0].id==='Seven2') {
    alert('Correct');
    window.location.reload(true);
  } else {
    alert('Incorrect, try again!');
    }
  })

let doctorElement = document.getElementById("doctor");
doctorElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h3');
    if (quoteElement[0].id==='Doctor3') {
          alert('Correct');
          window.location.reload(true);
    } else {
          alert('Incorrect, try again!');
      }
    })
