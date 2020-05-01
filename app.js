const chalk =  require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
          title: {
              describe: 'Note title',
              demandOption: true,
              type: 'string'
            },
          body: {
              describe: 'Note body',
              demandOption: true,
              type: 'string'
          }   
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)   
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note', 
    builder: {
              title: {
                  describe: 'Note title',
                  demandOption: 'true',
                  type: 'string'
              }
    },
    handler( argv ) {
        notes.removeNote( argv.title )
    }
})

// Create list command 
yargs.command({
    command: 'list',
    describe: 'Listing a new note',
   handler() {
       notes.listNotes()
   }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandoption: 'true',
            type: 'string'
        }
    },
    handler( argv ) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)








