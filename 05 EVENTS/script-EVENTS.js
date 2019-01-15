//Praktikos darbas Nr.1
var randomNumber = Math.floor(Math.random() * 100) + 1;
var tries = 0;

function compareNumbers() {
    let enteredNumber = document.getElementById("guessNumber").value;
    //alert("Ivedei " + enteredNumber);
    if (enteredNumber > randomNumber) {
        alert("Užmintas skaičius yra mažesnis");
        tries++;
    } else if (enteredNumber < randomNumber) {
        alert("Užmintas skaičius yra didesnis");
        tries++;
    } else {
        alert("Atspėjai! Tau pavyko iš " + tries + " karto.");
    }
    // ši eilute skirta įdėti/parodyti skaičių prie p su nurodytu Id 
    document.getElementById('parodyti').textContent = tries;
}
// ši eilutė skirta prie mygtuko (su nurodytu Id) pridėti event'ą (kuris suveika po click ir įvykdo funkciją su nurodytu pavadinimu)
document.getElementById("btn1").addEventListener("click", compareNumbers);

//=====================================================================================
//Praktikos darbas Nr.2
let form = document.querySelector("#registration");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let a = e.target.elements.pirmasNumber.value;
    let b = e.target.elements.antrasNumber.value;

    let atsakymas = Number(a) + Number(b);
    //console.log(atsakymas);

    //čia skirta rezultato išvedimui
    let span = document.querySelector("span"); // sukuriam kintamajį ir jam priskiriam span
    span.textContent = atsakymas; // į kintamąjį įdedam tekstą kuris = atsakymui 

});

//=====================================================================================
//Praktikos darbas Nr.3 
function calculateKMI() {
    let mase = document.getElementById("weight").value;
    let ugis = document.getElementById("hight").value;
    let kmi = Math.round(Number(mase) / Math.pow(Number(ugis), 2) * 10) / 10;

    if (kmi >= 18.5 && kmi <= 24.9) {
        vertinimas = "Normalus svoris";
    } else if (kmi >= 25.0 && kmi <= 29.9) {
        vertinimas = "Antsvoris";
    } else if (kmi >= 30.0 && kmi <= 34.9) {
        vertinimas = "Io nutukimas";
    } else if (kmi >= 35.0 && kmi <= 39.9) {
        vertinimas = "IIo nutukimas";
    } else if (kmi >= 40) {
        vertinimas = "Liguistas nutukimas";
    } else if (kmi < 18.5) {
        vertinimas = "Badaujantis zmogus";
    } else {
        vertinimas = "neteisingai ivestos reiksmes";
    }
    document.getElementById('parodyti31').textContent = kmi;
    document.getElementById('parodyti32').textContent = vertinimas;
}
document.getElementById("btn3").addEventListener("click", calculateKMI);

//=====================================================================================
//Praktikos darbas Nr.4

function addProduct() {
    let naujasProduktas = document.getElementById("produktas").value;
    let naujasIrasas = document.createElement("li");
    naujasIrasas.textContent = naujasProduktas;
    let parent = document.querySelector("ul");
    parent.appendChild(naujasIrasas);
}
document.getElementById("btn4").addEventListener("click", addProduct);

//=====================================================================================
//Praktikos darbas Nr.5
function changeOnFocus() {
    let a = document.getElementById("fonasA");
    let b = document.getElementById("fonasB")
    a.style.background = "green";
    b.style.background = "blue";
}

function changeOnBlur() {
    let a = document.getElementById("fonasA");
    let b = document.getElementById("fonasB")
    a.style.background = "white";
    b.style.background = "white";
}

function changeOnMouseOver() {
    let a = document.getElementById("fonasA");
    let b = document.getElementById("fonasB")
    a.style.background = "orange";
    b.style.background = "brown";
}

//=====================================================================================
//Praktikos darbas Nr.6
function show_selected() {
    let selector = document.getElementById("id_of_select");
    let value = selector.options[selector.selectedIndex].text;
    
    if (value == "winter") {
        document.body.style.backgroundImage = "url('img/winter.jpeg')";
    } else if (value == "spring") {
        document.body.style.backgroundImage = "url('img/spring.png')";
    } else if (value == "summer") {
        document.body.style.backgroundImage = "url('img/summer.jpeg')";
    } else {
        document.body.style.backgroundImage = "url('img/autumn.jpeg')";
    }

}
document.getElementById('btn6').addEventListener("click", show_selected);
