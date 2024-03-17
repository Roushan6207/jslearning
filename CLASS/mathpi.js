//console.log(Math.PI)

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descripter)

const chai={
    name:'ginger chai',
    price:245,
    isAvailable:true,
    orderChai:function(){
        console.log("chai nhi bni");

    }
}

 console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
   // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key,value] of Object.entries(chai)) {
    if (typeof val !== 'function'){
        console.log('${key}: ${value}');
    }
    
}

