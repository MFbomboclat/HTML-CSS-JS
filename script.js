const tar = document.getElementById("add");
tar.addEventListener("click",addTarea);
function addTarea() {
    let t = document.getElementById("taskInput").value;
    if (t!="") {
        document.getElementById("task").innerHTML += 
        "<li><h3>"+t+"<input type='checkbox'></input></h3></li>";
    }
}
function delTarea(event) {
    let tareaElement = event.target.parentNode.parentNode;
    tareaElement.remove();
}
function markAsDone(event) {
    let tareaElement = event.target.parentNode.parentNode;
    tareaElement.classList.add("done");
}