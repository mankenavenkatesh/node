function person(firstname, lastname){
	this.firstname=firstname;
	this.lastname=lastname;
	this.fullname=function(){
		return this.firstname +' '+this.lastname;

	}
}

var person1=new person('venkatesh','mankena');
/*
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.fullname());
**/
for(var property in person1){
	console.log(person1[property]);
}
delete person1.fullname;

var person2=new person('sharath','shashidhar');
console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.fullname());

