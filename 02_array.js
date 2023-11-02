const letter=["A","B","C","D"];
const name= ["Ravi","Shyam","Ram","kanha","vishal","ankit"];
// name.push(letter); //push opertor existing array me he array ko push kar deta hai
// console.log(name); //output => ["Ravi","Shyam","Ram","kanha","vishal","ankit", ["A","B","C","D"] ]

//const newArr=name.concat(letter); //new array me elemert ko concate krta hai
//console.log(newArr); //output => ["Ravi","Shyam","Ram","kanha","vishal","ankit","A","B","C","D" ]

//spred operator => modern days me concat use nhi krte hum spread use krte hai
//spread matlab arr ko spread krdo like kach ka glass lo aur uslo chhod do to wo spread ho jayega.

const newName=[...letter,...name]; // ...=>spred operator
console.log(newName) //output => ["A","B","C","D","Ravi","Shyam","Ram","kanha","vishal","ankit" ]

const allElement=[1,2,3,5,6,[23,43,54,[34,54,33,22,1]]];
const flat=allElement.flat(Infinity);
console.log(flat) //output => [1,  2,  3,  5,  6, 23, 43, 54, 34, 54, 33, 22, 1]

console.log(Array.from("vishal")) //output=> [ 'v', 'i', 's', 'h', 'a', 'l' ]

console.log(Array.from({name: "vishal"})) //output => [] (Interview Specific)...

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)) //output=> [ 100, 200, 300 ]