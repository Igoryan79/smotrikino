const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    "name": String,
    "stars": String,
    "time": Number,
    "imdb": Number,
    "director": String,
    "date": String,
    "poster": String,
    "theme": String,
    "genres": [
        String,
    ],
    "tiser": String,
    "items": [
        {
            "type": {type: String},
            "name": String,
            "date": String,
            "src": String,
        },
    ]
});
const Film = mongoose.model('Film', schema);

module.exports = Film