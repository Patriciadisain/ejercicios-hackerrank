function hashtag_ (n){
	var num = parseInt(n);
	var result = "";

	for ( i = 0 ; i < num ; i++){
		var hash = "#";
		var espacio = "  ";
		var cont = 1;
		for ( j = 0 ; j < num ; j++){

			if (cont !== (num-i)){
				cont ++;
				result += espacio;
			}
			else{
				result += hash;
			}
		}

		if ( i != num-1){
			result += "\n";
		}
	}
	alert(result);
}

