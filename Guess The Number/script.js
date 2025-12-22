var randomNumber = Math.floor(Math.random() * 10) + 1;
function checkNumber() 
{
  var userGuess = document.getElementById("guess").value;
  var message = document.getElementById("message");

  message.classList.remove("d-none", "alert-success", "alert-danger", "alert-warning");

  if (userGuess === "" || userGuess < 1 || userGuess > 10)
     {
    message.classList.add("alert", "alert-warning");
    message.innerHTML = "Please enter a number between 1 and 10";
    return;
    }

  if (userGuess > randomNumber) 
  {
    message.classList.add("alert", "alert-danger");
    message.innerHTML = "Try a smaller number";
  }
  else if (userGuess < randomNumber) 
{
    message.classList.add("alert", "alert-danger");
    message.innerHTML = "Try a larger number";
  }
  else 
  {
    message.classList.add("alert", "alert-success");
    message.innerHTML = "Congratulations! You guessed it right 🎉";
  }
}
