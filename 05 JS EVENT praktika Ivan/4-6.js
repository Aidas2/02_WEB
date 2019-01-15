function show_selected(){
    let x=document.getElementById("select");
    let value=x.options[x.selectedIndex].text;
    
    if(value==1){
       document.body.style.backgroundImage="url('1.png')"; 
    }
    else if(value==2){
       document.body.style.backgroundImage="url('2.png')"; 
    }
    else {
       document.body.style.backgroundImage="url('3.png')"; 
    }
    
    
}

document.getElementById("btn").addEventListener("click", show_selected);