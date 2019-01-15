var balance = 300;
var visosOperacijos = [];

//Čia yra operacijų apskaita
let forma = document.getElementById("el_bankas");
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let operacija = {
    opData: "",
    opSuma: 0,
    opTipas: 0
    }
      
    operacija.opSuma = Number(e.target.elements.ivedimas.value);
    operacija.opTipas = document.getElementById("id_of_select").selectedIndex;
    operacija.opData = new Date();
    visosOperacijos.push(operacija);
        
   switch (operacija.opTipas) {
        case 0:
            balance = balance + operacija.opSuma;
            break;
        case 1:
            balance = balance - operacija.opSuma;
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

    visosOperacijos.forEach(function(item){
       // console.log(item.opData);
    })
    
    visosOperacijos.forEach(function(item, index, objektas){
        let atliktaOperacija = document.createElement("p");
        atliktaOperacija.textContent = item.opSuma + " Eur. "
        if (item.opTipas === 0){
            atliktaOperacija.textContent += "Papildyta. "
            atliktaOperacija.style.color = "green";
        } else {
            atliktaOperacija.textContent += "Išimta. "
            atliktaOperacija.style.color = "red";
        }
        atliktaOperacija.textContent += "Operacijos data - " + item.opData.getFullYear() + "-" + (item.opData.getMonth()+1) + "-" + item.opData.getDate() + ".";
        atliktuOperacijuVieta.appendChild(atliktaOperacija);
    })
    

    //panaudoti reikėtų
    //`${index} - ${item}`

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

    let atfiltruotosOperacijos = visosOperacijos.filter(function(visosOperacijos){
        return visosOperacijos.opSuma === filtroSuma;
    })
    
     atfiltruotosOperacijos.forEach(function(item, index, objektas){
        let atliktaOperacija = document.createElement("p");
        atliktaOperacija.textContent = item.opSuma + " Eur. "
        if (item.opTipas === 0){
            atliktaOperacija.textContent += "Papildyta. "
            atliktaOperacija.style.color = "green";
        } else {
            atliktaOperacija.textContent += "Išimta. "
            atliktaOperacija.style.color = "red";
        }
        atliktaOperacija.textContent += "Operacijos data - " + item.opData.getFullYear() + "-" + (item.opData.getMonth()+1) + "-" + item.opData.getDate() + ".";
        atliktuOperacijuVieta.appendChild(atliktaOperacija);
    })
    
})



//Čia yra operacijų rikiavimas

let rusiavimo_mygtukas = document.getElementById("rusiuoti");
rusiavimo_mygtukas.addEventListener("click", function (e) {
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
    
    //cia rusiuoju
    let surusiuotosOperacijos = visosOperacijos.sort(function(a, b){
        return a.opSuma-b.opSuma
    })
    
    
    //cia isspausdinu
    surusiuotosOperacijos.forEach(function(item, index, objektas){
        let atliktaOperacija = document.createElement("p");
        atliktaOperacija.textContent = item.opSuma + " Eur. "
        if (item.opTipas === 0){
            atliktaOperacija.textContent += "Papildyta. "
            atliktaOperacija.style.color = "green";
        } else {
            atliktaOperacija.textContent += "Išimta. "
            atliktaOperacija.style.color = "red";
        }
        atliktaOperacija.textContent += "Operacijos data - " + item.opData.getFullYear() + "-" + (item.opData.getMonth()+1) + "-" + item.opData.getDate() + ".";
        atliktuOperacijuVieta.appendChild(atliktaOperacija);
    })
    
})