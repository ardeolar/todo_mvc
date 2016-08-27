var todos = ['item 1', 'item 2', 'item 3']

//function to add todos.
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

//function to change todo.
function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
}

//function to delete todo.
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}