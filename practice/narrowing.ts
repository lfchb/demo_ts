//
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

//Truthiness narrowing
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

function printAll2(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue2(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    return animal;
  }

  return animal;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

let x = Math.random() < 0.5 ? 10 : "hello world!";

x = 1;
console.log(x);

x = "goodbye";
console.log(x);

//x = true; //Type 'boolean' is not assignable to type 'string | number'.

function example() {
  let z: string | number | boolean;

  z = Math.random() < 0.5;
  console.log(z);

  if (Math.random() < 0.5) {
    z = "hello";
    console.log(z);
  } else {
    z = 100;
    console.log(z);
  }
  return z;
}

//****Using type predicates */

// //***Discriminated unions
// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius! ** 2;
//   }
// }

//Mejora
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

//if
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

//switch
function getArea2(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;
  }
}

//Exhaustiveness checking
function getArea3(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
