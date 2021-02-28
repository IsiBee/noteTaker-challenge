const fs = require('fs');
const path = require('path');

// There is data validation on the front end with the removal of the save icon.
// but I have added additional verification here just to be safe.
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

function createNote(body, notesArray) {
    const note = body;
    // adds new note to the Notes array
    notesArray.push(note);
    // adds the new note to the db.json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return note;
};

function removeNote(noteId) {
    // Read the data from db.json
    let rawdata = fs.readFileSync(path.join(__dirname, '../db/db.json'));
    // parses data
    let notes = JSON.parse(rawdata);
    // filters out the note with the deleted ID
    const updatedNotesArray = notes.filter(noteObj => noteId !== noteObj.id);
    // writes the new array to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(updatedNotesArray, null, 2)
    );

    return updatedNotesArray;
};

module.exports = {
    validateNote,
    createNote,
    removeNote
};