//Praktinė užduotis Nr.1
function changeColorToYellow() {
    let pastraipa = document.querySelector("p");
    pastraipa.style.color = "yellow";
}

function changeColorToGreen() {
    let pastraipa = document.querySelector("p");
    pastraipa.style.color = "green";
}

function changeColorToRed() {
    let pastraipa = document.querySelector("p");
    pastraipa.style.color = "red";
}

//Praktinė užduotis Nr.2
function changeSizeToBig() {
    let paveiksliukas = document.querySelector("img");
    paveiksliukas.style.width = "500px";
}

function changeSizeToSmall() {
    let paveiksliukas = document.querySelector("img");
    paveiksliukas.style.width = "200px";
}

function changeSourceTo2() {
    let paveiksliukas = document.querySelector("img");
    paveiksliukas.setAttribute("src", "img/star1.jpg");
}

function changeSourceTo1() {
    let paveiksliukas = document.querySelector("img");
    paveiksliukas.setAttribute("src", "img/big.svg");
}

//Praktinė užduotis Nr.3
function changeToColorMode() {
    let paveiksliukas2 = document.querySelector("#starc");
    paveiksliukas2.setAttribute("class", "colorfull");
}

function changeToMonoMode() {
    let paveiksliukas2 = document.querySelector("#starc");
    paveiksliukas2.setAttribute("class", "monochrome");
}

//Praktinė užduotis Nr.4
function changeToLeftPosition() {
    let pingvinas = document.querySelector("#pingvinas");
    pingvinas.style.float = "left";
}

function changeToRightPosition() {
    let pingvinas = document.querySelector("#pingvinas");
    pingvinas.style.float = "right";
}

function changeToHidden() {
    let pingvinas = document.querySelector("#pingvinas");
    //img.style.display = "none";
    pingvinas.style.visibility = "hidden";
}

function changeToRestore() {
    let pingvinas = document.querySelector("#pingvinas");
    pingvinas.style.float = "initial";
    pingvinas.style.visibility = "visible";
    let parent = document.querySelector("#first");
    parent.appendChild(pingvinas, "#first");
}

function changeBottomPosition() {
    let pingvinas = document.querySelector("#pingvinas");
    let parent = document.querySelector("#last");
    parent.appendChild(pingvinas, "#last");
} 

//Praktinė užduotis Nr.5
function changeToUnhidden() {
    let formyte = document.querySelector("#forma");
    formyte.setAttribute("class", "unhidden");
}
//gal galima padaryti ir su appendChild ?

function popupAlert() {
    alert("Dėkojame už Jūsų nuomonę :)");
}
// o kaip padaryti autoclose ?
// timeOut daro atvirkščiai t.y. pranešimas nustatytas ms vėluoja o ne dingsta po jų.

//Praktinė užduotis Nr.6
function popupPavadinimas() {
    let naujasH3 = document.createElement("h3");
    naujasH3.textContent = "Pavadinimas";
    
    let priesMane = document.querySelector("#sunelis");
    let parent = document.querySelector("#tevelis");
    parent.insertBefore(naujasH3, priesMane);
}
