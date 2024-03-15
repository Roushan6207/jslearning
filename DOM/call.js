function SetUsername(username){
    this.username=username;
    console.log("called")
}

function CreateUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai= new CreateUser("tea","roushanrambo@gmail.com","3456")
console.log(chai)