/* Hello World Application in Node Js.  
Three steps in creating a node js application.
1. Import node js required modules using require directive
2. create a server which listens to client requests
3. read the request and return the response
Run this command to execute. node HelloWorld.js */

// require directive will return the instance of HTTP object from http module.
var http=require('http');

//create a http server
http.createServer(function(request,response){
	// ALways send the header with 200 ok and content type
	response.writeHead(200,{'Content-Type':'text/plain'});
	// Send the response body as Hello World
	response.end('Hello World');
}).listen(8881);

console.log("Hello World Node JS Application Running at http://127.0.0.1:8881/");

