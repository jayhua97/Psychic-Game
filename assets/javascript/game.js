var compChoose = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];


document.onkeyup = function(event) {

    for (guessesLeft > 0; guessesLeft--;) {

        if (userGuess == "a"){

            if (userGuess === compGuess) {
                var userGuess = event.key;
                console.log(event.key);
                var compGuess = compChoose[Math.floor(Math.random() * compChoose.length)];
                console.log(compGuess);
                wins++;
            }
    
            else {
                if (guessesLeft < 1) {
                    guessesSoFar.push(userGuess);
                    losses++;
                }
                else {
                    guessesLeft--; 
                }
            }
    
    
            var html = 
                "<h2>Wins: " + wins + "</h2>" +
                "<h2>Losses: " + losses + "</h2>" +
                "<h2>Guesses Left: " + guessesLeft + "</h2>" +
                "<h2>Gusses so far: " + guessesSoFar + "</h2>";
            
            document.getElementById("#game").innerHTML = html;
        }
    
        else {
            document.getElementById("#game").innerHTML = "Please try again";
        }
    }

}

// function () {
//     var text = "";
//     var possible = "abcdefghijklmnopqrstuvwxyz";

//     for (var i = 0; i <1; i++) 
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
    
//     return text;
// }

// for (var guess)