function multipleBy5(nums){
    return nums*5;
}
multipleBy5.power=10;
// console.log(multipleBy5(3));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser(username,score){
    this.username=username;
    this.score=score;

}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai= new createUser("chai",22);
const  tea= new createUser("tea",34);
chai.increment()
chai.printMe()
tea.printMe()
