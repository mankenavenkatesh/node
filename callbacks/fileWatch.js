var fs=require('fs');
fs.watch('input.txt',function(event, filename){
	console.log('event fired-'+event);
	console.log('event handler-callback function is called');
	console.log('file is changed'+filename);

});
console.log('watch api of fs module registered the callback function for change event with node js event loop');
console.log("watching the file- input.txt");