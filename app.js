const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/contacts', (req, res) => {
    res.send('All contacts');
  });

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
})
