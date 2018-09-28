const todos = [{
     text:'order cat food',
     completed:true
 },{
    text:'clean kitchen',
    completed:false
},{
    text:'buy food',
    completed:false
},{
    text:'do work',
    completed:false
},{
    text:'Exercise',
    completed:true
}]

const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        }else if(!b.completed && a.completed){
            return 1
        }else{
            return 0
        }
    })
}
const deleteTodos = function(todos, todoText){
    const index = todos.findIndex(function(todo, index){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1){
        todos.splice(index,1)
    }
}

const getThingsTodo = function(todos){
    return todos.filter(function(todo){
        return !todo.completed 
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsTodo(todos))
// deleteTodos(todos, 'buy food')
// console.log(todos)            