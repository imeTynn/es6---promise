new Promise(resolve=>{
    setTimeout(()=>{
        resolve('hellow')
    },2000);
})
.then(value=>{
    console.log(value);
    //匿名函数自调，调用完之后，执行下一个环节，如果promise没有直接返回一个promise实例，
    (function(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                console.log('mr');
                resolve('merry');
            },2000);
        })
    }());
    return false;
})
.then(function(value){
    console.log(value+'world');
})
