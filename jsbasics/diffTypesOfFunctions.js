f();
function f(){
	console.log('this type of function will be initialized in compilation stage only');	
}

g();

var g=function(){
	console.log('In global scope variable g is declared but not initialized. So its value will be undefined');
}

g();

