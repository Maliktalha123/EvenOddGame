let userInput = document.getElementById("userInput");
let randomNumber = document.getElementById("randomNumber");

let messageForClient = document.getElementById("messageForClient");
let winMessage = "Congrats, You Win"; 
let looseMessage = "Sorry You Loose, Try Again ...";

function evenOrOdd(value) {
  userInput.innerText = value;
  var randomNum = Math.ceil(Math.random() * 2);
  console.log(randomNum);

  if (randomNum == 1) {
    randomNumber.innerText = "Odd";

    if (userInput.innerText === randomNumber.innerText) {
      messageForClient.innerText = winMessage;
    } else {
      messageForClient.innerText = looseMessage;
    }
  } else if (randomNum === 2) {
    randomNumber.innerText = "Even";

    if (userInput.innerText === randomNumber.innerText) {
      messageForClient.innerText = winMessage;
    } else {
      messageForClient.innerText = looseMessage;
    }
  }
}
