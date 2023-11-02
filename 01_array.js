    //    Array in javascript are resizable and mix of data element. its means size are not fixed if we declared 
    //    its size. It makes shallow copy means any change in copy array makes change in actual array.

//array delaration ...

//Type1...
// const my_Arr = [1,23,34,5,6,"vishal"];
// console.log(my_Arr);
// console.log(typeof(my_Arr));

//type2....
// const arr=new Array(1,2,3,4,5,6,7);
// console.log(arr);

//method...
// 1) arr.push(23);
// console.log(arr);
// 2) arr.pop();

// arr.unshift(12); //unshift krne se 12 element index 0 pe add ho jata hai..
// arr.shift(); //shift krne se first element of array delete ho jata hai.. 
// console.log(arr);

// console.log(arr.includes(7)) //return true if value present in array..
// console.log(arr.indexOf(3)); //return index of these value..

// const newArr=arr.join(); // join method hmare array ko string me convert kar deta hai...
// console.log(arr)
// console.log(newArr);//string

// slice and Splice

const arr=[0,1,2,3,4,5,6,7,8];
console.log(arr);
const my_array=arr.slice(1,3); //slice krne se slice print krte hai exluding 3
console.log("slice =>",my_array) // => [1,2]
console.log(arr)                // => [0,1,2,3,4,5,6,7,8]

const newSplice=arr.splice(1,3); //splice krne se slice print krte hai including 3 but actual array me se splice element ko nikal dette hai
console.log(newSplice)  // => [1,2,3]
console.log(arr)        // => [0,4,5,6,7,8]