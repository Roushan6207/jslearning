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


console.log(loginuser("roushan")); 
