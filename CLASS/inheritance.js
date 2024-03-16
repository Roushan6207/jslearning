class User{
    constructor(username){
     this.username=username;   

    }
    logMe()
    {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email
        this.password
    }
    addCourse(){
        console.log(`A new course was added by${this.username}`);
    }



}

const chai= new Teacher("roushan","ramb@gmail.com","123");
chai.addCourse()
const masalachai=new User("masalachai");
//masalachai.addCourse()
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
