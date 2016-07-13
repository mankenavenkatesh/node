var readLine=require('readline');
var r1=readLine.createInterface({
	input:process.stdin,
	output:process.stdout,
	terminal:false
});

r1.on('line',function(lin){
	console.log(lin);
})