//for

for(let i=0;i<10;i++){
    const  element=i;
   // console.log(element);
}

for (let i = 0; i < 10; i++) {
   // console.log(`outerloop value:${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(i+'*' + j + '='  +i*j);
        
    }
    
}


// for of
const arr=[1,2,3,4,5]


for (const iterator of arr) {
   // console.log(iterator);
    
}
const greet="helloduniya"

for (const i of greet) {
   // console.log(`each char is ${i}`)
    
}

// maps

const map=new Map();
map.set('IN',"INDIA")
map.set('RUS',"RUSSIA")
map.set('PAK',"PAKISTAN")
map.set('IN',"INDIA")

// console.log(map);
// console.log(map.size);

for (const [key,value] of map) {
    console.log(key ,':->' ,value);
    
}

const myObject={
    game1:'pubg',
    game2:'callofduty'
}
// for (const [key,value] of myObject) {
//     //console.log(key ,':->' ,value);
    
// }





