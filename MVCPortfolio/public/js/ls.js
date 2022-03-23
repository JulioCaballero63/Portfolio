const TODO_LIST = "todoList";

function getTodoList() {
    let todoListString = localStorage.getItem(TODO_LIST);

    let todoList = [];

    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }

    return todoList;
}

function saveTodo(todo) {
    let todoList = getTodoList();

    todoList.push(todo);

    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
}

function deleteTodo(id) {
    const todoList = getTodoList();

    let updateList = todoList.filter(todo => todo.id != id);

    localStorage.setItem(TODO_LIST, JSON.stringify(updateList));
}



function select(id) {
    const todoList = getTodoList();
    let task = id.currentTarget;
    let item = task.getAttribute('data-id');

    const found = todoList.find(element => element.id == item);

    console.log(found);
    let x = todoList.indexOf(found);
    console.log(x);



    if (task.innerText === "❌") {
        task.textContent = "";
        task.completed = false;
        task.parentElement.classList.remove("completed");
    } else {
        task.textContent = "❌";
        task.completed = true;
        task.parentElement.classList.add("completed");
    }

    let todo = {
        id: found.id,
        content: found.content,
        completed: task.completed
    };

    console.log(todo);

    todoList.splice(x, 1, todo);

    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));

}


export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    select
}