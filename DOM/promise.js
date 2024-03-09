// const promiseOne =new Promise(function(resolve,reject){
//     // do an async task
//     //DB calls,cryptography,network
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)
//  })
//  promiseOne.then(function(){
//     console.log("promise consumed");
//  })


//  new Promise(function(resolve,reject){
//     // do an async task
//     //DB calls,cryptography,network
//     setTimeout(function(){
//         console.log('async task 2 is going');
//         resolve()
//     },1000)
//  }).then(function(){
//     console.log("hey i done with my promise");
//  })


//  const promiseThree= new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve({usename: "chai",email:"rous@gmail.com"})
//   },2000)

//  })
//  promiseThree.then(function(user){
//     console.log(user);
//  })


//  const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"roushan",password:"853980"})
//         }
//         else{
//             reject("erroe is there");
//         }

//     },1000)
//  })



//  promiseFour
//  .then((user)=>{
//     console.log(user);
//     return user.username
//  })
//  .then((username)=>{
//     console.log(username);

//  })
//  .catch(function(error){
//     console.log(error);
//  })
//  .finally(()=>console.log("the promise is either resolved or rejcted"))


 const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"456778"})
        }
        else{
            reject("error in the js");
        }

    },1000)


 })

 async function consumepromisefive(){
    try {
        const response=await promiseFive
         console.log(response);
    } catch (error) {
        console.log(error);
        
    }
 }

 consumepromisefive()


fetch('https://api.github.com/users/Roushan6207')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error));




 