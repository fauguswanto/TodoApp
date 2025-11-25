const todoListUl = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("form");

let allTodos = [];
updateTodoListUI();

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTodo();
})

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        allTodos.push(todoText);
        updateTodoListUI();
        todoInput.value = "";
    }
}

function updateTodoListUI() {
    todoListUl.innerHTML = "";
    allTodos.forEach((todo, todoIndex) => {
        todoItem = createTodoItem(todo, todoIndex);
        todoListUl.append(todoItem);
    })
}

function createTodoItem(todoText) {
    const todoLi = document.createElement("li");
    todoLi.innerText = todoText;
    return todoLi;
}