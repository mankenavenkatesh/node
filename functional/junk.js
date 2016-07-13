function foo1(){
	return {
		bar:"hello"
	};
}

function foo2(){
	return 
	{
		bar :"hello"
	}
}

console.log(foo1().bar);

console.log(foo2().bar);