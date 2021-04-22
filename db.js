const mongoose = require('mongoose');

const user = 'usuario1';
const password = 'AQbXvWqmafPSNMp4'
const database = 'Stock'

const uri = `mongodb+srv://${user}:${password}@cluster0.q3bmf.mongodb.net/${database}?retryWrites=true&w=majority`

const  connection= mongoose.connect(uri, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('database is connected'))
    .catch(err => console.log('error: ', err))

module.exports = connection

