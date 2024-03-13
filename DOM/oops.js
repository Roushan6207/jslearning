// object literals >>>>>>>>>>>>>>>>>>>>

const user={
    username:"roushan",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
       // console.log("got user from database");
      //
       //console.log('Username:${this.username}');
       console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this)



// constructor functions ??????????

function User(username,loginCount,isLoggedIn ){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIN=isLoggedIn;
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}
const userOne=new User("roushan",3,false);
const userTwo= new User("roushan",4,true);
console.log(userOne.constructor);
