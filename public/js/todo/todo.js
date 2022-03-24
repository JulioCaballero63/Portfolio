import utils from './utils.js';
import ls from './ls.js';


document.querySelector("#addBtn").onclick = addNewTodo;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;


const input = document.querySelector("#todoInput");

input.addEventListener('keypress', e => {
    if (e.keyCode == '13') addNewTodo();
});

loadTodos();


function addNewTodo(e) {
    const todo = {
        id: Date.now(),
        content: input.value,
        completed: false
    };
    input.value = '';
    const todoItem = createTodoItem(todo);
    ls.saveTodo(todo);
    loadTodos();
}

function createTodoItem(todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = toggleComplete;


    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    document.querySelector('#todos').appendChild(todoDiv);
}

function loadTodos() {
    document.querySelector('#todos').innerHTML = '';

    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoItem(todo);
        addToList(el);
    });
}

function deleteTodo(e) {
    const removeTask = e.currentTarget;
    ls.deleteTodo(removeTask.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}






function toggleComplete(e) {
    ls.select(e);
}


function applyFilter(e) {
    // clear the list
    document.querySelector('#todos').innerHTML = '';

    // declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    // check which filter to apply
    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos);
    }
    else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos;
    }
    else if (e.currentTarget.id == "completedFilter") {
        filteredTodos = utils.completedFilter(allTodos);
    }


    // draw list
    filteredTodos.forEach(todo => {
        const el = createTodoItem(todo)
        addToList(el);
    });
}


