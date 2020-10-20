const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => {
  return `Your notes...`
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse.bold('New note added!'))
  } else {
    console.log(chalk.magenta.inverse.bold('Note title already exists!'))
  }

}

const removeNote = (title) => {
  const notes = loadNotes()
  const noteByTitle = notes.filter((note) => note.title !== title)

  if (notes.length > noteByTitle.length) {
    saveNotes(noteByTitle)
    console.log(chalk.yellow.inverse.bold('Note removed!'))
  } else {
    console.log(chalk.red.inverse.bold('Note not found!'))
  }

}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)

  } catch (error) {
    return [];
  }
}

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.inverse.bold('Your notes'))

  notes.forEach((note) => {
    console.log(note.title)
  })
}

const readNote = (title) => {
  const notes = loadNotes();
  const singleNote = notes.find((singleNote) => singleNote.title === title)

  if (singleNote) {
    console.log(chalk.inverse.bold(singleNote.title))
    console.log(singleNote.body)
  } else {
    console.log(chalk.red.inverse.bold('Note not found'))
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}