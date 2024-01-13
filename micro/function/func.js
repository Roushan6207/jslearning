function addtwonum(numb1,numb2){
// let result=(numb1+numb2);

//     // console.log("roushan");
//     return result;
 return (numb1+numb2);


}

const result=addtwonum(2,3)
// console.log("result:",result);

function loginuser(username="gulshan"){
    if(!username){
        console.log("please enter username");
        return ;
    }
    return`${username} just loged in`;
}


// console.log(loginuser("roushan")); 


//@@@ second day  of function ************

 function calculatecartprice(...numb){
    return numb;
 }

 //console.log(calculatecartprice(200,300,700,800));


 const user={
    username:"roushan",
    price:100,
 }

 function handleObject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 handleObject({
    username:"gulshan",
    price:2309
 })

  



