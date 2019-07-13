let weight = document.querySelector("#weight");
let height = document.querySelector("#height");

let button = document.querySelector("button");
let result = document.querySelector(".result");
let image = document.querySelector("img");


weight.addEventListener("input", (e) => {
    weight.value = weight.value.replace(/[^\d]/, '');
    result.textContent = "";
    image.src = "";
});
height.addEventListener("input", (e) => {
    height.value = height.value.replace(/[^\d]/, '');
    result.textContent = "";
    image.src = "";
});

button.addEventListener("click", (e) => {
    let weightVal = parseInt(weight.value);
    let heightVal = parseInt(height.value);
    let message = "";
    let bmi = 0;

    weightVal = (isNaN(weightVal)) ? 0 : weightVal;
    heightVal = (isNaN(heightVal)) ? 0 : heightVal;

    if (weightVal === 0 || heightVal === 0) {
        message = "Can you please enter correct information?"
        result.textContent = message;
        return;
    }

    let h1 = heightVal / 100.0;
    h1 = Math.pow(h1, 2);
    bmi = (weightVal / h1);

    if (bmi < 18.5) {
        message = "You better start eating kebabs"
        image.src = "img/skinny.jpg";

    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "You are healthy ;)";
        image.src = "img/perfect.png";
    } else if (bmi > 24.9 && bmi <= 29.9) {
        message = "Limit your daily kebab intake...";
        image.src = "img/slightly.jpg";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        message = "No more kebabs for you darling!"
        image.src = "img/fat-guy.jpg";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        message = "Jesus Christ!! You are fat ass!!!"
        image.src = "img/no more.gif";
    } else {
        image.src = "img/tsunami.gif";
        message = "Once you jumped in the water, everone ran out yelling, \"Tsunami!\""
    }

    result.textContent = message;
});
