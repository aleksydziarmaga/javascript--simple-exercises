
//Rekurencja
function isEven(number){
	if (number==0)
		return "parzyste";
	else if (number == 1)
		return "nieparzyste"
	else
		return isEven(number - 2);

}

//Liczenie znaków

function countBs(string){
	var NumberOfB = 0;
	for (var i =	0; i<string.length; i++){
		if (string.charAt(i) == 'B')
			NumberOfB += 1;
	}
	return NumberOfB;
}

function countChar(string, char){
	var NumberOfChar = 0;
	for (var i =	0; i<string.length; i++){
		if (string.charAt(i) == char)
			NumberOfChar++ ;
	}
	return NumberOfChar;
}

//Suma przedzialu liczb

function range(start, end){	
	var tablica = []; 
	while (start <= end){
		tablica.push(start);
		start +=1;
	}
	return tablica;
}

function sum(tablica){
	var suma = 0;
	for (var i = 0; i < tablica.length; i++)
		suma += tablica[i];
	return suma;
}
// fuckcja do pokazywania talbicy z krokiem
function range( start, end, step ){	
	var tablica = [];
	if ( step == null)
		step = 1; 
	if ( step >= 0 )
		while (start <= end){
			tablica.push(start);
			start +=step;
		}
	else 
		while (start >= end){
			tablica.push(start);
			start +=step;
		}
	return tablica;
}
//Funckja do odwracania tablicy
function reverseArray(tablica){
	var output = [];
	for (var i = 0; i < tablica.length; i++)
		output.unshift(tablica[i]);
	return output;
}

function reverseArrayInPlace(tablica){
	for (var i = 0; i < Math.floor(tablica.length/2); i++){
		var zmiennaPomocnicza = tablica[i];
		tablica[i] = tablica[tablica.length - 1 - i];
		tablica[tablica.length - 1 - i] = zmiennaPomocnicza;
	}
	return tablica;
}
//Lista
function arrayToList(tablica){
	var lista = null;
	for (var i = tablica.length-1; i >=0; i-- ){
		lista = {wartosc: tablica[i],
				 reszta: lista};
	}
	return lista;
}
function listToArray(lista){
	var tablica = [];
	for (var node = lista; node; node = node.reszta)
		tablica.push(node.wartosc);
	return tablica;
}
function prepend(wartosc, lista){
	return { wartosc: wartosc, reszta: lista };
}
console.log(prepend(10, prepend(20, null)));

function nth(lista, element){//wróc tu kiedys
	for (var node = lista; node; node = node.reszta)

}
//--!!!!!!!!!!!!!!!!!!!!!!!!!!wróć tu kiedyś!!!!!!!!!!!!!!!!!!!!!!!!!

function deepEqual(obj, obj){

}
var obj = {here: {is: "an"}, object: 2};

//--!!!!!!!!!!!!!!!!!!!!!!!!!!wróć tu kiedyś!!!!!!!!!!!!!!!!!!!!!!!!!