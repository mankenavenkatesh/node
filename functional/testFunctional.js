var arr=['ABV','aVC','aawdW'];

// Withought functional programming, converting elements to lower case

console.log("withought functional programming");
var noFucnProg=[];
for(i=0;i<arr.length;i++){
	noFucnProg.push(arr[i].toLowerCase());
}
console.log(noFucnProg);

// calling map function on arrays.
// map functions takes a function as a parameter.
// the parameter function will be executed for every element of array
console.log("with functional programming");
var loarray=arr.map(function(str){
	str=str.toLowerCase();
	return str;
});
console.log(loarray);

// reduce is used to merge the computations
var sum=[1,2,3,4,5].reduce((preVal,currVal)=>preVal+currVal);
console.log(sum);
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

console.log(doubles);