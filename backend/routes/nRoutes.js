const express = require('express')
const router = express.Router()
const {getNotes, getNote, createNote, updateNote, deleteNote} = require('../controllers/nControllers')
// Get all notes
router.get('/notes', getNotes);

// Get a single note
router.get('/notes/:id', getNote);

// Create a new note
router.post('/notes', createNote);

// Update a note
router.put('/notes/:id', updateNote);

// Delete a note
router.delete('/notes/:id', deleteNote);

module.exports = router