let veikejaiArr = ["Mama", "Tetis", "Suo", "Kate", "Kaimynas", "Ufonautai"];
let daroArr = ["suvalge", "paeme", "suplese", "ismete", "sudegino", "pardave"];
let daiktaiArr = ["kompiuteri", "televizoriu", "slepetes", "sriuba", "sviestuva", "muilas"];

function generateReason() {
    let whoChoise = Math.floor(Math.random() * veikejaiArr.length);
    let actionChoise = Math.floor(Math.random() * daroArr.length);
    let whatChoise = Math.floor(Math.random() * daiktaiArr.length);

    let pranesimas = document.querySelector("h4");
    //pranesimas.textContent = `${whoChoise} ${actionChoise} mano ${whatChoise}`;
    
    pranesimas.textContent = veikejaiArr[whoChoise] + " " + daroArr[actionChoise] + " " + daiktaiArr[whatChoise];
}

document.getElementById("mygtukas").addEventListener("click", generateReason)