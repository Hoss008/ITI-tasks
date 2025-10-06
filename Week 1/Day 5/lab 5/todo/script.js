let tasks = [];

document.getElementById("addBtn").addEventListener("click", function () {
  let input = document.getElementById("taskInput");
  let taskName = input.value.trim();

  if (taskName !== "") {
    const task = { name: taskName, status: "not done" };
    tasks.push(task);
    renderTasks();
    input.value = "";
  }
});

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.status === "done" ? "done" : "";

    li.innerHTML = `
      ${task.name}
      <span class="actions">
        <button onclick="markDone(${index})">✅</button>
        <button onclick="deleteTask(${index})">❌</button>
      </span>
    `;

    list.appendChild(li);
  });
}

function markDone(index) {
  tasks[index].status = "done";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
