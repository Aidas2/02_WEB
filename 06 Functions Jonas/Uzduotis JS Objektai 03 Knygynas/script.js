var knygos = [
    {
        name: "HTML&CSS",
        author: "Jon Duckett",
        year: 2011,
        volume: 514,
        quantity: 10,
        price: 14.99,
        picture: "img/html.jpg"
    },
    {
        name: "JavaScript: The definitive quide",
        author: "David Flanagam",
        year: 1996,
        volume: 1096,
        quantity: 5,
        price: 29.99,
        picture: "img/javascript.jpg"
    },
    {
        name: "Bootstrap: Responsive Web Development",
        author: "Jake Spurlock",
        year: 2013,
        volume: 128,
        quantity: 7,
        price: 9.95,
        picture: "img/bootstrap.jpg"
    }
];
//==========================================================================
//===============paieska pagal pavadinima
let formaPavadinimas = document.getElementById("pavadinimas");
formaPavadinimas.addEventListener("submit", function (e) {
    e.preventDefault();
    let uzklausaPavadinimas = e.target.elements.inlineFormInputName1.value
    console.log(uzklausaPavadinimas);
    var atfiltruotosKnygos = knygos.filter(function (knygos) {
        return knygos.name === uzklausaPavadinimas;
    })
    printBookList(atfiltruotosKnygos);
});
//===============paieska pagal autorių=================================
let formaAutorius = document.getElementById("autorius");
formaAutorius.addEventListener("submit", function (e) {
    e.preventDefault();
    let uzklausaAutorius = e.target.elements.inlineFormInputName2.value
    console.log(uzklausaAutorius);
    atfiltruotosKnygos = knygos.filter(function (knygos) {
        return knygos.author === uzklausaAutorius;
    })
    printBookList(atfiltruotosKnygos);
});
//===============paieska pagal metus
let formaMetai = document.getElementById("metai");
formaMetai.addEventListener("submit", function (e) {
    e.preventDefault();
    let uzklausaMetai = Number(e.target.elements.inlineFormInputName3.value);
    console.log(uzklausaMetai);
    atfiltruotosKnygos = knygos.filter(function (knygos) {
        return knygos.year === uzklausaMetai;
    })
    printBookList(atfiltruotosKnygos);
});
//==========================================================================
function printBookList(atfiltruotosKnygos) {
    //===============ištrinu jau esančią operacijų istorijos sąrašo vietą
    let trynimasTevas = document.querySelector("body");
    let trynimasVaikas = document.querySelector("#rezultatai");
    trynimasTevas.removeChild(trynimasVaikas);
    //===============sukuriu tuščią knygų paieškos rezultatų vietą
    let rezultatuVieta = document.createElement("div");
    rezultatuVieta.setAttribute("id", "rezultatai");
    rezultatuVieta.setAttribute("class", "container");
    //===============parenku teva
    let idejimoVieta = document.querySelector("body");
    idejimoVieta.appendChild(rezultatuVieta);
    //===============nustatau tėvinį elementą, kur bus įdedami įrašai
    let rezultatuIdejimoVieta = document.querySelector("#rezultatai");

        atfiltruotosKnygos.forEach(function (item, index, objektas) {
        //===============sukuriu atfiltruoto rezultato eilute bendrame konteineryje
        let rezultatuEilute = document.createElement("div");
        rezultatuEilute.setAttribute("class", "row");
        //===============idedu tą eilutę į bendrą konteinerį
        rezultatuIdejimoVieta.appendChild(rezultatuEilute);
        //===============tada sukuriu pirmą eilutes stulpeli
        let rezultatuStulpelis1 = document.createElement("div");
        rezultatuStulpelis1.setAttribute("class", "col-md-auto");
        rezultatuEilute.appendChild(rezultatuStulpelis1);
        //===============idedu paveiksliuką į pirmą stulpelį
        let picture = document.createElement("img");
        picture.src = atfiltruotosKnygos[index].picture;
        rezultatuStulpelis1.appendChild(picture);
        //===============įdedu 2 stulpelį
        let rezultatuStulpelis2 = document.createElement("div");
        rezultatuStulpelis2.setAttribute("class", "col-md-auto");
        rezultatuEilute.appendChild(rezultatuStulpelis2);
        //===============įdedu knygos informaciją
        let eilute = document.createElement("p");
        eilute.textContent = "Knygos pavadinimas: \"" + atfiltruotosKnygos[index].name + "\"";
        rezultatuStulpelis2.appendChild(eilute);
        eilute = document.createElement("p");
        eilute.textContent = "Knygos autorius: " + atfiltruotosKnygos[index].author;
        rezultatuStulpelis2.appendChild(eilute);
        eilute = document.createElement("p");
        eilute.textContent = "Išleidimo metai: " + atfiltruotosKnygos[index].year + " m.";
        rezultatuStulpelis2.appendChild(eilute);
        eilute = document.createElement("p");
        eilute.textContent = "Puslapių skaičius: " + atfiltruotosKnygos[index].volume + " psl.";
        rezultatuStulpelis2.appendChild(eilute);
        eilute = document.createElement("p");
        eilute.textContent = "Kiekis sandėlyje: " + atfiltruotosKnygos[index].quantity + " vnt.";
        rezultatuStulpelis2.appendChild(eilute);
        eilute = document.createElement("p");
        eilute.textContent = "Knygos kaina: " + atfiltruotosKnygos[index].price + " eurų.";
        rezultatuStulpelis2.appendChild(eilute);
        })
}