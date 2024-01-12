//array

// const myArray=[0,1,2,3,70]
// const myHeors=["motu-patlu","naggin"]

// const myArray2= new Array (1,2,3,4)
// console.log(myArray2[0]);
// myArray.push(12);
// myArray.pop(0);
myArray.shift();
console.log(myArray.includes(88))
console.log(myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);

console.log("B",myArray);

const myn2=myArray.splice(1,3);
console.log("C",myArray);
console.log(myn2);


// ++++++++++++++++++newarray series  ***************

const marvel_heroes=["thorn","ironman"];
const dc_heroes=["flash","superman"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[2][1]);

const allheroes=[...marvel_heroes,...dc_heroes];
// console.log(allheroes);

const another_array=[1,2,3,[4,5],6,[7,8,[10,11]]]
const new_another_array=another_array.flat(Infinity);
// console.log(new_another_array);




let score1=100;
let score2=200;
let score3=300;

// console.log(Array.of(score1,score2,score3));







 






