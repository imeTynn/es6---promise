console.log('here we go');
new Promise(resolve=>{
    setTimeout(()=>{
        resolve('hello');
    },200);
})
.then(function(res){
    console.log(res+'world');
})
