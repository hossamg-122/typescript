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

let product_id:number | string = 22
product_id = "22"

// Enum
// we could define a set of named constants
enum direction_1 {
    up,
    down,
    left,
    right
}
enum direction_2 {
    up="UP",
    down="DOWN",
    left = "LEFT",
    right = "RIGHT"
}
console.log(direction_1.right) // output 3 as it take default values from 0 and we could set values to them

// objects
 
const user:{id:number,name:string} = {id:5,name:"hossam"}
// or

type user = {id:number,name:string}
const user_2:user={id:5,name:"hossam"}

// type assertion
// we could change the type of a variable when we assign it to another one

let cid:any = 1
let customer_id = cid as number
//or
let customer_id1 = <number>cid 

// functions
const addNum = (x:number,y:number):number =>{
return x+y
}
 // if it won't return any thing

 const logMessage = (message:string | number):void =>{
    console.log(message)
    }