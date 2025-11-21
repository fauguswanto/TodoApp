const todoForm = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const todoListUl = document.querySelector("#todo-list");

let allTodos = [];
updateTodoListUI();

todoForm.addEventListener("submit", function(e){
    e.preventDefault();                         // untuk membuat form tidak refresh ketika diinput
    addTodo();                                  // memanggil fungsi untuk menambahkan list todo ketika submit form todo
})

function addTodo() {
    const todoText = todoInput.value.trim();    // membuat variable todoText untuk menampung hasil input dari todoInput dan sudah di trim
    if (todoText.length > 0) {                  // kalau length atau isi karakter dari todoInput lebih dari 0
        allTodos.push(todoText);                // push todoText ke array allTodos
        updateTodoListUI();                     // update tampilan todo
        todoInput.value = "";                   // hapus isi kolom todoInput
    }
}

function updateTodoListUI() {
    todoListUl.innerHTML = "";

    allTodos.forEach(todo => {
        const todoItem = createTodoItem(todo);
        todoListUl.append(todoItem);
    })
}

function createTodoItem (todoText) {
    const li = document.createElement("li");
    li.innerText = todoText;
    return li;
}