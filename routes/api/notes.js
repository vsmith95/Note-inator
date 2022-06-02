const { response } = require('express');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');


// get notes
router.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        response.json(JSON.parse(data));
    });
});

// create note
router.post('/api/notes', (req, res) => {
    
    const newNote = {
        title: req.body.title,
        test: req.body.text,
        id: uuidv4()
    }
    
    return fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile('db/db.json', JSON.stringify(notes), () => {
            response.json(true);
        });
    });
});

module.exports = router