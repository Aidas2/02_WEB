var balance = 300;
var opSumos = [];
var opTipai = [];

//Čia yra operacijų apskaita
let forma = document.getElementById("el_bankas");
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let operacijosTipas = document.getElementById("id_of_select").selectedIndex;
    let opSuma = Number(e.target.elements.ivedimas.value);
    opSumos.push(opSuma);
    opTipai.push(operacijosTipas);
   
    switch (operacijosTipas) {
        case 0:
            balance = balance + opSuma;
            break;
        case 1:
            balance = balance - opSuma;
            break;
    }
    let pranesimas = document.getElementById("pranesimas");
    pranesimas.textContent = "Sąskaitoje yra: " + balance + " Eur.";
});

//Čia yra operacijų istorijos spausdinimas

let mygtukas = document.getElementById("istorija");
mygtukas.addEventListener("click", function (e) {

    //padarau ataskaitą matomą
    document.getElementById("ataskaita").style.visibility = "visible";

    //ištrinu jau esančią operacijų istorijos sąrašo vietą
    let trynimasTevas = document.querySelector("#ataskaita");
    let trynimasVaikas = document.querySelector("#rezultatai");
    trynimasTevas.removeChild(trynimasVaikas);

    //sukuriu tuščią operacijų istorijos sąrašo vietą
    let atliktuOperacijuVieta = document.createElement("div");
    atliktuOperacijuVieta.setAttribute("id", "rezultatai");
    //parenku teva
    let idejimoVieta = document.getElementById("ataskaita");
    idejimoVieta.appendChild(atliktuOperacijuVieta);

    //nustatau tėvinį elementą, kur bus įdedami įrašai
    atliktuOperacijuVieta = document.querySelector("#rezultatai");

    for (let i = 0; i < opSumos.length; i++) {
        //sukuriu paragrafą, į kurį dėsiu operacijų istorijos įrašus
        let atliktaOperacija = document.createElement("p"); //dar reikia nustatyt textContent
        atliktaOperacija.textContent = opSumos[i] + " Eur. ";
        if (opTipai[i] === 0) {
            atliktaOperacija.textContent += "Papildyta."
            atliktaOperacija.style.color = "green";
        } else {
            atliktaOperacija.textContent += "Išimta."
            atliktaOperacija.style.color = "red";
        }
        atliktuOperacijuVieta.appendChild(atliktaOperacija);
    }
})

//Čia yra operacijų sąrašo filtravimas
let filtroForma = document.getElementById("filtruoti");
filtroForma.addEventListener("submit", function (e) {
    e.preventDefault();
    let filtroSuma = Number(e.target.elements.sumos_filtras.value);
    // let punktas = e.target.elements.toDoItem.value;

    //ištrinu jau esančią operacijų istorijos sąrašo vietą
    let trynimasTevas = document.querySelector("#ataskaita");
    let trynimasVaikas = document.querySelector("#rezultatai");
    trynimasTevas.removeChild(trynimasVaikas);

    //sukuriu tuščią operacijų istorijos sąrašo vietą
    let atliktuOperacijuVieta = document.createElement("div");
    atliktuOperacijuVieta.setAttribute("id", "rezultatai");
    //parenku teva
    let idejimoVieta = document.getElementById("ataskaita");
    idejimoVieta.appendChild(atliktuOperacijuVieta);

    //nustatau tėvinį elementą, kur bus įdedami įrašai
    atliktuOperacijuVieta = document.querySelector("#rezultatai");

    for (let i = 0; i < opSumos.length; i++) {
        //sukuriu paragrafą, į kurį dėsiu operacijų istorijos įrašus

        if (filtroSuma === opSumos[i]) {
            let atliktaOperacija = document.createElement("p"); //dar reikia nustatyt textContent
            atliktaOperacija.textContent = opSumos[i] + " Eur. ";
            if (opTipai[i] === 0) {
                atliktaOperacija.textContent += "Papildyta."
                atliktaOperacija.style.color = "green";
            } else {
                atliktaOperacija.textContent += "Išimta."
                atliktaOperacija.style.color = "red";
            }
            atliktuOperacijuVieta.appendChild(atliktaOperacija);
        }
    }
})