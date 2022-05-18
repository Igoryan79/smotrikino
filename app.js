const express = require('express');
const films = require('./data/films.json');
const directors = require('./data/directors.json');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/index', {
    films: films
  })
});

app.get('/films/:id', (req, res) => {
    res.render('pages/movie-info', {
    film: films.find((film)=>{
      if (film.id===+req.params.id) {
        return true;
      } else {
        return false;
      }
    })
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
