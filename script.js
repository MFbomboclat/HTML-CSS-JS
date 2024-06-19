const tar = document.getElementById("add");
            tar.addEventListener("click",addTarea);
            function addTarea() {
                let t = document.getElementById("taskInput").value;
                document.getElementById("task").innerHTML+=
                "<li><h3><input type='checkbox'>"+t+"</h3></li>";
            }
            const del = document.getElementById("delete");
            del.addEventListener("click",delTarea);
            function delTarea() {
                let t = document.getElementById("task");
                let lTask = t.lastChild;
                t.removeChild(lTask);
            }