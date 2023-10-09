let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

//ADD TASK
btn.addEventListener("click", add);
inp.addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
        add();
    }
})

function add() {
    if(inp.value=="")
        return;
    let newli = document.createElement("li");
    newli.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    newli.appendChild(delbtn);

    inp.value = "";
    ul.appendChild(newli);
}
//DELETE TASK
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
})