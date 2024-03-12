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
