function customAysn(callback){

	setTimeout(function(){
		 callback();
		console.log('waiting');	

	},10000);
	console.log("inside customAysn");
}

customAysn(function(){console.log('Waiting for 100 secs')});
console.log('no waiting');