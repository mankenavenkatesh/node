function sum(a){
	var res=a;
	function innerSum(b){
		res+=b;
		return innerSum;
	}
	innerSum.toString=function(){return res}
	return innerSum;
}

console.log(sum(2)(3)(4).toString());
console.log(sum(2)(3)(4)(5)(7).toString());