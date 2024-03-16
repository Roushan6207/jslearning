class User{
    constructor(username){
     this.username=username;   

    }
    logMe()
    {
        console.log(`USERNAME is ${this.username}`);
    }

     static createId(){
        return '8539'
    }
}

const roushan=new User("roushan")
 //console.log(roushan.createId())
 class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
        
    }
 }

 const iphone=new Teacher("iphone","rambo@gmail.com")
//iphone.logMe();
console.log(iphone.createId())