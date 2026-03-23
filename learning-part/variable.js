/*
There are  3 typemof variable in js
1. var
2. let 
3. const
*/


// var
/*
- Function scoped hota hai
- Re-declare ho sakta hai
- Update ho sakta hai
- Hoisting hoti hai
*/

var name = "Vikas";
var name = "Rahul";   // re-declare allowed
name = "Amit";        // update allowed

console.log(name);

// 2. let (Modern Way ✅)

/*
- Block scoped hota hai { }
- Re-declare nahi ho sakta
- Update ho sakta hai
*/

let age = 20;
// let age = 25; ❌ error (re-declare not allowed)

age = 25;  // ✔️ update allowed

console.log(age);


// 3. const (Fixed Value)

/*
- Block scoped hota hai
- Re-declare nahi ho sakta
- Update nahi ho sakta
- Value fix hoti hai
*/

const pi = 3.14;
// pi = 3.141; ❌ error (update not allowed)

console.log(pi);


// function scope
/*
Function ke andar jo variable banta hai,
vo sirf us function ke andar hi use ho sakta hai

function test() {
    var a = 10;   // function scope
    console.log(a); // ✔️ accessible
}

test();

// console.log(a); ❌ error (bahar access nahi hoga)
*/


// block scope
/*
Block ka matlab hota hai { }
Jaise: if, loop, function ke andar ka block

Block ke andar jo variable banta hai,
vo sirf us block ke andar hi use hota hai

if (true) {
    let x = 20;
    const y = 30;

    console.log(x, y); // ✔️ block ke andar
}

// console.log(x); ❌ error
// console.log(y); ❌ error
*/