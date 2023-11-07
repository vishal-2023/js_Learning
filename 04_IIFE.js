// IIFE => Immedietely Invoked Function Expressions.
// -> jo function immedietly execute ho jaye 
// -> global scope ke variable pollution se problem hoti hai kkayi bar to esase bachane ke liye IIFE ka use krte hai
(function two(){
    console.log(`Hello javaScript`); // output-> Hello javaScript
})();

( (name) => {
    console.log(`hello ${name} , Welcoe to JavaSript..`); //hello vishal , Welcoe to JavaSript.
})("vishal"); //yha pr ; lgana jaruri hai nhi to IIFE ko pata hi nhi chalega ki rukna kab hain..

