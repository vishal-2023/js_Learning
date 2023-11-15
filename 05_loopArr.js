// Array specific loop...
// ["","","",""]
// [{},{},{}]
 
// 1 -> for-of loop

const arr=[1,2,3,4,5,5,6];
for (const i of arr) {
   // console.log(i); // 1,2,3,4,5,5,6
}

const name="vishal singh"; // v   s
for (const char of name) { // i   i
  //  console.log(char);     // s   n
}                          // h   g
                           // a   h
                           // l

// jab hme array ke uper iterate krna hota hai tab hmm for-of loop ka use krte hai but ye kaam
// nhi krta means error deta hai when iterate on object through object

// for-in loop => use to iterate on object;
// not to iterate on array...

const obj1={
    1:"Vishal Singh",
    2:"vishalsingh23.it@gmail.com",
    3:"12143434545",
    4:"Lucknow"
}

for (const key in obj1) {
    console.log(`${key} -> ${obj1[key]}`)
}
// output-> 
// 1 -> Vishal Singh
// 2 -> vishalsingh23.it@gmail.com
// 3 -> 12143434545
// 4 -> Lucknow

