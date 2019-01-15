//alert('Labas');
//console.log('Sveiki visi');
//document.getElementById('x').innerHTML="Ate"

//$('#x').html('Ate');

// $(document).ready(function(){
// 	$('#bac').click(function(){
// 		alert("Ar tikrai norite išeiti ?");
// 	});
// });

// 	$('#bum').click(function(){
// 		alert("Štai ir paspaudei mane");
// 	});

	$('#taukst2').click(function(){
		var x = $("#taukst1").val();		
		if (x !='' && x >= 0 && x <= 75) {
			alert("LOJ kiekis yra " + x + " g/l");		
		}
		else if (x < 0 || x > 75) {
			alert("LOJ kiekis yra neleistinas. Produktas neatitinka TS");
		}
		else {
			alert("Jūs nieko neįvedėte arba įvesta reikšmė yra nepriimtina");
		}
	});

	$('#taukst4').click(function(){
		var y = $("#taukst3").val();		
		if (y !='' && y >= 0 && y <= 2) {
			alert("Džiūvimo laikas yra " + y + " val.");		
		}
		else if (y < 0 || y > 2) {
			alert("Džiūvimo laikas yra neleistinas. Produktas neatitinka TS");
		}
		else {
			alert("Jūs nieko neįvedėte arba įvesta reikšmė yra nepriimtina");
		}
	});

	$('#taukst6').click(function(){
		var z = $("#taukst5").val();		
		if (z !='' && z >= 80) {
			alert("NDFT yra " + z + " µm");		
		}
		else if (z < 0 || z < 80) {
			alert("NDFT yra neleistinas. Produktas neatitinka TS");
		}
		else {
			alert("Jūs nieko neįvedėte arba įvesta reikšmė yra nepriimtina");
		}
	});

// 		$('#sumuoti').click(function(){
// 		var x = $("#skaicius1").val();
// 		var y = $("#skaicius2").val();
// 		x = Number(x);
// 		y = parseInt(y);
// 		alert("Skaičių suma yra: " + (x + y));
// 		});

// // cia yra select laukelio inicilizacija:
//   $(document).ready(function(){
//     $('select').formSelect();
//   });

// // cia yra skaiciavimas pagal pasirinkta veiksma:
//  		$('#suskaiciuoti').click(function(){
// 		var x = $("#skaicius3").val();
// 		var y = $("#skaicius4").val();
// 		var z = $("#pasirinkimas").val();
// 		x = Number(x);
// 		y = parseInt(y);

// 		// switch(z) {
// 		//     case "1":
// 		//         alert("Skaičių suma yra: " + (x + y));
// 		//         break;
// 		//     case "2":
// 		//         alert("Skaičių atimtis yra: " + (x - y));
// 		//         break;
// 		//     case "3":
// 		//         alert("Skaičių daugyba yra: " + (x * y));
// 		//         break;
// 		//     case "4":
// 		//         alert("Skaičių dalyba yra: " + (x / y));
// 		//         break;
// 		//     default:
// 		//         alert("Nėra tokio veiksmo");
// 		// }

// 		switch(z) {
// 		    case "1":
// 		        $("#paragrafas").html("Skaičių suma yra: " + (x + y));
// 		        break;
// 		    case "2":
// 		        $("#paragrafas").html("Skaičių atimtis yra: " + (x - y));
// 		        break;
// 		    case "3":
// 		        $("#paragrafas").html("Skaičių daugyba yra: " + (x * y));
// 		        break;
// 		    case "4":
// 		        $("#paragrafas").html("Skaičių dalyba yra: " + (x / y));
// 		        break;
// 		    default:
// 		        $("#paragrafas").html("Nėra tokio veiksmo");
// 		}
// 		// if (z == 1)
// 		//  	{
// 		// 	alert("Skaičių suma yra: " + (x + y));
// 		// 	}
// 		// else if (z == 2)
// 		// 	{
// 		// 	alert("Skaičių atimtis yra: " + (x - y));
// 		// 	}
// 		});


// // cia yra background spalvinimas pagal pasirinkta veiksma:
// $("#spalva").change(function() {
// 	var color = $("#spalva").val();
// 	$("body").removeClass().addClass(color);
// });
