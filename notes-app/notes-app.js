const notes = [{
	title: 'My next trip',
	body: 'I will like to go to Spain'
},{
	title:'Habits to work on',
	body: 'Exercise. Eatiing a bit better'
},{
	title: 'Office modification',
	body: 'Get a new seat'
}]

const filters = {
	searchText: ''
}

const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

	document.querySelector('#notes').innerHTML = ''

	filteredNotes.forEach((note) => {
		const noteEl = document.createElement('p');
		noteEl.textContent = note.title;
		document.querySelector('#notes').appendChild(noteEl)
	})
}

renderNotes(notes, filters)

document.querySelector('#craete-note').addEventListener('click', function(e) {
	e.target.textContent = 'I am a new note';
})

document.querySelector('#remove-all').addEventListener('click', function() {
	document.querySelectorAll('.note').forEach((note) => note.remove())
})

document.querySelector('#search-text').addEventListener('input', function(e) {
	filters.searchText = e.target.value
	renderNotes(notes, filters)	
})