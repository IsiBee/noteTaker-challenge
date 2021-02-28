const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const {
    validateNote,
    createNote
} = require('../../lib/notes.js');

const notes = require('../../db/db.json');

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

module.exports = router;