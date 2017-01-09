function processData (t, arr){

	out = [];

	if (!( (1 <= t) && (t <= 10) ) ) return "error 1";
	if (!( arr.length == t )) return "error 2";

	for (let i = 0; i < arr.length; i++){
		if (!( (arr[i].length >= 2) && (arr[i].length <= 10000) ) ) return "error 3";
	}

	for (let i = 0; i < arr.length; i++){
		var s = arr[i];
		var r = s.split('').reverse().join('');
		var funny = true;
		for (let j = 1; j < s.length; j++){			
			var x = s.charCodeAt(j) - s.charCodeAt(j-1);
			var y = r.charCodeAt(j) - r.charCodeAt(j-1);

			if (!(Math.abs(x) == Math.abs(y))) {
				funny = false;
			}
		}
		//console.log(funny ? "Funny" : "Not Funny");
		out.push(funny ? "Funny" : "Not Funny");
	}

	return out;
}
