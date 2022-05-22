require ("dotenv").config()
require("./models/db")
const Film = require("./models/Film")
const express = require('express');
const directors = require('./data/directors.json');

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

app.get('/directors', (req, res) => {
  res.render('pages/directors', {
    directors: directors
  })
});

app.get('/directors/:id', (req, res) => {
  res.render('pages/director', {
  director: directors.find((director)=>{
    if (director.id===+req.params.id) {
      return true;
    } else {
      return false;
    }
  })
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
