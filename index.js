const textTodo = document.querySelector(".text-todo");
const submitTodo = document.querySelector(".submit-todo");
const taskTodo = document.querySelector(".task-todo");

textTodo.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (textTodo.value === "") {
    submitTodo.disabled = true;
  } else {
    submitTodo.disabled = false;
  }
});

submitTodo.addEventListener("click", (e) => {
  const value = textTodo.value;
  const appendTask = document.createElement("li");
  appendTask.innerHTML = `<span class="text-task">${value}</span>
    <div class="btn-todo">
      <button class="dne-todo">Done</button>
      <button class="rmv-todo">Remove</button>
    </div>`;
  taskTodo.append(appendTask);
  textTodo.value = "";
  submitTodo.disabled = true;
});

taskTodo.addEventListener("click", (e) => {
  if (e.target.classList.contains("dne-todo")) {
    const lineThrough = e.target.parentNode.previousElementSibling;
    lineThrough.style.textDecoration = "line-through 4px solid black";
  }
  if (e.target.classList.contains("rmv-todo")) {
    const removeTodo = e.target.parentNode.parentNode;
    removeTodo.remove();
  }
});
