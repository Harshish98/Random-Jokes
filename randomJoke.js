
const joke = document.getElementById("head");
const btn = document.getElementById("bttn");

btn.addEventListener("click", ()=>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then((val) => val.json())
    .then((jokes) => joke.innerHTML = jokes.value);
});