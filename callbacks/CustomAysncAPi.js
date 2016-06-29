function customAysn(callback){

	setTimeout(function(){
		// callback();
		console.log('waiting');	
	},100);
}

customAysn(function(){console.log('Waiting for 100 secs')});
console.log('no waiting');