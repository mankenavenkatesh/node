function doublingDecorator(f){
	return function(){
		return 2*f.apply(this,arguments);
	}
}

function sum(a,b){
	return a+b;
}	
console.log(sum(2,3));
sum=doublingDecorator(sum);
console.log(sum(2,3));