$(function () {

    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todolist = $('#todolist')

    addtodoBtn.click(function () {
        //console.log("Button was clicked")// this function will run when i click the button
        let newTodo = newTodoBox.val()
        //console.log(newTodo)

        //for sending this function to backend
        $.post(
            '/todos/',
            {task: newTodo},
            function (data) {
                todolist.empty();
                for(todo of data) {
                    todolist.append("<li>" + todo.task + "</li>")
                }
            }
        )
    })
   // console.log("Page is loaded")
})// this  function is get called when everything is loaded thts why page is loaded can print after some stuff
// so we write most of the function inside this so that i can be sure that everything is loaded

//console.log("some stuff")