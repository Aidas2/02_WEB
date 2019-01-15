let button = document.querySelector(".button_guess");
let button_reset = document.querySelector(".button_reset");

button_reset.style.display = "none";

let input = document.querySelector("input");
let randomNumber = Math.floor((Math.random() * 10) + 1);
let guess = document.querySelector(".guess");

button.addEventListener("click", (e) => {
    guess.style.visibility = "visible";
    if (input.value > randomNumber) {
        guess.style.color = "red";
        guess.textContent = "Try lower than "+ input.value +" number";
    } else if (input.value < randomNumber) {
        guess.style.color = "green";
        guess.textContent = "Try higher than "+ input.value +" number";
    } else {
        guess.style.color = "blue";
        guess.textContent = "Omg i can't believe. You won nothing!!!";
        input.style.display = "none";
        button.style.display = "none";
        button_reset.style.display = "unset";
    }
});


button_reset.addEventListener("click", (e) => {
    input.style.display = "unset";
    guess.style.visibility = "hiden";
    button.style.display = "unset";
    button_reset.style.display = "none";
    input.value = "";
    guess.textContent="";
    randomNumber = Math.floor((Math.random() * 10) + 1);
});
