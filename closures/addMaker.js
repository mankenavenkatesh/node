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