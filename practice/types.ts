/*******************************************************************/
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const a: number = obj;

//Type annotation to explicitly specify the type of the variable
let myName2: string = "Alice";

/*******************************************************************/
//Functions
/*******************************************************************/
// Parameter type annotation
function greet3(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

//greet(42); //Argument of type 'number' is not assignable to parameter of type 'string'.

//Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

//Functions Which Return Promises
async function getFavoriteNumber2(): Promise<number> {
  return 26;
}

//Anonymous Functions
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

/*******************************************************************/
//Object Types
/*******************************************************************/
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//Optional Properties.- To specify that some or all of their properties are optional. To do this, add a ?
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printName2(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  //console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

//********Defining a Union Type
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });

//*************Working with Union Types */
//---TypeScript will only allow an operation if it is valid for every member of the union
function printId2(id: number | string) {
  //console.log(id.toUpperCase()); //Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
}

//Solution
function printId3(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

//Another example is to use a function like Array.isArray:
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

/*******************************************************************/
//Type Aliases
/*******************************************************************/
type Punto = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord2(pt: Punto) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

/*******************************************************************/
//Interface
/*******************************************************************/
interface Point {
  x: number;
  y: number;
}

function printCoordinate(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordinate({ x: 100, y: 100 });

/*******************************************************************/
//Type Assertions
/*******************************************************************/

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

//You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

/*******************************************************************/
//Literal Types
/*******************************************************************/
let changingString = "Hello World";
changingString = "Hola Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;

const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;

//***********Literal Inference

declare function handleRequest(url: string, method: "GET" | "POST"): void;

//const req = { url: "https://example.com", method: "GET" };
//handleRequest(req.url, req.method);

//1.
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");

//2.
const req2 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req2.method);

/*******************************************************************/
//null and  undefined
/*******************************************************************/
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

//Non-null Assertion Operator (Postfix !)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
