import "./style.css";
import { addTaskHandler } from "./functions";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `<!DOCTYPE html>
    <div class="container">
        <h1>Lista de Tareas</h1>
        <form id="task-form">
            <input type="text" id="task-input" placeholder="Añadir nueva tarea">
            <button type="submit" id="add-task">Añadir</button>
        </form>
        <ul id="task-list">
           
        </ul>
    </div>
`;
export let input: HTMLElement | null = null;
export let button: HTMLElement | null = null;
export let list: HTMLElement | null = null;

input = document.querySelector("#task-input");
button = document.querySelector("#add-task");
list = document.querySelector("#task-list");

button?.addEventListener("click", addTaskHandler);
