const notes = [{
    title: 'My next trip',
    body: 'I will like to go to Spain'
},{
    title:'Habits to work on',
    body: 'Exercise. Eatiing a bit better'
},{
    title: 'Office modification',
    body: 'Get a new seat'
} ]

const sortNotes = function (notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(b.title.toLowerCase()<a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}


const findNote = function(notes, noteTitle){
  return notes.find(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


 const findNotes = function (notes, query){
    return  notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase()),
              isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch 
    })
 }

 // console.log(findNotes(notes, 'work'))
 

//  const note = findNote(notes, 'Office modification')
//  console.log(note)

// sortNotes(notes)
// console.log(notes)