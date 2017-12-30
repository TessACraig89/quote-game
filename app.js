//quotes array
let quotes = [
  {
  quote: 'Your appeal to my humanity is pointless.',
  author:'Seven2'
  },
  {
  quote: 'there is coffee in that nebula',
  author: 'Janeway1'
  },
  {
  quote: 'I will complain if I want to. It is comforting.',
  author: 'Doctor3'
  },
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
]

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
  elem2.innerHTML = `"<i>${source.quote}</i>"`
  let k = document.getElementById('quote');
  k.append(elem2)

let sevenElement = document.getElementById("seven");
sevenElement.addEventListener("click",function(){
let idk = document.getElementsByTagName('h5');
  if (idk[0].id==='Seven2') {
    alert('YES');
  } else {
    alert('NO');
    }
  })

let janewayElement = document.getElementById("janeway");
janewayElement.addEventListener("click",function(){
let idk = document.getElementsByTagName('h5');
    if (idk[0].id==='Janeway1') {
      alert('YES');
    } else {
      alert('NO');
      }
    })

let doctorElement = document.getElementById("doctor");
doctorElement.addEventListener("click",function(){
let idk = document.getElementsByTagName('h5');
    if (idk[0].id==='Doctor3') {
          alert('YES');
    } else {
          alert('NO');
      }
    })
