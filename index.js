let userInput = document.getElementById("userInput");
let randomNumber = document.getElementById("randomNumber");
let messageForClient =document.getElementById("messageForClient")

function evenOrOdd(value) {
  userInput.innerText = value;
  var randomNum = Math.ceil(Math.random() * 2);
  console.log(randomNum);

  if (randomNum == 1) {

    randomNumber.innerText = "Odd";
messageForClient.innerText = "Congrats !, You Won" 
} else {
    randomNumber.innerText = "Even";
    messageForClient.innerText= "Sorry You Lose,Try Again. "
  }
}

