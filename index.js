let todoInput = document.getElementById('todo')
let addBtn = document.getElementById('add-btn')
let todoList = document.getElementById('todo-list')

addBtn.addEventListener('click',function(){
    if(todoInput.value !== ''){

        //create div and append
        const newTodo = document.createElement('div')
        newTodo.innerHTML = todoInput.value
        todoList.appendChild(newTodo)
        //create delete button and append to each todo item(newtodo) and not todolist
        const delBtn = document.createElement('span')
        delBtn.innerHTML = 'X'
        newTodo.appendChild(delBtn)

    }
    //clear text input
    todoInput.value = '';
    //delete todo

    //select all span elements
    let close = document.querySelectorAll('span')
    //loop through all spans and add event listener on all
    for(let i =0; i< close.length; i++){
        close[i].addEventListener('dblclick',function(){
            //set each parent element(todo item) display to none
            close[i].parentElement.style.display = "none"
            //remove each parent element completely.
            close[i].parentElement.remove()
        })
    }
    for(let i =0; i< close.length; i++){
        close[i].addEventListener('click',function(){
            //set each parent element(todo item) display line through
            close[i].parentElement.style.textDecoration = "line-through"
            
           
        })
    }
})