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

console.log(foo1().bar); // prints hello

console.log(foo2().bar); // prints undefined. In java scripts semi colons are ignored. so return in second function will be return ; {bar:"hello"}