const  User={
    _email:'roj@gmail.com',
    _password:"edfgg",

    get email(){
        return this._email.toUpperCase()

    },
    set email(value){
        this._email=value;
    }

}
const tea=Object.create(User)
console.log(tea.email);
