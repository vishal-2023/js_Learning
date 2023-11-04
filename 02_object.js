
const regularUser={
    email:"unknown@gmail.com",
    fullname:{
        userName:{
            first_Name:"Vishal",
            last_Name:"Singh"
        }
    }
}
//console.log(regularUser.fullname.userName.first_Name); // output -> Vishal

const obj1={
    1:"A",
    2:"B"
}

const obj2={
    3:"C",
    4:"D"
}

const obj3={...obj1,...obj2};

console.log(obj3) //output-> { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

console.log(Object.keys(obj3)); //output=> [ '1', '2', '3', '4' ]
console.log(Object.values(obj3)); //output => [ 'A', 'B', 'C', 'D' ]

//     Object Destructuring.....

const course={
    name:"js_tutorial",
    price:"3232",
    tutor:"Vishal",
    address:{
        vill:"phulaha",
        Distric:"Mirzapur"
    }
}

const {price,tutor,address} =course;    //destructure Object...
console.log(price); //output -> 3232
console.log(tutor); //output=> Vishal
console.log(address)