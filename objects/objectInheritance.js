function Animal(name){
	this.name=name;
}

var john=new Animal('john');
console.log(john.name);

function Rabbit(color){
	this.color=color;

	this.getName=function(){
		return this.name;
	}
}

var whiteRabbit=new Rabbit('white');
console.log(whiteRabbit.color);

// object inheritance. whiterabbit gets the properties of john animal.
// Animal is a prototype object of rabbit
console.log(whiteRabbit.getName());
whiteRabbit.__proto__=john;
console.log(whiteRabbit.getName());

// To get the Prototype of an object
console.log(Object.getPrototypeOf(whiteRabbit));
