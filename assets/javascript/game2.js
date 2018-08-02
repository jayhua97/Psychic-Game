var compChoose = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var compGuess = compChoose[Math.floor(Math.random() * compChoose.length)];
console.log(compGuess);
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

    if (userGuess === compGuess) {
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
        compGuess = compChoose[Math.floor(Math.random() * compChoose.length)];
        console.log(compGuess);
    }

    else {

        if (guessesLeft > 0) {
            guessesSoFar.push(userGuess);
            guessesLeft--;
        }
        
        else {
            losses++;
            guessesLeft = 10;
            guessesSoFar = [];
            compGuess = compChoose[Math.floor(Math.random() * compChoose.length)];
            console.log(compGuess);
        }
    }

    var html =
        "<h2>Wins: " + wins + "</h2>" + 
        "<h2>Losses: " + losses + "</h2>" + 
        "<h2>Guesses left: " + guessesLeft + "</h2>" + 
        "<h2>Guesses so far: " + guessesSoFar + "</h2>";

    document.querySelector("#game").innerHTML = html;
};