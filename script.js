const taskInput = document.querySelector(".task-in input");
// create a input var

// getting local storage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));
function showTodo(){

}
taskInput .addEventListener( "keyup",e =>{
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask){
        if(!todos){
            todos = [];
            // if todos doesn't exist, create a arr to put these elements
        }
        taskInput.value = "";
        let taskInfo = {name: userTask,status:"Em andamento"};
        todos.push(taskInfo);
        localStorage.setItem("todo-list",JSON.stringify(todos));
        showTodo();
    }
});