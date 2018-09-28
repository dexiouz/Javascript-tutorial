const todos = [{
	text: 'order cat food',
	completed: true
}, {
	text: 'clean kitchen',
	completed: false
}, {
	text: 'buy food',
	completed: false
}, {
	text: 'do work',
	completed: false
}, {
	text: 'Exercise',
	completed: true
}]

const filters = {
	searchText: ''
} 

const renderTodos = function(notes, filters) {
	const filteredTodos = todos.filter( function(todo) {
		return todo.text.toLowerCase().includes(fil)
	})
}

const incompleteTodos = todos.filter((todo) => !todo.completed)
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach((todo) => {
	const p = document.createElement('p')
	p.textContent = todo.text
	document.querySelector('body').appendChild(p)
})

document.querySelector('button').addEventListener('click', function(e) {
	console.log('add a new todo')
})

document.querySelector('#new-todo-text').addEventListener('input', function(e) {
	console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
	filters.searchText = e.target.value
})

