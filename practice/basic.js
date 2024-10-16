// Greets the world.
console.log("Hello world!");
//*******************************************************/
// Explicit Types
//*******************************************************/
// This is an industrial-grade general-purpose greeter function:
function greet1(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
//greet1("Maddison", Date()); //ERROR: Argument of type 'string' is not assignable to parameter of type 'Date'.
greet1("Brendan", new Date());
var msg = "hello there!";
//*******************************************************/
// Erased Types
//*******************************************************/
("use strict");
function greet(person, date) {
    //console.log(
    //  "Hello ".concat(person, ", today is ").concat(date.toDateString(), "!")
    //);
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
