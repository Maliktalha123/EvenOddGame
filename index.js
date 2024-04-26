let userInput = document.getElementById('userInput')
let randomNumber = document.getElementById('randomNumber');


function evenOrOdd(value){
    userInput.innerText = value;
    var randomNum = Math.ceil(Math.random()*2)
    console.log(randomNum)

    if(value == 1){
        randomNumer.innerText = 'Odd'
    }
    else if(value == 2){
        randomNumber.innerText = 'Even'
    }
}