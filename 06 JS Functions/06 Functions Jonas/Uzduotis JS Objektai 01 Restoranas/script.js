var restoranas = {
    pavadinimas: "Laimės paukštė",
    vietuSkaicius: 30,
    rezervuotuVietuSkaicius: 0
};
document.getElementById("pavadinimas").textContent = "Restoranas \"" + restoranas.pavadinimas + "\"";




//Vietų rezervavimas
let formaRezervacija = document.getElementById("rezervacija");
formaRezervacija.addEventListener("submit", function (e) {
    e.preventDefault();
    let rezervuojamosVietos = Number(e.target.elements.rezervuojamosVietos.value);
    if(rezervuojamosVietos > (restoranas.vietuSkaicius - restoranas.rezervuotuVietuSkaicius)){
        alert("Tiek laisvų vietų restorane nėra");
    } else {
        restoranas.rezervuotuVietuSkaicius += rezervuojamosVietos;
        document.getElementById("rezervuotos").textContent = "Rezervuotų: " + restoranas.rezervuotuVietuSkaicius;
        document.getElementById("laisvu").textContent = "Laisvų: " + (restoranas.vietuSkaicius - restoranas.rezervuotuVietuSkaicius);  
    }
});

//Rezervacijų atšaukimas
let formaAtsaukimas = document.getElementById("atsaukimas");
formaAtsaukimas.addEventListener("submit", function (e) {
    e.preventDefault();
    let atsaukiamosVietos = Number(e.target.elements.atsaukiamosVietos.value);
    if(atsaukiamosVietos > restoranas.rezervuotuVietuSkaicius){
        alert("Nėra tiek užrezervuotų vietų!");
    } else {
        restoranas.rezervuotuVietuSkaicius -= atsaukiamosVietos;
        document.getElementById("rezervuotos").textContent = "Rezervuotų: " + restoranas.rezervuotuVietuSkaicius;
        document.getElementById("laisvu").textContent = "Laisvų: " + (restoranas.vietuSkaicius - restoranas.rezervuotuVietuSkaicius);  
    }
});