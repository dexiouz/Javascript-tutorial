const notes = [{
    title:'My next trip',
    body: 'I would like to go to USA'
}, {
    title:'Habbits to work on',
    body: 'Exercise and self control'
}, {
    title:'Office modification',
    body: 'Make new investment'
}]


const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()){
            return -1
        }else if(b.title.toLocaleLowerCase() < a.title.toLocaleLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}

const findNote = function(notes, noteTitle){
    notes.push('ink')
     return  notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })    
}
const findNotes = function(notes, query){
    return notes.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      return isBodyMatch || isTitleMatch
    })
}
// console.log(findNotes(notes, 'office'))


// const findNote = function(notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })    
//     return notes[index]
// }


// const note = findNote(notes, 'office modification')
// console.log(notes)

sortNotes(notes)
console.log(notes)