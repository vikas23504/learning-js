// let change = document.getElementById("demo")
//  let btn = document.querySelector(".btn")
 
//  btn.onclick = function para(){
//     change.textContent = "vikas";
//     change.style.color = "red"
//  }

//  let p = document.createElement("p");
// p.textContent = "new para by js";
// document.body.appendChild(p);

// let buton = document.createElement("button")
// buton.textContent ="click me";
// document.body.appendChild(buton)

// buton.style.backgroundColor ="red";
// buton.style.color ="white";
// buton.style.border = "10px solid blue";

// let btns = document.querySelector(".nbtn");
//  btns.addEventListener("mouseover" , function(){
//     btns.style.backgroundColor ="black";
//     btns.style.color = "white"
//  })


let d = new Date();
console.log(d);


function name(){
    console.log("hy i am vikas");
    
}
function full(callback){
    callback()
    console.log("i am 2nd");
    
}

full(name);