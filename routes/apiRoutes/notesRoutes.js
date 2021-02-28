const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const {
    validateNote,
    createNote,
    removeNote
} = require('../../lib/notes.js');

let notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // create a unique ID for the note
    req.body.id = uuidv4();

    // req.body data validation
    if (!validateNote(req.body)) {
        res.status(400).send('This note is not properly formatted.');
    }
    else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    // updates the json file and removes the deleted note
    notes = removeNote(id);
    // displays updated notes to front end.
    res.json(notes);

});

module.exports = router;