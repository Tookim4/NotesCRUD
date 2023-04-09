const express = require('express')
const app = express()
const uuid = require('uuid')
const bodyParser = require('body-parser');
const asyncHandler = require('express-async-handler')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Note = require('../models/nModel')

//get all notes
const getNotes = asyncHandler(async(req, res) => {
    const notes = await Note.find({});
    res.json(notes)
})

//get one note
const getNote = asyncHandler(async(req, res) => {
//     const note = await Note.findById({id : req.params.id});

//   if (note) {
//     res.send(note);
//   } else {
//     res.status(404).send({ message: 'Note not found' });
//   }
})

//create a note
const createNote = asyncHandler(async(req, res) => {
    const note = await Note.create({
        id: uuid.v4(),
        title: req.body.title,
        content: req.body.content,
      });
    
      res.send({ message: 'Note created successfully', note });
})

const updateNote = asyncHandler(async(req,res) =>{
    const note = Note.find(req.params.id);

    if (note) {
      note.title = req.body.title || note.title;
      note.content = req.body.content || note.content;
  
      res.send({ message: 'Note updated successfully', note });
    } else {
      res.status(404).send({ message: 'Note not found' });
    }
})

const deleteNote = asyncHandler(async(req,res) =>{
    const index = notes.findIndex((n) => n.id === req.params.id);

  if (index !== -1) {
    notes.splice(index, 1);

    res.send({ message: 'Note deleted successfully' });
  } else {
    res.status(404).send({ message: 'Note not found' });
  }
})

module.exports = {getNote, getNotes, createNote, updateNote, deleteNote}