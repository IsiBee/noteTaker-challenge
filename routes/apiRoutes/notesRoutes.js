const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const {
    validateNote,
    createNote
} = require('../../lib/notes');

const { notes } = require('../../db/db')

router.get('/notes', (req, res) => {
    let results = fs.readFile('../../db/db.json');
    res.json(results);
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