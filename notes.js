const { default: chalk } = require('chalk');
const fs = require('fs');
//--------------------------------------------------------

/**utility to get the JSON notes file */
const loadNotes = function () {
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }
    catch (e){
        console.log('No Notes JSON exists. A new file will be generated with the next ADD command.')
        return []
    }
}
 /**utility to save changes to the JSON notes file */
const saveNote = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const getNotes = function () {
    const notes = loadNotes();
}

/**Adds a note */
const addNote = function(title, body) {
    console.log('Attempting to add note with... \n Title: ' + title + ' \n Body: ' + body);
    const notes = loadNotes();
    const duplicates = notes.filter((note) => {return note.title === title})
    if(duplicates.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNote(notes)
        console.log(chalk.black.bgGreen('Success!'))

    }
    else {
        console.log(chalk.black.bgRed('Error') +': A note with title'  + title + ' already exists. Cannot create duplicate. \n')
    }

    //console.log(notes)
}

const removeNote = function(title) {
    console.log('Attempting to remove note with \n Title: ' + title + '\n ...');
    const notes = loadNotes();
    const toKeep = notes.filter( (note) => {return note.title !== title;});
    if(notes.length === toKeep.length)
        console.log(chalk.black.bgRed('Error') + 'No notes were found that matched the title: ' + title + '. Removal unsuccessful.');
    else
    {        
        saveNote(toKeep);
        console.log(chalk.black.bgGreen('Success!'))
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}