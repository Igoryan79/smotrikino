require ("dotenv").config()
require("./models/db")
const Film = require("./models/Film")
const Director = require("./models/Director")
const express = require('express');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  res.render('pages/index', {
    films: await Film.find()
  })
});

app.get('/films/:id', async (req, res) => {
    res.render('pages/movie-info', {
    film: await Film.findById(req.params.id)
  })
});

app.get('/directors', async (req, res) => {
  res.render('pages/directors', {
    directors: await Director.find()
  })
});

app.get('/directors/:id', async (req, res) => {
  res.render('pages/director', {
  director: await Director.findById(req.params.id)
})
});

app.get('/films', (req, res) => {  // моя часть кода
  res.render('pages/movie-info', {
    films: films
  })
});

app.get('/contacts', (req, res) => {
    res.send('All contacts');
  });



app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
})
