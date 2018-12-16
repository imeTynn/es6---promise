console.log('here we go');
new Promise(resolve=>{
    setTimeout(()=>{
       resolve('hello');
    },200);
})
.then(function(res){
    console.log(res+'world');
    return new Promise(resolve=>{
        setTimeout(function(){
            resolve('world')
        },200);
    })
})
.then(value=>{
    console.log(value+'world');
})
