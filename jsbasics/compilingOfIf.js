/*
For below code,
	In the compilation phase of if, interpreter wont check for the condition.
	It will do all the declarations present in the if statement.
	so a variable is added to the global scope.

	In the execution phase, if condition fails. So variable a is not defined.
	when it prints console statements, as 'a' variable is present in global scope and it's not defined it printed undefined.
	As 'b' variable is not present in global scope, it throwed reference error.
**/

if(false){
	var a=10;
}

console.log(a); // Prints Undefined
console.log(b); // Throws Reference Error: b is not defined.