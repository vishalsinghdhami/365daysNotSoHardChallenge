/**
 * 
 * Converting Objects to Arrays
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
 * 
 */
function toArray(obj) {
    let ans =[]
	let objkeys = Object.keys(obj);
    for(let i =0;i<objkeys.length;i++){
      ans.push([objkeys[i],obj[objkeys[i]]])
    }
    return ans;
}