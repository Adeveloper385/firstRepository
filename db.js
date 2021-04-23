const mongoose = require('mongoose');

const  connection= mongoose.connect(process.env.URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('database is connected'))
    .catch(err => console.log('error: ', err))

module.exports = connection

