var liquid = function (gallon){
	return (gallon * 3.78541);
};
var gallon = parseFloat(prompt("Please Enter Volume in gallons"));
var result = liquid(gallon);
alert(result);

var liquid2 = function (litres){
	return (litres / 3.78541);
};
var litres = parseFloat(prompt("Please Enter Volume in gallons"));
var result2 = liquid2(litres);
alert(result2);
