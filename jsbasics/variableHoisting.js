/*
	In Javascript, variables can be declared even after they are used.
	declarations are pushed up. this is called variable hoisting.

	For eg. in function f() variable is declared after the return statement.
	so it should never be called. It implies, there is no declaration for variable in function f.
	If there is no declaration, the variable will be declared in global scope 
	If it is declared in global scope, it should be available in the last console.
	But it is throwing error - a undefined. This says, out declaration statement after return statement
	is compiled and variable a is added to local scope of so. So it is not available in global scope.

**/



function f(){

	// a=20;
	console.log("inside local scope of function-"+a);
	return 10;
	var a=5;
}

f();
console.log("inside global scope-"+a);
