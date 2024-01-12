// singleton
// object.create

// object literals
const sym=Symbol("key1")

const jsuser={
    name:"roushan",
    "full name":"roushan singh",
    [sym]:"mykey1",
    age:21,
    location:"bihar",
    email:"roushanrambo@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","sunday"]

}

// console .log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log( typeof jsuser[sym])console .log(jsuser.email)

jsuser.email="roud@gmail.com"
// Object.freeze(jsuser)
jsuser.email="guli@gamil.com"
// console.log(jsuser)

// jsuser.greeting=function(){
//     console.log("hello js user");
// }
// jsuser.greetingtwo=function(){
//     console.log(`hello js user,${this["full name"]}`);
// }



// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());



//&&&&&&&&&& new restart &&&&&&&&&&&&&

// const tinderuser=new object()
const tinderuser={}

tinderuser.id="2345993iq"


// console.log(tinderuser);

  const regularuser={
    email:"roushanrambo@gamil.com",
    fullname:{
        username:{
            firstname:"roushan",
            lastname:"singh"
        }

    }
  }
//   console.log(regularuser.fullname.username.lastname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
//

const obj4={...obj1,...obj2}
// console.log(obj4)

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));












