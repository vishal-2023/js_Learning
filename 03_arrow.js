const user = {
    userName:"vishal",
    age:21,
    message: function(){
        console.log(`${this.userName} - a good Software Developer`);
        console.log(this);
    }
}

//user.message()
// output=> vishal - a good Software Developer
// { userName: 'vishal', age: 21, message: [Function: message] }

//user.userName="Tanya";
//user.message()
// output:-> Tanya - a good Software Developer
// { userName: 'Tanya', age: 21, message: [Function: message] }

//console.log(this) => {}

function one(){
    let name="vishal"
    console.log(this.name);
}
//one(); // => undefined

const chai = function() {
    let name = "vishal"
    console.log(this); // bahut sare global object
}
//chai()

                                               //  Arrow Function...
const chais = () => {
    let name = "vishal"
    console.log(this); // {}
}
//chais();

const sum= (num1,num2) => {
    return num1+num2;
}
//console.log(sum(3,4)); ==> 7

const sum1= (num1,num2) => (num1+num2)
//console.log(sum1(3,2)) ==> 5
//curly bracket me return type likhana hoga but () nhi likhna hoga.

const obj=()=> ({user});
console.log(obj())
//object hmesha ( ) lgana hoga retrun krne ke liye
