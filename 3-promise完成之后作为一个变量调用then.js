let promise=new Promise(resolve=>{
    setTimeout(()=>{
        console.log('promise fulfilled');
        resolve('hello world');
    },1000);
});
promise.then(value=>{
        console.log(value);
    })
