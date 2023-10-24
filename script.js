let TellJokeBtn = document.getElementById("btn")
const ApiKey = "vDXWhR7bnV9iJxSXtFZnhg==1aaJfifPZEOS6f4d"
const Joke = document.getElementById("joke")
const laugh = new Audio("./laugh.mp3")

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": ApiKey,
    },
}

// api  link 
const ApiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

// random joke in api

async function getJoke() {
    Joke.innerText = "Updating..."
    TellJokeBtn.disabled = true;
    TellJokeBtn.innerText = "Loading..."
    const response = await fetch(ApiUrl, options);
    const data = await response.json();
    Joke.innerText = data[0].joke


    // late audio 
    setTimeout(function() {
        laugh.play();
    }, 2500);
    TellJokeBtn.disabled = false
    TellJokeBtn.innerText = "Tell _ Me _ a _ Joke"
}
TellJokeBtn.addEventListener("click", getJoke)