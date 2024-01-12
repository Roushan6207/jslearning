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



