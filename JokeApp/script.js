async function getNewJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await response.json();

    document.getElementById("setup").innerText = data.setup;
    document.getElementById("punchline").innerText = data.punchline;
  } catch (error) {
    document.getElementById("setup").innerText = "Oops! Joke load nahi hua 😢";
    document.getElementById("punchline").innerText = "";
  }
}
