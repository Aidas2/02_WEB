let a = document.querySelector("#a");
let b = document.querySelector("#b");
let button = document.querySelector("button");
let result = document.querySelector(".result");


a.addEventListener("input", (e) => {
    a.value = a.value.replace(/[^\d]/, '');
    result.textContent= "";
});
b.addEventListener("input", (e) => {
    b.value = b.value.replace(/[^\d]/, '');
    result.textContent= "";
});

button.addEventListener("click", (e) => {
    let aVal = parseInt(a.value);
    let bVal = parseInt(b.value);

    aVal = (isNaN(aVal)) ? 0 : aVal;
    bVal = (isNaN(bVal)) ? 0 : bVal;

    let sum = aVal + bVal;
    result.textContent = "Result: " +sum;
});
