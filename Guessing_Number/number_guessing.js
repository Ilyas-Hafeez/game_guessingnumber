const prompt = require('prompt-sync')({sigint: true});
numberInMind = Math.floor(Math.random() * 100) + 1;
// Random number from 1 - 100
//console.log(numberInMind); //just to check
// This variable is used to determine if the app should continue prompting the user for input
// Step 1: Get user input (don't forget that the input is a string)
let findCorrectNumber = true;
while(findCorrectNumber === true){
  let guessANumber = prompt ('Guess a number: ');
  let x = Number(guessANumber);
  Game(x);
  findCorrectNumber = findCorrectNumber;
}


  // Step 2: Compare the guess to the secret answer and

  function Game (input){
    if (input !== numberInMind){
      CheckNumber(input);
      findCorrectNumber = true;
    } else if (input === numberInMind){
      CheckNumber(input);
      findCorrectNumber = false;
      
    }return findCorrectNumber;
  }
  // let the user know the feedback (too large, too small, correct).
 function CheckNumber (a) {
  let b = Number(a);
  switch (true){
    case b > numberInMind: console.log('Try smaller.');
    break;
    case b < numberInMind: console.log('Try bigger.');
    break;
    case b === numberInMind: console.log('Nice! You Win!');
    break;
    case b !== numberInMind: console.log('Please only enter Number');
    break;
  }
 }


// Bonus Point: prompt user and provide option for user to start a new game after winning