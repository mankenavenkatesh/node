var p2 = Promise.resolve("foo"); 
p2.then((res)=> console.log(res));


var p = new Promise(function(resolve, reject) {  
   setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {  
  res += 2;  
  console.log(res);
});


p.then((res)=>console.log(res));