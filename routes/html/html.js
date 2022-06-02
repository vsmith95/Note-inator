const fs = require('fs');
const path = require('path');
const router = require('express').Router();

// get notes html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// get home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../[ublic/notes.html'));
});

module.exports = router;