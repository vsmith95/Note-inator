const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');


// call
router.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {

        if (err) throw err;

        res.json(JSON.parse(data));

    });
});

// create
router.post('/api/notes', (req, res) => {
    
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    
    return fs.readFile('db/db.json', 'utf8', (err, data) => {

        if (err) throw err;

        const notes = JSON.parse(data);

        notes.push(newNote);

        fs.writeFile('db/db.json', JSON.stringify(notes), () => {

            res.json(true);

        });
    });
});

// delete
router.delete('/api/notes/:id', (req, res) => {

    const id = req.params.id;

    return fs.readFile('db/db.json', 'utf8', (err, data) => {

        if (err) throw err;

        const notes = JSON.parse(data);
        const deleteNotes = notes.filter(note => id != note.id);

        fs.writeFile('db/db.json', JSON.stringify(deleteNotes), () => {

            res.json(true);
            
        });
    });
});

module.exports = router;