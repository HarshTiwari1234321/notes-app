const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
      const notes = loadNotes()
      const duplicateNote = notes.find( (note) => note.title === title )

     if( !duplicateNote)  {
        notes.push({
            title: title,
           body: body 
     })
     
     saveNotes(notes)
     console.log(chalk.inverse.green('New note added!'))
     } else {
         console.log(chalk.inverse.red('Note title taken!'))
      }
     
}

const removeNote = ( title ) => {
     const notes = loadNotes()
     const notesToKeep = notes.filter( ( note ) => note.title !== title )

     if( notes.length > notesToKeep.length )
     {
         console.log(chalk.inverse.green('Note removed!'))
         saveNotes(notesToKeep)
     }
     else {
         console.log(chalk.inverse.red('No note found!')) 
     }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes!'))

    notes.forEach((note) => {
      console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find( (note) => note.title === title )

    if( note ){
       console.log(chalk.inverse(note.title))
       console.log(note.body)
    } else {
        console.log(chalk.inverse.red('Note not found!'))
    }
}

const saveNotes = (notes) => {
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJsON)
} 

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
     addNote: addNote,
     removeNote: removeNote,
     listNotes : listNotes,
     readNote: readNote
}

