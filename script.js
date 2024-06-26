const tar = document.getElementById("add");
tar.addEventListener("click",addTarea);
function addTarea() {
    let t = document.getElementById("taskInput").value;
    if (t!="") {
        document.getElementById("task").innerHTML += 
        "<li><h3>"+t+"<input type='checkbox'></input></h3></li>";
    }
}
const del = document.getElementById("delete");
del.addEventListener("click",delTarea);
function delTarea(event) {
    let t = document.getElementById("task");
    let lTask = t.lastChild;
    t.removeChild(lTask);
}
