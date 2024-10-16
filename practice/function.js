function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function greeter2(fn) {
    // ...
}
function firstElement(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
// s is of type 'string'
var s = firstElement(["a", "b", "c"]);
// n is of type 'number'
var m = firstElement([1, 2, 3]);
// u is of type undefined
var u = firstElement([]);
//Inference
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
var parsed = map(["1", "2", "3"], function (n) { return parseInt(n); });
