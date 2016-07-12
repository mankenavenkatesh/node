// Go through objectInheritance.js before reading this

// defining Animal Object Constructor Function. Every function will have
// prototype property.
function Animal(name){
	this.name=name;
}

/* Creating Animal Object. 
 Every object creation will set __proto__ property of object to prototype property of Animal
 That's how object inherits properties from Animal Prototype
**/
var john=new Animal('john');
console.log(Animal.prototype); // prints Animal {}
console.log(john.__proto__);  // prints Animal {}
console.log(john.age);  // prints undefined as age is present in Animal Prototype

// Adding properties and methods to prototype
Animal.prototype.age=100;
Animal.prototype.getName=function(){
	return this.name;
}

// John object Inherits properties and methods from Animal Prototype
console.log(john.age);
console.log(john.getName());


function Dog(bark){
	this.bark=bark;
}

var snoopy=new Dog('bow bow');
console.log(snoopy.bark);

snoopy.__proto__=john;
console.log(snoopy.name);
console.log(snoopy.age);