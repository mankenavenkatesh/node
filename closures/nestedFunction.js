/*
	create a function sum that will work like : sum(a)(b)=a+b
**/
function sum(a){
	return function(b){
		return a+b;
	}	
}
var res=sum(2)(3);
console.log(res);