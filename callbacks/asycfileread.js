/*
	In below async call, readFile API of fs module is an async API.
	Async API will return back to the caller even if API is waiting for IO response.
	once IO response is received, an event is emitted.
	A central mechanism called event loop which listens for the events will call the event Handler.(The call back function passed)

	How does central mechanism know which is the handler to be called?
	1. the readFile Async API will register the call back function (event handler) with the node js central mechanism.
	


**/

var fs=require('fs');

fs.readFile('input.txt',function(err,data, event){
	console.log("event is -"+event);
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
});
console.log('Program Ended');
