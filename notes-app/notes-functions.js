// read existing notes from localstorage
const getSavedNotes = function(){
            //check for existing saved data
    const noteJSON = localStorage.getItem('notes')

    if(noteJSON !== null){
        return JSON.parse(noteJSON)
    }else{
        return []
    }
}

//generate the DOM structure
const generateNoteDOM = function (note){
    const noteEl = document.createElement('p')

    if(note.title.length > 0){
        noteEl.textContent = note.title;
    }else{
        noteEl.textContent = 'unnamed note '
    }

    return noteEl
}

//Render application notes
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
       
        const noteEl = generateNoteDOM(note)
        
        document.querySelector('#notes').appendChild(noteEl)
    })
   
}