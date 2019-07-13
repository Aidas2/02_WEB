let body = document.querySelector("body");
body.style.backgroundImage = "url('img/water.jpg')";

document.getElementById("mygtukas").addEventListener("click", parodyk);


function parodyk(){
    let kas = ["Dinozauras", "Ateivis", "Bitė", "Piktas kaimynas"];
    let veiksmas = ["atėmė", "sudegino", "išplėšė iš rankų ir nusinešė"];
    let ka = ["namų darbus","unikalų projektą", "atliktą užduotį"];
    
    let kasPasirinkimas = Math.floor(Math.random() * kas.length);
    let veiksmasPasirinkimas = Math.floor(Math.random() * veiksmas.length);
    let kaPasirinkimas = Math.floor(Math.random() * ka.length);
    
    let zinute = document.querySelector("h4");
    zinute.textContent = kas[kasPasirinkimas] + " " + veiksmas[veiksmasPasirinkimas] + " " + ka[kaPasirinkimas];
    
    
   // let variantas = document.createElement("p");
    //variantas.textContent = kas[kaPasirinkimas] + " " + veiksmas[veiksmasPasirinkimas] + " " + ka[kaPasirinkimas];
    
    //let divas = document.querySelector("div");
    //divas.append(variantas);
        

}