const mongoose = require('mongoose');
const CONNECTION = process.env.CONNECTION;

mongoose.connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});