/**
 * @type {import('validator').default} validator
 */
const validator = require('validator')
/**
 * @type {import('chalk').default} chalk
 */
const chalk = require("chalk")
/** 
 * @type {import('yargs').default} yargs
 */
const yargs = require("yargs")
const { string } = require('yargs')
//----------------------
yargs.version('2.1.0')
//console.log(process.argv)

//add, remove, read, list notes commands
yargs.command({
    command: 'add',
    description: 'Adds a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{ 
            describe: 'The note contents',
            demandOption: true,
            type: 'string'
        }

    },
    handler:  function(argv) {
        console.log('Adding note with... \n Title: ' + argv.title + ' \n Body: ' + argv.body)
    }
})
yargs.command({
    command: 'remove',
    description: 'Removes a note',
    handler:  function() {
        console.log('Removing note...')
    }
})
yargs.command({
    command: 'list',
    description: 'Shows all notes',
    handler:  function() {
        console.log('List of all notes...')
    }
})
yargs.command({
    command: 'read',
    description: 'Selects a note to display',
    handler:  function() {
        console.log('Showing selected note...')
    }
})

yargs.parse()
//console.log(yargs.argv)

/* const command = process.argv[2];

if(command === 'add'){
    console.log('Adding note...')
}
else if(command === 'remove') {
    console.log('Removing note...')
} */