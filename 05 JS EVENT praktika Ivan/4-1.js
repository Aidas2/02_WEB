var randomNumber = Math.floor(Math.random() * 100) + 1;
var tries = 1;


function guessNumber() {
    
       var enteredNumber = document.getElementById("guessField").value;  
        if (enteredNumber > randomNumber) {
            alert("Mano skaicius mazesnis");
            tries++;
        } else if (enteredNumber < randomNumber) {
            alert("Mano skaicius didesnis");
            tries++;
        } else {
            alert("Atspejai!\nJusu bandymai:"+tries);
            
        }
}

