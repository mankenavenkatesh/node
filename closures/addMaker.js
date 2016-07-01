/*
	clousures mean, nested functions will have access to the scope of outer function after executing the outer function.
	only condition is nested function should have reference using which nested function can be called.
**/

function addMaker(n){
	var inc=n;
	var sum=0;

	function add(x){
		sum=sum+inc;
		return sum;
	}
	return add;
}

var adder3=addMaker(3);
console.log(adder3());
console.log(adder3());

var adder4=addMaker(4);
console.log(adder4());
console.log(adder4());