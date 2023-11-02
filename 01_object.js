//object creation

const symb=Symbol("key1");

const obj1={
    name:"Vishal",
    "fullname":"vishal singh",
    [symb]:"hllo1",
    age:21,
    email:"vishalsingh23.it@gmail.com",
    location:"Lucknow",
    arr:[1,2,3,4,5]
}
//value access
console.log(obj1.email);  // output-> vishalsingh23.it@gmail.com
console.log(obj1["email"]); // output->vishalsingh23.it@gmail.com
console.log(obj1["fullname"]) //vishal singh

//change value..
obj1.email="asdd@google.com";
console.log(obj1)

//Object.freeze(obj1);//freez object we can not modify array

//adding function into the object
obj1.greet = function(){
    console.log("hello Vishal Singh Apna time aayega");
}
console.log(obj1.greet());// hello Vishal Singh Apna time aayega

