let add = document.querySelector(".add");
let input = document.querySelector(".input");
let taskList = document.querySelector(".taskList");

add.addEventListener("click", function(){

    if(input.value.trim() === ""){
        alert("Task empty hai!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = input.value;

    let btnBox = document.createElement("div");
    btnBox.classList.add("buttons");

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Del";
    delBtn.classList.add("delete");

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");

    btnBox.appendChild(editBtn);
    btnBox.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btnBox);
    taskList.appendChild(li);

    input.value = "";

    // ❌ Delete
    delBtn.addEventListener("click", function(){
        li.remove();
    });

    // ✏️ Edit / Rename
    editBtn.addEventListener("click", function(){

        if(editBtn.textContent === "Edit"){
            let newInput = document.createElement("input");
            newInput.value = span.textContent;

            li.replaceChild(newInput, span);

            editBtn.textContent = "Save";
            editBtn.classList.add("save");
        }
        else{
            let newSpan = document.createElement("span");
            let val = li.querySelector("input").value;

            if(val.trim() === ""){
                alert("Empty nahi kar sakte");
                return;
            }

            newSpan.textContent = val;

            li.replaceChild(newSpan, li.querySelector("input"));

            editBtn.textContent = "Edit";
            editBtn.classList.remove("save");
        }

    });

});