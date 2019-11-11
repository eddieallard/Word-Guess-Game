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