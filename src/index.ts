let id: number = 5;
let user_name: string = "hossam";
let isLogedIn: boolean = true;
let x: any = "unknown type";
let age: number = 30;

// we defined the array to be number types so we can't push strings to it
let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ids.push("hossam");

let arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.push("hossam");

// Tuple
// here we could define type for each element in an array
let person: [number, string, boolean] = [1, "hossam", true];

let employee: [number, string][] = [
  [1, "hossam"],
  [2, "zizo"],
  [3, "hesham"],
];

// union
// we could add multiple types for each variable

let product_id: number | string = 22;
product_id = "22";

// Enum
// we could define a set of named constants
enum direction_1 {
  up,
  down,
  left,
  right,
}
enum direction_2 {
  up = "UP",
  down = "DOWN",
  left = "LEFT",
  right = "RIGHT",
}
console.log(direction_1.right); // output 3 as it take default values from 0 and we could set values to them

// objects

const user: { id: number; name: string } = { id: 5, name: "hossam" };

// or

type user = { id: number; name: string };
const user_2: user = { id: 5, name: "hossam" };

// type assertion
// we could change the type of a variable when we assign it to another one

let cid: any = 1;
let customer_id = cid as number;

//or

let customer_id1 = <number>cid;

// functions
// we define the type of the return value
const addNum = (x: number, y: number): number => {
  return x + y;
};
// if it won't return anything we define the typeof output to be void

const logMessage = (message: string | number): void => {
  console.log(message);
};

//Interfaces

// it's like type but you can't use it with primitive types or unions it's preferred to be used with objects
interface userInterface {
  // if we want to make a constant value so it won't be changed if user types for ex. user_1.id = 5
  readonly id: number;
  name: string;
  // if we want to make value of a key to be optional
  age?: number;
}

const user_1: userInterface = {
  id: 1,
  name: "hossam",
};
interface mathFunc {
  (x: number, y: number): number;
}

const add: mathFunc = (x: number, y: number): number => x + y;
const sub: mathFunc = (x: number, y: number): number => x - y;

// classes

interface personInterface {
  id: number;
  job?: string;
  register(): string;
}
class Person implements personInterface {
  // the default of those variables modifiers is public but we could set them to
  // private : which means it's accessible within the class
  // protected : which means it's accessible within the class or any extended class (subclass)
  id: number;
  private name: string;
  protected age: number;
  job?: string;
  constructor(id: number, name: string, age: number, job?: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.job = job;
  }
  register() {
    return `${this.name} is now registered`;
  }
}

const hossam = new Person(1, "hossan", 27);

// subclasses
class Employee extends Person {
  position: string;
  constructor(
    id: number,
    name: string,
    age: number,
    position: string,
    job?: string
  ) {
    super(id, name, age, job);
    this.position = position;
  }
}
const emp = new Employee(1, "zizo", 28, "team leader", "civil engineer");

// generics
// we use it to make generic types

const getArray = <T>(items: T[]): T[] => new Array().concat(items);
let numArr = getArray<number>([1, 2, 3, 4, 5, 6]);
let strArr = getArray<string>(["dfdf", "dfdfdf", "dfdfdf"]);
numArr.push(1);
strArr.push("dfdfdf");
