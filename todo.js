let list = document.querySelector("#list");
let addBtn = document.querySelector("#add");
let closeBtn = document.querySelector("#close");
let ul = document.querySelector("#ul");
let input = document.querySelector(".listInput");


addBtn.addEventListener("click",()=>{
    let newInput = document.createElement("input");
    let newCheck = document.createElement("input");
    //let icon     = document.createElement("i");
    let icon2     = document.createElement("i");
    const lineBreak = document.createElement("br");

    newCheck.type = "checkbox";
    //icon.className = "ri-add-line";
    icon2.className = "ri-close-line";
    newInput.type = "text";
    newInput.placeholder = "your task..";
    newInput.className = "listInput";

    ul.appendChild(newCheck);
    ul.appendChild(newInput);
    //ul.appendChild(icon);
    ul.appendChild(icon2);
    ul.appendChild(lineBreak);

    icon2.addEventListener("click", () => {
        ul.removeChild(newCheck);
        ul.removeChild(newInput);
        ul.removeChild(icon2);
        ul.removeChild(lineBreak);
    });
});




