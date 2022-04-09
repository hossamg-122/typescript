"use strict";
let id = 5;
let user_name = "hossam";
let isLogedIn = true;
let x = "unknown type";
let age = 30;
// we defined the array to be number types so we can't push strings to it
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ids.push("hossam");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.push("hossam");
// Tuple
// here we could define type for each element in an array
let person = [1, "hossam", true];
let employee = [
    [1, "hossam"],
    [2, "zizo"],
    [3, "hesham"],
];
// union
// we could add multiple types for each variable
let product_id = 22;
product_id = "22";
// Enum
// we could define a set of named constants
var direction_1;
(function (direction_1) {
    direction_1[direction_1["up"] = 0] = "up";
    direction_1[direction_1["down"] = 1] = "down";
    direction_1[direction_1["left"] = 2] = "left";
    direction_1[direction_1["right"] = 3] = "right";
})(direction_1 || (direction_1 = {}));
var direction_2;
(function (direction_2) {
    direction_2["up"] = "UP";
    direction_2["down"] = "DOWN";
    direction_2["left"] = "LEFT";
    direction_2["right"] = "RIGHT";
})(direction_2 || (direction_2 = {}));
console.log(direction_1.right); // output 3 as it take default values from 0 and we could set values to them
// objects
const user = { id: 5, name: "hossam" };
const user_2 = { id: 5, name: "hossam" };
// type assertion
// we could change the type of a variable when we assign it to another one
let cid = 1;
let customer_id = cid;
//or
let customer_id1 = cid;
// functions
const addNum = (x, y) => {
    return x + y;
};
// if it won't return any thing
const logMessage = (message) => {
    console.log(message);
};
