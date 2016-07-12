var person1={

	firstname:'venkatesh',
	lastname:'mankena',
	fullname:function(){
		return this.firstname + ' '+ this.lastname
	}

};
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.fullname());