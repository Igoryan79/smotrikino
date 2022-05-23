const mongoose = require("mongoose")
const schema = new mongoose.Schema({
        "name": String,
        "date": String,
        "films": String,
        "foto": String,
        "country": String,
});
const Director = mongoose.model('Director', schema);

module.exports = Director