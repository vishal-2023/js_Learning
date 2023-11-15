const nums=[1,2,3,4,5,6,7,8,9,10]

const newNum= nums.map( (item)=> item*10 );
console.log(newNum); //
// [
//     10, 20, 30, 40,  50,
//     60, 70, 80, 90, 100
// ]

const secondNums = nums.map( (item) => item*10).map( (item) => item+1 );
console.log(secondNums);
// output=>
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ]

const thirdNums= nums.map((item)=> item*10).map((item)=>item+2).filter((item) =>   item>40);
console.log(thirdNums);
// output=>
// [
//     42, 52,  62, 72,
//     82, 92, 102
// ]

