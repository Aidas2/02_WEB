let inputs = document.querySelectorAll("input");


for(let input of inputs){
    input.addEventListener("focus", (e) =>{
       //input.style.backgroundColor = "black";
        //input.classList.add("inputFocus");
        input.className ="inputFocus";
    });
    
    input.addEventListener("blur", (e) =>{
        //input.classList.add("inputBlur");
        input.className ="inputBlur";
    });

}

