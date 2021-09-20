const fs = require('fs');
//--------------------------------------------------------
const loadNotes = function () {
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }
    catch (e){
        console.log('No Notes JSON exists. A new file will be generated with the next ADD command.')
        return []
    }
}

const saveNote = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const getNotes = function () {
    const notes = loadNotes();
}

/**Adds a note */
const addNote = function(title, body) {
    console.log('Adding note with... \n Title: ' + title + ' \n Body: ' + body);
    const notes = loadNotes();
    const duplicates = notes.filter((note) => {return note.title === title})
    if(duplicates.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNote(notes)
        console.log('Success!')

    }
    else {
        console.log('Error: A note with title ' + title + ' already exists. Cannot create duplicate. \n')
    }

    //console.log(notes)
}

const removeNote = function(title) {
    console.log('Attempting to remove note with \n Title: ' + title + '\n ...');
    //const notes = loadNotes();
    


}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}