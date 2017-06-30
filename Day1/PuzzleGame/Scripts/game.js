var passcode = ~~(Math.random() * 1000);
var tries = 10;

var clueText = document.getElementById("clues")

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");

var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "/number of attemps left" + tries;

button.addEventListener("click", guessNumber);

function guessNumber()
{
    attemptsText.innerHTML = "Number of attempts left: " + tries;
    console.log("Guess a number between between 0-999");
   var guess = number.value;
    tries = tries - 1;
    if (guess == passcode)
    {
        
         document.body.innerHTML = "<h1>You won</h1>;
        console.log ("You Win");
        
    }
    else if (tries <= 0)
    {
        document.body.innerHTML = "<h1> You Lost<h1>" + " <p>The number was :" + passcode + " </p>"; 
    }

    {
        giveClue(guess);
    }
}   


function giveClue(guess)
{
    if (guess > passcode)
    {

    clueText.innerHTML += "<li>" = + guess + "its too high" + "</li>"
        
    }
    else
    {
  clueText.innerHTML += "<li>" = + guess + "its too low" + "</li>"
    }
}
