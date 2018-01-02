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
    card.setAttribute("data-toggle", "modal");
    card.setAttribute("data-target", "#modalMessage");
    let gameBoard = document.getElementById('game-board');
    gameBoard.append(card)
  }

// creates h3 element
  //Math.floor(Math.random()*quotes.length) chooses a random index from the quotes array and stores as source
      // math.floor is used to get the nearest rounded down whole number to make sure result isnt out of index range
      //Math.random returns a random number between greater than or equal to 0 and less than 1
      //*quotes.length is made because 1+high-low is 1 + quotes.length - 1
  // sets quoteInnerHTML id to the character's name
  // sets quoteInnerHTML html content to be the quote
  // gets quote element from document and stores as quote variable
  // elem 2 inner html, quote, is appended to the quote element

  let quoteInnerHTML = document.createElement('h3');
  let source = quotes[Math.floor(Math.random()*quotes.length)];
  quoteInnerHTML.id = source.character;
  quoteInnerHTML.innerHTML = source.quote
  let quote = document.getElementById('quote');
  quote.append(quoteInnerHTML)

//sets attemptsLeft starter position to 3
let attemptsLeft = 3;

// gets janeway element, that was created using for loop, and sets as janewayElement
// adds click event to janewayElement that triggers function
// gets h3 element, that was created and stored as quoteInnerHTML, containing character id and quote and stores as quoteElement
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
    janewayElement.setAttribute("data-toggle", "modal");
    janewayElement.setAttribute("data-target", "#modalMessage");
    // janewayElement.addEventListener("click",function(){
    //   let quoteElement = document.getElementsByTagName('h3');
    //   if (quoteElement[0].id === 'Janeway1') {
    //     if (attemptsLeft === 3){
    //       // alert('You picked Captain Janeway! Congratulations, you matched correctly on your first try!');
    //       window.location.reload(true);
    //     }
    //     if (attemptsLeft<3 && attemptsLeft>=2){
    //       // alert('You picked Captain Janeway! You answered correctly on your second try!');
    //       window.location.reload(true);
    //     }
    //     if (attemptsLeft<2 && attemptsLeft>=1){
    //       $('#modalMessage').modal({show: true});
    //       // alert('You picked Captain Janeway! You answered correctly on third try!');  window.location.reload(true);
    //     }
    //   } else {
    //     attemptsLeft--
    //     alert('You picked the Janeway, sorry, this was incorrect.Try again!');
    //   }
    // })


    // let sevenElement = document.getElementById("seven");
    // sevenElement.setAttribute("data-toggle", "modal");
    // sevenElement.setAttribute("data-target", "#modalMessage");
    // janewayElement.addEventListener("click",function(){
    //   let quoteElement = document.getElementsByTagName('h3');
    //   if (quoteElement[0].id === 'Janeway1') {
    //     if (attemptsLeft === 3){
    //       // alert('You picked Captain Janeway! Congratulations, you matched correctly on your first try!');
    //       window.location.reload(true);
    //     }
    //     if (attemptsLeft<3 && attemptsLeft>=2){
    //       // alert('You picked Captain Janeway! You answered correctly on your second try!');
    //       window.location.reload(true);
    //     }
    //     if (attemptsLeft<2 && attemptsLeft>=1){
    //       $('#modalMessage').modal({show: true});
    //       // alert('You picked Captain Janeway! You answered correctly on third try!');  window.location.reload(true);
    //     }
    //   } else {
    //     attemptsLeft--
    //     alert('You picked the Janeway, sorry, this was incorrect.Try again!');
    //   }
    // })
    // let doctorElement = document.getElementById("doctor");
    // doctorElement.setAttribute("data-toggle", "modal");
    // doctorElement.setAttribute("data-target", "#modalMessage");
    // janewayElement.addEventListener("click",function(){
    //   let quoteElement = document.getElementsByTagName('h3');
    //   if (quoteElement[0].id === 'Janeway1') {
    //     if (attemptsLeft === 3){
    //       // alert('You picked Captain Janeway! Congratulations, you matched correctly on your first try!');
    //       window.location.reload(true);
    //     }
    //     if (attemptsLeft<3 && attemptsLeft>=2){
    //       // alert('You picked Captain Janeway! You answered correctly on your second try!');
    //       window.location.reload(true);
    //     }
    //     if (attemptsLeft<2 && attemptsLeft>=1){
    //       $('#modalMessage').modal({show: true});
    //       // alert('You picked Captain Janeway! You answered correctly on third try!');  window.location.reload(true);
    //     }
    //   } else {
    //     attemptsLeft--
    //     alert('You picked the Janeway, sorry, this was incorrect.Try again!');
    //   }
    // })




// WIP

// number of remaining attempts alerts
    // else if (quoteElement[0].id !=='Janeway1'){
    //       if (attemptsLeft===3) {
    //       attemptsLeft--
    //       alert('You picked the Janeway, sorry, this was incorrect. You have 2 attempts remaining');
    //       }
    //       if (attemptsLeft===2) {
    //         alert('You picked the Janeway, sorry, this was incorrect. You have 1 attempts remaining');
    //       }
    //       if (attemptsLeft===1) {
    //         alert('You picked the Janeway, sorry, this was incorrect. You have 0 attempts remaining');
    //         window.location.reload(true);
    //       }
    //     }

// remove quoteInnerHTML instead of reload
    // let removeFunction = () => {
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


//

/* <div id="modalInfo" class="modal fade" role="dialog">
	  <div class="modal-dialog modal-md">
	    <!-- Modal content-->
	    <div class="modal-content">
	      <div class="modal-header float-center">
	        <h2>How to Play</h2>
	      </div>
	      <div class="modal-body text-left">
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal" default>Close</button>
	      </div>
	    </div>

	  </div>
	</div> */



// var test1 = $('#test').val();
//
// $('#go').click(function() {
//   if (test1 === "") {
//     alert("Please enter all values in the fields");
//     $('#myModal').modal('show');
//   }
//
// });
//
// <div class="form-group">
//   <label for="test" class="col-sm-3 control-label">Test</label>
//   <div class="col-sm-3">
//     <input type="text" class="form-control" id="test" placeholder="Enter A Value">
//   </div>
// </div>
// <div class="form-group">
//   <div class="col-sm-offset-6 col-sm-3">
//     <button type="button" id="go" class="btn btn-primary">Go</button>
//   </div>
// </div>
// <!--Modal-->
// <div class="modal fade" id="#myModal">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
//
//         </button>
//         <h4 class="modal-title">Modal title</h4>
//
//       </div>
//       <div class="modal-body">
//         <p>One fine body&hellip;</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//     <!-- /.modal-content -->
//   </div>
//   <!-- /.modal-dialog -->
// </div>
// <!-- /.modal -->
// <!--End Modal-->
//
// $('#go').click(function() {
//   var test1 = $('#test').val();
//
//   if (test1 === "") {
//     $('#\\#myModal').modal('show');
//   }
// });
