// for each don't return value;

const myNumber=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNum.filter(  (num)=> {
//     return num>4
// })


// const newNums=[]
//     myNum.forEach( (num)=>{
//         if(num>2){
//             newNums.push(num);
//         }

//     })

// console.log(newNums);

//const myNumers=[1,2,3,4,5,6]
//const newNums=myNumers.map(  (num)=>{ return num+10} )

//const newNums=myNumers
           .map( (num)=>num*10)
           .map( (num) =>num+2)
           .filter( (num)=> num>=42)
//console.log(newNums)

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,curval){
//     console.log(`acc: ${acc} and curval;${curval}`)
//     return acc+curval;
// },0)

const myTotal=myNums.reduce( (acc,curval)=>(acc+curval),1)
//console.log(myTotal)


const  shoppingCart=[
    {
        itemname:"js course",
        price:2999,
    },
    {
        itemname:"py course",
        price:999,
    },
    {
        itemname:"c++course",
        price:1000,
    },

]

const pricetopay=shoppingCart.reduce( (acc,item)=> acc+item.price,0);
console.log(pricetopay)















