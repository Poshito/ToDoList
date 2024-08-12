(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();let i=[];const p=()=>{let o=c.value.trim();if(o){const t={id:crypto.randomUUID(),title:o,completed:!1};i.push(t),u(),o=c.value=""}},m=o=>{i=i.map(t=>t.id===o?{...t,completed:!t.completed}:t),u()},f=o=>{i=i.filter(t=>t.id!==o),u()},u=()=>{a.innerHTML="",i.forEach(r=>{const l=document.createElement("li");l.classList.add("task-item"),l.innerHTML=`
      <span class="${r.completed?"completed":""}">${r.title}</span>
      <button class="toggle-btn" data-id="${r.id}">
        ${r.completed?"Reabrir":"Completar"}
      </button>
      <button class="delete-btn" data-id="${r.id}">Eliminar</button>
    `,a.appendChild(l)}),document.querySelectorAll(".toggle-btn").forEach(r=>{r.addEventListener("click",l=>{const e=l.target.dataset.id;m(e)})}),document.querySelectorAll(".delete-btn").forEach(r=>{r.addEventListener("click",l=>{const e=l.target.dataset.id;f(e)})})},g=o=>{o.preventDefault(),p()};document.querySelector("#app").innerHTML=`<!DOCTYPE html>
    <div class="container">
        <h1>Lista de Tareas</h1>
        <form id="task-form">
            <input type="text" id="task-input" placeholder="Añadir nueva tarea">
            <button type="submit" id="add-task">Añadir</button>
        </form>
        <ul id="task-list">
           
        </ul>
    </div>
`;let c=null,s=null,a=null;c=document.querySelector("#task-input");s=document.querySelector("#add-task");a=document.querySelector("#task-list");s==null||s.addEventListener("click",g);
