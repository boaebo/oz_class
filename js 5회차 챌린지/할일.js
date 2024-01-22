const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = [];


//로컬 저장소 저장

function saveTodos(){
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos", todoString)
}

//로컬 저장소 가져오기

function loadTodos(){
   const myTodos = localStorage.getItem("myTodos")
   todoArr = JSON.parse(myTodos)
   displayTodos()
}

loadTodos()

// 할 일 삭제하기
function handleTodoDelBtnClick(clickedId){
   todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId
    })

    displayTodos()
    saveTodos()
}



// 할 일 수정하기
function handleTodoItemClick(clickedId){
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){
            return {
                ...aTodo, todoDone : !aTodo.todoDone
            }
        }else{
            return aTodo
        }
    })
    displayTodos()
    saveTodos()
}

// 할 일 보여주기

function displayTodos(){
    todoList.innerHTML = ""
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement('li')
        const todoDelBtn = document.createElement('span')
        todoDelBtn.textContent = 'x'
        todoItem.textContent = aTodo.todoText
        todoItem.title = "클릭하면 완료됨"
        todoDelBtn.title = "클릭하면 삭제됨"
 
        if(aTodo.todoDone){
            todoItem.classList.add("done")
        }else{
            todoItem.classList.add("yet")
        }

        todoItem.addEventListener("click", function(){
            handleTodoItemClick(aTodo.todoId)
        })

        todoDelBtn.addEventListener("click", function(){
            handleTodoDelBtnClick(aTodo.todoId)
        })

        todoItem.appendChild(todoDelBtn)
        todoList.appendChild(todoItem)
    })
}




//할 일 추가

todoForm.addEventListener("submit",function(e){
    e.preventDefault()
    const toBeAdded = {
        todoText: todoForm.todo.value,
        todoId: new Date().getTime(),
        todoDone: false
    }
    todoForm.todo.value = ""
    todoArr.push(toBeAdded)
    displayTodos()
})