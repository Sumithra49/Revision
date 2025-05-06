const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const editForm = document.getElementById("editForm");
const editSection = document.getElementById("editSection");

let editTaskId = null;

const API_URL = "http://localhost:8080/tasks";

// Fetch and display tasks
const getTasks = async () => {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
      <strong>${task.title}</strong><br/>
      ${task.description}<br/>
      Status: ${task.status}<br/>
      Due: ${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}
      <div class="actions">
        <button onclick="editTask('${task._id}')">Edit</button>
        <button onclick="deleteTask('${task._id}')">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
};

getTasks();

// Add new task
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const task = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    status: document.getElementById("status").value,
    dueDate: document.getElementById("dueDate").value,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  taskForm.reset();
  getTasks();
});

// Edit task
window.editTask = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  const task = await res.json();
  editTaskId = id;
  document.getElementById("editTitle").value = task.title;
  document.getElementById("editDescription").value = task.description;
  document.getElementById("editStatus").value = task.status;
  document.getElementById("editDueDate").value = task.dueDate
    ? task.dueDate.substring(0, 10)
    : "";
  editSection.style.display = "block";
};

// Update task
editForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const updatedTask = {
    title: document.getElementById("editTitle").value,
    description: document.getElementById("editDescription").value,
    status: document.getElementById("editStatus").value,
    dueDate: document.getElementById("editDueDate").value,
  };

  await fetch(`${API_URL}/${editTaskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });

  editSection.style.display = "none";
  getTasks();
});

// Delete task
window.deleteTask = async (id) => {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) return;

  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  getTasks();
};
