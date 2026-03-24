let add  = document.querySelector(".add");
let dlt = document.querySelector(".dlt")
let input = document.querySelector(".input");
let container = document.querySelector(".container");
let rename = document.querySelector(".rename");




add.addEventListener("click", function(){
     if(input.value === ""){
    alert("input is empty")
}else{

    let p = document.createElement("p");
    p.textContent = input.value;
    document.querySelector(".container").appendChild(p);
    input.value = ""
    }
    
})

dlt.addEventListener("click", function(){

    

    if(container.lastElementChild.tagName ==="P"){
        container.lastElementChild.remove(); 
    }

});

rename.addEventListener("click", function(){
    let last = container.querySelector("p:last-child");
    if(last){ 
        input.value = last.textContent;
    }
});
