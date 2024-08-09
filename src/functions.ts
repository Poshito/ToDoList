import { input, list } from "./main";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];

const addTask = (): void => {
  let taskTitle = (input as HTMLInputElement).value.trim();

  if (taskTitle) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskTitle,
      completed: false,
    };
    tasks.push(newTask);
    renderTasks();
    taskTitle = (input as HTMLInputElement).value = "";
  }
};

const toggleTaskCompletion = (id: string): void => {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
};

const deleteTask = (id: string) => {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
};

const renderTasks = () => {
  (list as HTMLUListElement).innerHTML = "";
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">${task.title}</span>
      <button class="toggle-btn" data-id="${task.id}">
        ${task.completed ? "Reabrir" : "Completar"}
      </button>
      <button class="delete-btn" data-id="${task.id}">Eliminar</button>
    `;
    (list as HTMLUListElement).appendChild(taskItem);
  });

  const toggleButtons = document.querySelectorAll(".toggle-btn");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = (e.target as HTMLButtonElement).dataset.id;
      toggleTaskCompletion(id!);
    });
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = (e.target as HTMLButtonElement).dataset.id;
      deleteTask(id!);
    });
  });
};

export const addTaskHandler = (e: MouseEvent) => {
  e.preventDefault();
  addTask();
};
