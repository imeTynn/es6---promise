dosomething().then(function(){
    return dosomethingElse();
})
.then(finalHandler);//1.执行顺序：dosomething---->dosomethingElse---->finalHandler

dosomething().then(function(){
    dosomethingElse();
})
.then(finalHandle);//2.执行顺序：dosomething--> dosomethingEles和finalHandle同时执行


dosomething().then(dosomethingElse()).then(finalHandle);//3.执行属性：dosomething()和dosomethingElse几乎同时执行------finaleHandle

dosomething().then(dosomethingElse).then(finaleHandle);
