let taskInput = document.querySelector(".form input");
let button = document.querySelector(".form button");
let tasksList = document.querySelector("#tasks");
let span = document.querySelector("span");

tasksList.innerHTML = "";
let AllTasks = [];

let render = () => {
    let value = taskInput.value;
    if (value.trim() == '') {
        alert("Error : Enter valid data");
    } else {
        singleTask = {
            task: value.trim(),
        };
        AllTasks.push(singleTask);
        taskInput.value = '';
        read();
        console.log(AllTasks);
    } };

let read = () => {
    tasksList.innerHTML = "";
    span.innerText = AllTasks.length;
    AllTasks.forEach((element, index) => {
        tasksList.innerHTML += `
            <div class="row">
                <div class="caption">
                    <input type="text" value="${element.task}" >
                </div>
                <div class="action">
                    <button onclick="update(${index})"  class="btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="_delete(${index})" class="btn-danger"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        `;
    });
};

let _delete = (index) => {
    AllTasks.splice(index, 1);
    read();
};

let update = (index) => {
    taskInput.value= AllTasks[index].task;
 _delete(index);
}


button.addEventListener("click", render);



//////////       light & dark mood         //////////

let btn = document.querySelector(".btn");
let body = document.querySelector("body");

btn.onclick = function () {
    body.classList.toggle("body-dark");

    if (body.classList.contains("body-dark")) {
        btn.classList.replace("btn-light", "btn-dark");
    } else {
        btn.classList.replace("btn-dark", "btn-light");
    }
}