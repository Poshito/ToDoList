import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `<!DOCTYPE html>
    <div class="container">
        <h1>Lista de Tareas</h1>
        <form id="task-form">
            <input type="text" id="task-input" placeholder="Añadir nueva tarea">
            <button type="submit" id="add-task">Añadir</button>
        </form>
        <ul id="task-list"></ul>
    </div>
`;
