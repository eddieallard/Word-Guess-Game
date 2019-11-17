// Global variables below this line
// Array of Word Options (all lowercase).
var wordsList = ["California", "Florida", "New York", "New Jersey", "Vermont", "Arizona",
    "Texas", "New Mexico", "Louisiana", "Georgia", "North Carolina", "Virginia", "Delaware", "South Carolina"
];

// This will be the computer choice
var chosenWord = "";

// Individual letters to be stored in the array
var lettersInChosenWord = [];

// Number of blanks to be shown
var numBlanks = 0;

// Holds a mix of blank and solved letters.
var blanksAndSuccesses = [];

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Holds the letters guessed
var letterGuessed = "";

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// Starts the game
function startGame() {

    // Reset the guesses back to 0.
    numGuesses = 9;
  
    // Solution chosen randomly from wordList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  
    // The word is broken into individual letters.
    lettersInChosenWord = chosenWord.split("");
  
    // Count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;
  
    // Print the solution in console (for testing).
    console.log(chosenWord);
  
    // Here we *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
  
    // Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];
  
    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
  
    // Print the initial blanks in console.
    console.log(blanksAndSuccesses);
  
    // Reprints the guessesLeft to 9.
    document.getElementById("guesses-left").innerHTML = numGuesses;
  
    // Prints the blanks at the beginning of each round in the HTML.
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
    // Clears the wrong guesses from the previous round.
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  }

  // checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not
  // a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }

    // Log the current blanks and successes for testing.
    console.log(blanksAndSuccesses);
  }

  // If the letter doesn't exist at all...
  else {

    // Then we add the letter to the list of wrong letters.
    wrongGuesses.push(letter);

    // We also subtract one of the guesses.
    numGuesses--;

  }

}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // HTML UPDATES
  // ============

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    alert("You win!");

    // Update the win counter in the HTML
    document.getElementById("win-counter").innerHTML = winCounter;

    // Restart the game
    startGame();
  }

  // If we've run out of guesses
  else if (numGuesses === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose");

    // Update the loss counter in the HTML
    document.getElementById("loss-counter").innerHTML = lossCounter;

    // Restart the game
    startGame();
  }
}

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};
