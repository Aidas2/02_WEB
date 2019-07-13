function addToList() {
    var ul = document.getElementById("list");
    var laukas = document.getElementById("laukas");
    var li=document.createElement("li");
    li.setAttribute('id',laukas.value);
 li.appendChild(document.createTextNode(laukas.value));
  ul.appendChild(li);  
}





    
    
    
// function removeItem(){
//	var ul = document.getElementById("list");
//  var laukas = document.getElementById("laukas");
//  var item = document.getElementById(laukas.value);
//  ul.removeChild(item);
//}   