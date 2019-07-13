function kmi() {
    var num1 = document.getElementById("mase").value;
    var num2 = document.getElementById("ugis").value;
    var rez = (parseFloat(num1))/(parseFloat(num2)*parseFloat(num2));
    document.getElementById("resultatas").value = rez; 
   
}



