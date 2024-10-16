// Greets the world.
console.log("Hello world!");

//*******************************************************/
// Explicit Types
//*******************************************************/
// This is an industrial-grade general-purpose greeter function:
function greet1(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

//greet1("Maddison", Date()); //ERROR: Argument of type 'string' is not assignable to parameter of type 'Date'.
greet1("Brendan", new Date());

let msg = "hello there!";

//*******************************************************/
// Erased Types
//*******************************************************/

("use strict");
function greet(person, date) {
  //console.log(
  //  "Hello ".concat(person, ", today is ").concat(date.toDateString(), "!")
  //);

  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
