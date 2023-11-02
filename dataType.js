// primitive type..
const score=100;
const scoreValue=100.3;

const isloggedIn=false;

let name="Hello";
console.log(name);

//non-primitive 
//array
const language=["c","c++","java","pyton"];

//object
const obj1={
    name:"vishal",
    age:"21"
}
console.log(typeof(obj1));
console.log(language[3]);

const obj2=obj1;
obj2.age=43; // here due to refernce type(heap memory) obj1 valuee gets changed.
console.log(obj1.age);
