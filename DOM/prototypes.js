let myHeros=["thor","spiderman"]
let heropower={
    thor:"hammer",
      spiderman:"sling",

      getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
      }
}
Array.prototype.heyrou=function(){
    console.log(`mai yha hu `);
}
Object.prototype.roushan=function(){
    console.log(`roushan is present in all object`);
}
//heropower.roushan()
//myHeros.roushan()
//myHeros.heyrou()
//heropower.heyrou()


// ######### inheritance (((((((((((())))))))))))



const User={
    name:"roushan",
    email:"roushanrambo@gmail.com",
}
const  Teacher={
    makeVideo:true,
}
const Teachingsupport={
    isAvailable:false,
}
const TAsupport={
    makeAssignment:true,
    __proto__:Teachingsupport

}
Teacher.__proto__=User

// modern syntax??
Object.setPrototypeOf(Teachingsupport,Teacher)

let anotherUsername="heheh      ";

String.prototype.trueLength=function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`true length is :${this.trim().length}`);
}

anotherUsername.trueLength()
"roushan".trueLength()
"gulshan".trueLength()



