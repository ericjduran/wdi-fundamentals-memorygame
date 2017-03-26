var cards = ['queen', 'king', 'king', 'queen'];  // 4 variable, arrays with four string elements for playing cards
var cardsInPlay = [];  // declaration of an empty variable array
var board = document.getElementById('game-board');  //setting up the id for game-board with a var
function createBoard() {  //defining the function
   for (var i = 0; i < cards.length; i++) {
           var playCards = document.createElement('div');  // created div elements to link up with my play cards
           playCards.className = 'card';  // div elements now have a class name "card" 
           playCards.setAttribute('data-card', cards[i]);  // sets the attribute to the card and give it a value based on element of array
           playCards.addEventListener('click', isTwoCards);  // when click happens function isTwoCards activates
           board.appendChild(playCards);  //makes each element in the cards array a child of the parent board
           }
   }

function isTwoCards() {
   cardsInPlay.push(this.getAttribute('data-card'));  // gives values of the card that was clicked and assigns it to array cardsInPlay
   console.log(this.getAttribute('data-card'));  //outputs the value of the card that was clicked on
   if(this.getAttribute('data-card') === 'king') {  // if the card i clicked on is a king then the image of a king appears 
       this.innerHTML = "<img src= 'images/king.png'>";
   } else {
       this.innerHTML = "<img src='images/queen.png'>"; // or else the image of a queen appears
   }  
       if (cardsInPlay.length === 2) { // if we do have 2 cards in play then this function executes...
           isMatch(cardsInPlay);  // send the values that are in cardsInPlay array to the function isMatch for comparison between the two elements
           cardsInPlay = []; //when the comparison is complete empty the array 
       }  
   }
function isMatch(cards) {  // compare elements 0 and 1 of an array if they are equal then an alert informs me that a match is found otherwise no match is found
   if (cards[0] === cards[1]) {
       alert("You found a match!");
   } else {
       alert("Sorry, try again.");
   }
}
createBoard(); 