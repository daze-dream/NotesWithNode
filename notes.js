const { default: chalk } = require('chalk');
const fs = require('fs');
//--------------------------------------------------------

/**utility to get the JSON notes file */
const loadNotes =() => {
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }
    catch (e){
        console.log('No Notes JSON exists. A new file will be generated with the next ADD command.')
        return []
    }
}
 /**utility to save changes to the JSON notes file */
const saveNote = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const getOneNote = (title) => {
    console.log('Fetching note(s) with title ' + title)
    const notes = loadNotes();
    const matchingNotes = notes.filter((note) => note.title === title);
    //console.log(matchingNotes);
    i = 1;
    console.log('Found ' + matchingNotes.length + ' notes... ')
    if(matchingNotes.length > 0)
    {
        matchingNotes.forEach((note) =>{
            console.log(chalk.blue('Note ' + i));
            console.log(chalk.yellow('  Title: ') + note.title + '\n' + chalk.yellow('  Contents: ') + note.body);
            i +=1;
        })
        if(matchingNotes.length > 1)
        {
            console.log(chalk.yellow.inverse('WARNING:') + ' Having notes with duplicate names is not natively supported.' + 
            '\n The ' + chalk.magenta('remove') +' command will delete both notes. ' + 
            '\n If added manually, consider changing the name of duplicate notes or deleting them.')
        }
    }
    else {
        console.log(chalk.red('No notes found with that title. Make sure it is spelled correctly, and that it exists.' +
        ' Use the ' + chalk.magenta('list') +  ' command to see all notes.'))
    }
}

/**Adds a note */
const addNote = (title, body) => {
    console.log('Attempting to add note with... \n Title: ' + title + ' \n Body: ' + body);
    const notes = loadNotes();
    //const duplicates = notes.filter((note) => note.title === title);
    // more efficient way to detect - stops right when a duplicate is found instead still searching even after a match
    const duplicate = notes.find((note) => note.title = title);
    //console.log(duplicates);
    if(!duplicate/*duplicates.length === 0*/) {
        notes.push({
            title: title,
            body: body,
        })
        saveNote(notes)
        console.log(chalk.black.bgGreen('Success!'))

    }
    else {
        console.log(chalk.black.bgRed('Error') +': A note with title '  + title + ' already exists. Cannot create duplicate. \n')
    }

    //console.log(notes)
}

const removeNote =  (title) => {
    console.log('Attempting to remove note with \n Title: ' + title + '\n ...');
    const notes = loadNotes();
    const toKeep = notes.filter( (note) => note.title !== title);
    if(notes.length === toKeep.length)
        console.log(chalk.black.bgRed('Error') + ': No notes were found that matched the title: ' + title + '. Removal unsuccessful.');
    else
    {        
        saveNote(toKeep);
        console.log(chalk.black.bgGreen('Success!'))
    }

}

const listNotes = () => {
    console.log('Attempting to show all notes...')
    const notes = loadNotes();
    i = 1;
    if(notes.length > 0)
    {
        notes.forEach( (note) => {
            console.log(chalk.blue('Note ' + i));
             console.log(chalk.yellow('  Title: ') + note.title + '\n' + chalk.yellow('  Contents: ') + note.body)
             i += 1;
        })
    }
    else
    {
        console.log('No notes have been added.')
    }
}

module.exports = {
    getOneNote: getOneNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
}