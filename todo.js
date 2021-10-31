const todoform = document.querySelector("#todo");
const todolist = document.querySelector("#todolist");
const todoinput = document.querySelector("#todoinput");
const todobutton = document.querySelector("#todoinsert");
const TODOKEY = "todos";

let toDOs = [];
function savetodo() {
  localStorage.setItem(TODOKEY, JSON.stringify(toDOs));
}

function deletetodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDOs = toDOs.filter((todo) => todo.id != parseInt(li.id));
  savetodo();
}
function hightlite(event) {
  const but = event.target;
  but.innerText = "★";
}
function printtodo(newtodo) {
  const li = document.createElement("li");
  li.id = newtodo.id;
  const span = document.createElement("span");
  span.innerText = newtodo.text;
  const button = document.createElement("button");
  button.innerText = "☆";
  const delbutton = document.createElement("button");
  delbutton.innerText = "X";
  delbutton.addEventListener("click", deletetodo);
  button.addEventListener("click", hightlite);
  li.appendChild(span);
  li.appendChild(button);
  li.appendChild(delbutton);
  todolist.appendChild(li);
}
function handlesubmit(event) {
  event.preventDefault();
  const newto = todoinput.value;
  todoinput.value = "";
  const newtodoObj = {
    text: newto,
    id: Date.now(),
  };
  toDOs.push(newtodoObj);
  printtodo(newtodoObj);
  savetodo();
}

todoform.addEventListener("submit", handlesubmit);
todobutton.addEventListener("click", handlesubmit);

const savedtodos = localStorage.getItem(TODOKEY);
if (savedtodos != null) {
  const parsed = JSON.parse(savedtodos);
  toDOs = parsed;
  parsed.forEach(printtodo);
}
