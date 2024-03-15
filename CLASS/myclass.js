 class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}kahahotm`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


 }
 const chai=new User("rambo","rous@mail.com","098")
 console.log(chai.encryptPassword())
 console.log(chai.changeUsername())

 // behind the scene
 
