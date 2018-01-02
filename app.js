//quotes array
let quotes = [
  {
  quote: `"There is coffee in that nebula."`,
  character: 'Janeway1'
  },
  {
  quote: `"Oh, you know the story. Girl meets boy, girl reprograms boy's subroutines."`,
  character: 'Janeway1'
  },
  {
  quote: `"At ease before you sprain something."`,
  character: 'Janeway1'
  },
  {
  quote: `"I understand the concept of humor. It may not be apparent but I am often amused by human behavior."`,
  character: 'Seven2'
  },
  {
  quote: `"Your appeal to my humanity is pointless."`,
  character:'Seven2'
  },
  {
  quote: `"Fun will now commence."`,
  character:'Seven2'
  },
  {
  quote: `"I'll complain if I want to. It's comforting."`,
  character: 'Doctor3'
  },
  {
  quote: `"You should know I'm a hologram and can't be bent, spindled, or mutilated, so don't bother trying."`,
  character: 'Doctor3'
  },
  {
  quote: `"The Borg: party-poopers of the galaxy."`,
  character: 'Doctor3'
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
  elem2.id = source.character;
  elem2.innerHTML = source.quote
  let quote = document.getElementById('quote');
  quote.append(elem2)




//sets attemptsLeft starter position to 3
let attemptsLeft = 3;

// gets janeway element, that was created using for loop, and sets as janewayElement
// adds click event to janewayElement that triggers function
// gets h3 element, that was created and stored as elem2, containing character id and quote and stores as quoteElement
  //if character id is Janeway1
    //if first attempt, attemptsLeft===3
      //alert
      //reload window
    //if second attempt
      //alert
      //reload window
    //if 3rd attempt
      //alert
      //reload window
  //else
    //decrement attemptsLeft
    //alert

let janewayElement = document.getElementById("janeway");
janewayElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h3');
    if (quoteElement[0].id==='Janeway1') {
      if (attemptsLeft===3){
        alert('You picked Captain Janeway! Congratulations, you matched correctly on your first try!'); window.location.reload(true);
      }
      if (attemptsLeft<3 && attemptsLeft>=2){
        alert('You picked Captain Janeway! You answered correctly on your second try!');
        window.location.reload(true);
      }
      if (attemptsLeft<2 && attemptsLeft>=1){
        alert('You picked Captain Janeway! You answered correctly on third try!');  window.location.reload(true);
      }
    } else {
          attemptsLeft--
          alert('You picked the Janeway, sorry, this was incorrect. Try again!');
          }
    })



let sevenElement = document.getElementById("seven");
sevenElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h3');
  if (quoteElement[0].id==='Seven2') {
    if (attemptsLeft===3){
      alert('You picked Seven of Nine! Congratulations, you matched correctly on your first try!');
      window.location.reload(true);
    }
    if (attemptsLeft<3 && attemptsLeft>=2){
      alert('You picked Seven of Nine! You answered correctly on your second try!');
      window.location.reload(true);
    }
    if (attemptsLeft<2 && attemptsLeft>=1){
      alert('You picked Seven of Nine! You answered correctly on third try!');
      window.location.reload(true);
    }
  } else {
        attemptsLeft--
        alert('You picked the Seven of Nine, sorry, this was incorrect. Try again!');
        }
  })

let doctorElement = document.getElementById("doctor");
doctorElement.addEventListener("click",function(){
let quoteElement = document.getElementsByTagName('h3');
    if (quoteElement[0].id==='Doctor3') {
      if (attemptsLeft===3) {
        alert('You picked the Doctor! Congratulations, you matched correctly on your first try!');  window.location.reload(true);
      }
      if (attemptsLeft<3 && attemptsLeft>=2) {
        alert('You picked the Doctor! You answered correctly on your second try!');
        window.location.reload(true);
      }
      if (attemptsLeft<2 && attemptsLeft>=1) {
        alert('You picked the Doctor! You answered correctly on third try!');
        window.location.reload(true);
      }
    } else {
        attemptsLeft--
        alert('You picked the Doctor, sorry, this was incorrect. Try again!');
        }
    })





// WIP

// number of remaining attempts alerts
    // else if (quoteElement[0].id !=='Janeway1'){
    //       if (attemptsLeft===3) {
    //       attemptsLeft--
    //       alert('You picked the Janeway, sorry, this was incorrect. You have 2 attempts remaining');
    //       }
    //       if (attemptsLeft<3 && attemptsLeft>=2) {
    //         alert('You picked the Janeway, sorry, this was incorrect. You have 1 attempts remaining');
    //       }
    //       if (attemptsLeft<2 && attemptsLeft>=1) {
    //         alert('You picked the Janeway, sorry, this was incorrect. You have 0 attempts remaining');
    //         window.location.reload(true);
    //       }
    //     }

// remove elem2 instead of reload
    // let removeFunction = () => {
    //     // Removes an element from the document
    //     let element = document.getElementsByTagName('h3');
    //     quote.parentNode.removeChild(element);
    //   }

//popup function
// let correctPopup = () => {
//     let popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }
  //html
  // <div class="popup" onclick="correctPopup()">Click me!
  //   <span class="popuptext" id="myPopup">You picked Captain Janeway! Congratulations, you matched correctly on your first try!</span>
  // </div>
  //css
  /* Popup container */
  // .popup {
  //     position: relative;
  //     display: inline-block;
  //     cursor: pointer;
  // }
  // .popup .popuptext {
  //     visibility: hidden;
  //     width: 160px;
  //     background-color: #555;
  //     color: #fff;
  //     text-align: center;
  //     border-radius: 6px;
  //     padding: 8px 0;
  //     position: absolute;
  //     z-index: 1;
  //     bottom: 125%;
  //     left: 50%;
  //     margin-left: -80px;
  // }
  //
  // /* Popup arrow */
  // .popup .popuptext::after {
  //     content: "";
  //     position: absolute;
  //     top: 100%;
  //     left: 50%;
  //     margin-left: -5px;
  //     border-width: 5px;
  //     border-style: solid;
  //     border-color: #555 transparent transparent transparent;
  // }
  //
  // /* Toggle this class when clicking on the popup container (hide and show the popup) */
  // .popup .show {
  //     visibility: visible;
  //     -webkit-animation: fadeIn 1s;
  //     animation: fadeIn 1s
  // }
  //
  // /* Add animation (fade in the popup) */
  // @-webkit-keyframes fadeIn {
  //     from {opacity: 0;}
  //     to {opacity: 1;}
  // }
  //
  // @keyframes fadeIn {
  //     from {opacity: 0;}
  //     to {opacity:1 ;}
  // }
