// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);
// let guessForm = document.querySelector("#guess");
// let answer = document.querySelector("#answer");
// let count = 0;

// guessForm.addEventListener("submit", function(e) {
// e.preventDefault();
// let guess = Number(e.target["guessNumber"].value);
// switch (true) {
//   case guess === random : answer.textContent = "Cool!";
//   break;
//   case guess > random : answer.textContent = "Less!";
//   break;
//   case guess < random : answer.textContent = "More!";
//   break;
//   default: answer.textContent = "Something went wrong!";
// }
// count++
// document.querySelector("#count").textContent = count;
// });

let calcForm = document.querySelector("#calc");
let button = document.querySelector("#resultas");

button.addEventListener("click", function(e){
  e.preventDefault();
  let result = Number(calcForm["first"].value) + Number(calcForm["second"].value);
  document.querySelector("#result").textContent = result;
})