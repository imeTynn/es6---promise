new Promise(resolve=>{
    setTimeout(()=>{
       throw new Error('bye');
    },200)
})
.then(value=>{
    console.log('world'+value);
})
.catch(error=>{
    console.log('error',error.message);
})
