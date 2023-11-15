// for-Each-loop => to iterate on array

const name=["vishal","Ankit","mishra","usman","arjun"]

// name.forEach( (item) => {
//     console.log(item);
// });
//output=> vishal Ankit mishra usman arjun

const palace =[
    {
        name:"tajmahal",
        place:"Agra"
    },
    {
        name:"RedFort",
        place:"Delhi"
    },
    {
        name:"GateWayIndia",
        place:"Mumbai"
    }
]

palace.forEach((item)=>{
    console.log(item);
})
// output=>
// { name: 'tajmahal', place: 'Agra' }
// { name: 'RedFort', place: 'Delhi' }      
// { name: 'GateWayIndia', place: 'Mumbai' }

palace.forEach((item)=>{
    console.log(item.place)
})
// output=>Agra
// Delhi
// Mumbai
 
// jb bhi hme array ke andar object ke key-value pair ki value ko fetch krna chahte hai tab hm
// for enach ka use kr skte hai..

// for-each-method kuchh bhi value return nhi krta means its result is undefined.
const ans=palace.forEach((item)=>{
    //console.log(item.place)
    return item;
})
console.log(ans); //undefied