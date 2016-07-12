/* object constructor function. used to create prototype(Person)**/
function Person(firstname, lastname){
	this.firstname=firstname;
	this.lastname=lastname;
}

/* javascript father and mother object. the prototype of father and mother is Person**/
var father=new Person('ffirstname','flastname');
var mother=new Person('mfirstname','mlastname');

// adding variable only to father. not to mother.
father.nationality='Indian';

console.log(father.nationality);
console.log(mother.nationality);
console.log("father constructor:"+father.constructor);
console.log("father prototype:"+father.__proto__);
/* adding variable to the Person prototype.
	It will add variable to all the objects created using Person prototype.
**/
	console.log(Person.prototype);
	Person.prototype.language='English';
	console.log(Person.prototype);
	console.log(father.language);
	console.log(mother.language);	