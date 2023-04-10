const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 4000;

const nRoutes = require('./routes/nRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/notepad', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use('/api/notes', nRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))