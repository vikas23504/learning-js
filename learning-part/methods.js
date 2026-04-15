// string methods

// let str = "vikas";
// let newStr = str.toUpperCase();
// console.log(newStr);

// let input = "admin";
// if(input.toUpperCase() === "ADMIN"){
//     console.log("Acess granted");
    
// }

let arr = [{x:1}, {x:2}];

let res = arr.filter((obj) => {
    obj.x += 10;
    return obj.x > 11;
});

console.log(arr);
console.log(res);
