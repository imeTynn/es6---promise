console.log('here we go');
new Promise(reject=>{
    setTimeout(()=>{
        reject('hello');
    },200);
})
.then(function(res){
    console.log(res+'world');
})
