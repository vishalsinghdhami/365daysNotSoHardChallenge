/*Is it an Object?
Create a function to check whether the given parameter is an Object or not.

Examples
isObject(function add(x,y) {return x + y}) ➞ true

isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true

isObject(null) ➞ false

isObject("") ➞ false
Notes
Inputs may be null, primitive wrapper types, dates */

function isObject(value) {
    return typeof value === "object" && value !== null;
    // or
    return typeof value === "object" && value !== null;
}