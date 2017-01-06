// $(document).ready( function(){});

function transformTime (hora){
	var input = hora;
	var result = "";

	if ((input.length == 10) && (parseInt(input.substr(0,2)) >= 0) && (parseInt(input.substr(0,2)) <= 12) && (parseInt(input.substr(3,2)) >= 0) && (parseInt(input.substr(3,2)) <= 60) && (parseInt(input.substr(6,2)) >= 0) && (parseInt(input.substr(6,2))<= 60) ){ 
		if (input.charAt(8) == 'A') {

			result = input.slice(0,8);
			var num = parseInt(input.substr(0,2));

			if( num === 12){
				num = "00";
			}

			result = num + input.slice(2,8);
			alert(result);
		}
		else{
			num = parseInt(input.substr(0,2));
			result = num + input.slice(2,8);
			alert(result);
		}
	}
	else {
		alert("Ingresa una hora correcta Ej. 06:55:44AM");
	}
}	