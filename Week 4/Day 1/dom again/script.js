var addTaskBtn = document.querySelector("#addBtn");
var tasksUl = document.querySelector("#taskList");
var taskInput = document.querySelector("#taskinput");

var tasksArr = [];

addTaskBtn.addEventListener("click", function () {
  var taskText = taskInput.value;
  var newTask = {
    text: taskText,
  };
  tasksArr.push(newTask);

  displayTasks();
});

function displayTasks() {
  tasksUl.innerHTML = " ";
  for (let i = 0; i < tasksArr.length; i++) {
    var newDiv = document.createElement("div");
    var deletBtn = document.createElement("button");
    var doneBtn = document.createElement("button");
    var txt = document.createElement("p");

    txt.innerText = tasksArr[i].text;

    deletBtn.setAttribute("btnId", i);
    deletBtn.setAttribute("class", "del");
    doneBtn.setAttribute("class", "done");
    doneBtn.setAttribute("btnId", i);

    newDiv.append(deletBtn);
    newDiv.append(doneBtn);
    newDiv.append(txt);

    deletBtn.innerText = "delete";
    doneBtn.innerText = "done";
    tasksUl.appendChild(newDiv);
  }
}

function doneBtn(id) {
  var x = document.querySelector(`button[btnId=${id}]`);
  console.log(x);
}

document.addEventListener("click", function (e) {
  var c = e.target;
  // console.log(c);
  if (c && c.tagName === "BUTTON" && c.classList.contains("del")) {
    // deletBtn(c.getAttribute('btnId'));
  } else if (c && c.tagName === "BUTTON" && c.classList.contains("done")) {
    doneBtn(c.getAttribute("btnId"));
  }
});
