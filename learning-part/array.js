// array

/**
array k andr hum multiple value ko ek container m daal skte hai
let arrr = [1,3,"vikas",true ,function add(a,b){
return a+b;
}]
 */

// let arr = [1,3,4,7,5,"vikas"]
// // console.log(arr);

// for(let i in arr){
//     console.log (arr[i]);
    
// }


// method of arr

/**
 arr.push(value);  ye last mai value add krta hai
 let arr = [1,2,3];
arr.push(4);

console.log(arr);
 arr.pop(); ye last se value remove krta hai
 let arr = [1,2,3];
arr.pop();

console.log(arr); // [1,2]
 arr.shift() ye first s element dlt krta hai
 let arr = [1,2,3];
arr.shift();

console.log(arr); // [2,3]
 arr.unshift() ye start mai element add krta hai
 let arr = [1,2,3];
arr.unshift(0);

console.log(arr); // [0,1,2,3]

 */


// arr ko string mai convert krne k liye method
/**
 isme basically 2 method hote hai
 1. arr.toString()
 let arr = [1,2,3,"vikas"];

let res = arr.toString();
console.log(res);

2.  arr.join()
 let arr = [1,2,3];

console.log(arr.join("-"));
 */

// Add and remove (Splice)
/*
[1,2,3,4]

splice(1,2)      → [1,4]
splice(1,0,"x")  → [1,"x",2,3,4]
splice(1,1,"x")  → [1,"x",3,4]
 */

// slice 
/*
array ka specific part copy krne k liye
 let arr = [1,2,3,4,5];

let res = arr.slice(1,4);

console.log(res);
*/

// search 
/*
ye hmare element ka index btata hai
let arr = [10,20,30,40];

console.log(arr.indexOf(30));

// include
ye btata hai ki vo element hmare element mai hai ya nhi
*/

// map and filter
/**
 map new RRAY bnata hai
 let arr = [1,2,3];

let res = arr.map(x => x * 2);

console.log(res);

filter condition p data deta hai
let arr = [1,2,3,4];

let res = arr.filter(x => x % 2 === 0);

console.log(res);
 */