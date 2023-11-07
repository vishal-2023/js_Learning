//function creation..

function myName(){
    console.log("Hello This is Vishal  Singh from IIT BOMBAY");
}

//myName();

// function Add(a,b){
//     console.log("Hello javaScript");
//     return a+b;
// }                
// console.log(Add(5,6))   // output => Hello javaScript
//                         //            11

// function Add(a,b){
//     console.log(a+b); //  11

// }                
// const ans = Add(5,6);
// console.log(ans)  // undefined

// function userLogin(name){
//     return `${name} just logged in the System`;
// }
// console.log(userLogin("vishal")) // vishal just logged in the System
// console.log(userLogin())  // undefined just logged in the System


// rest operator...
function findVal(...num1){
    return num1;
}
console.log(findVal(1,2,3,4,5)); // output-> [ 1, 2, 3, 4, 5 ]

const person={
    name:"vishal Singh",
    degree:"M.Tech",
    year:"2026"
}

function Identity(object){
    console.log(`the name of person is ${object.name} and his degree is ${object.degree} and year is ${object.year}`);
}

Identity(person);

const arr=[1,2,3,4,5,6]
function Number(array){
    console.log(`number are ${array[0]}`)
    console.log(array[1]);
}
Number(arr);