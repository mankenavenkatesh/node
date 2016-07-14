// objects are poor man's closures
// Below Counter function is a factory function used to data security.
// It is like class in OOP.
// The variables can be accessed only by the returned object of counter.

function counter(){
	var count=0;
	return {

		getCount:function(){
			return count;
		},

		incrementCount:function(){
			count++;
		}
	}
}

var counter=counter();
console.log(counter.getCount());
counter.incrementCount();
console.log(counter.getCount());