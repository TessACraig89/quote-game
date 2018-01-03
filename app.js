let quotes = [
    {
      arrayQuote: `"There is coffee in that nebula."`,
      character: 'Janeway1'
    },
    {
      arrayQuote: `"Oh, you know the story. Girl meets boy, girl reprograms boy's subroutines."`,
      character: 'Janeway1'
    },
    {
      arrayQuote: `"At ease before you sprain something."`,
      character: 'Janeway1'
    },
    {
      arrayQuote: `"I understand the concept of humor. It may not be apparent but I am often amused by human behavior."`,
      character: 'Seven2'
    },
    {
      arrayQuote: `"Your appeal to my humanity is pointless."`,
      character:'Seven2'
    },
    {
      arrayQuote: `"Fun will now commence."`,
      character:'Seven2'
    },
    {
      arrayQuote: `"I'll complain if I want to. It's comforting."`,
      character: 'Doctor3'
    },
    {
      arrayQuote: `"You should know I'm a hologram and can't be bent, spindled, or mutilated, so don't bother trying."`,
      character: 'Doctor3'
    },
    {
      arrayQuote: `"The Borg: party-poopers of the galaxy."`,
      character: 'Doctor3'
    }
]

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

//for loop that loops through character cards array and creates img tag and appends character card image to game board
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
    gameBoard.append(card);
}

//creates quoteElement variable outside of click function so it can be globally accessed
let quoteInnerHTML

//append quote function
  // creates h3 element
    //Math.floor(Math.random()*quotes.length) chooses a random index from the quotes array and stores as source
      // math.floor is used to get the nearest rounded down whole number to make sure result isnt out of index range
      //Math.random returns a random number between greater than or equal to 0 and less than 1
    //*quotes.length is made because 1+high-low is 1 + quotes.length - 1
    // sets quoteInnerHTML id to the character's name
    // sets quoteInnerHTML html content to arrayQuote
    // gets quote element from document and stores as quote variable
    // arrayQuote is appended to quote carrying its id

let appendQuote = () => {
    quoteInnerHTML = document.createElement('h3');
    let source = quotes[Math.floor(Math.random()*quotes.length)];
    quoteInnerHTML.id = source.character;
    quoteInnerHTML.innerHTML = source.arrayQuote;
    let quote = document.getElementById('quote');
    quote.append(quoteInnerHTML);
}

//append first arrayQuote
appendQuote();


//start count at 0
let count = 0;

//gets earlier created img element by id and stores as variable
//count function for eveytime img element is clicked it adds 1 to the current count value
//repeat for all three imgs
let janewayElement = document.getElementById("janeway");
    janewayElement.onclick = function() {
	     count += 1;
}

let sevenElement = document.getElementById("seven");
    sevenElement.onclick = function() {
	     count += 1;
}

let doctorElement = document.getElementById("doctor");
    doctorElement.onclick = function() {
	     count += 1;
}


// removes quoteInnerHTML from quote element which removes the quote from the page
let removeQuote = () => {
    quote.removeChild(quoteInnerHTML)
}

//creates quoteElement variable outside of click function so it can be globally accessed
let quoteElement

//adds click event to earlier created img element that has function attached
  // sets earlier created quoteElement variable to be the h3 element  which is the container of the quoteInnerHTML quote and id
      // if id is correct character name
          // and current count is 1
              //alertify correct, on what try
              //call removeQuote
              //call appendQuote
              //set current count back to 0 for next round
      // if id is not correct
          // and current count is 1
              //alertify incorrect, tries left
          // repeat for current count as 2
          //if current count is 0
              //alert no tries remaining
              //call removeQuote
              //call appendQuote
              //set current count back to 0 for next round

janewayElement.addEventListener("click", function() {
    quoteElement = document.getElementsByTagName('h3');
        if (quoteElement[0].id==='Janeway1') {
            if (count===1) {
                alertify.alert("Correct Match", 'You picked Captain Janeway! Congratulations, you matched correctly on your first try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
            if (count===2) {
                alertify.alert("Correct Match", 'You picked Captain Janeway! You answered correctly on your second try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
            if (count===3) {
                alertify.alert("Correct Match", 'You picked Captain Janeway! You answered correctly on third try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
        } else if (quoteElement[0].id !=='Janeway1') {
            if (count===1) {
                alertify.alert("Incorrect Match", 'You picked the Janeway, sorry, this was incorrect. You have 2 attempts remaining!');

            }
            if (count===2) {
                alertify.alert("Incorrect Match", 'You picked the Janeway, sorry, this was incorrect. You have 1 attempt remaining!');
            }
            if (count===3) {
                alertify.alert("Incorrect Match", 'You picked the Janeway, sorry, this was incorrect. You have 0 attempts remaining!');
                removeQuote();
                appendQuote();
                count = 0;
            }
        }
  })



sevenElement.addEventListener("click", function() {
    let quoteElement = document.getElementsByTagName('h3');
        if (quoteElement[0].id==='Seven2') {
            if (count===1){
                alertify.alert("Correct Match", 'You picked Seven of Nine! Congratulations, you matched correctly on your first try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
            if (count===2){
                alertify.alert("Correct Match", 'You picked Seven of Nine! You answered correctly on your second try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
            if (count===3){
                alertify.alert("Correct Match", 'You picked Seven of Nine! You answered correctly on third try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
        } else if (quoteElement[0].id !=='Seven2') {
            if (count===1) {
                alertify.alert("Incorrect Match", 'You picked the Seven of Nine, sorry, this was incorrect. You have 2 attempts remaining!');

            }
            if (count===2) {
                alertify.alert("Incorrect Match", 'You picked the Seven of Nine, sorry, this was incorrect. You have 1 attempt remaining!');

            }
            if (count===3) {
                alertify.alert("Incorrect Match", 'You picked the Seven of Nine, sorry, this was incorrect. You have 0 attempts remaining. Try this next quote!');
                removeQuote();
                appendQuote();
                count = 0;
            }
        }
})



doctorElement.addEventListener("click", function() {
    let quoteElement = document.getElementsByTagName('h3');
        if (quoteElement[0].id ==='Doctor3') {
            if (count === 1) {
                alertify.alert("Correct Match", 'You picked the Doctor! Congratulations, you matched correctly on your first try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
            if (count === 2) {
                alertify.alert("Correct Match", 'You picked the Doctor! You answered correctly on your second try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
            if (count === 3) {
                alertify.alert("Correct Match", 'You picked the Doctor! You answered correctly on third try!');
                removeQuote();
                appendQuote();
                count = 0;
            }
        } else if (quoteElement[0].id !=='Doctor3') {
            if (count===1) {
                alertify.alert("Incorrect Match", 'You picked the Doctor, sorry, this was incorrect. You have 2 attempts remaining!');

            }
            if (count===2) {
                alertify.alert("Incorrect Match", 'You picked the Doctor, sorry, this was incorrect. You have 1 attempt remaining!');

            }
            if (count===3) {
                alertify.alert("Incorrect Match", 'You picked the Doctor, sorry, this was incorrect. You have 0 attempts remaining. Try this next quote!');
                removeQuote();
                appendQuote();
                count = 0;
            }
        }
  })
