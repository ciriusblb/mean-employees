const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log(`dababase is connect`))
    .catch(err => console.log(err));

module.exports = mongoose;