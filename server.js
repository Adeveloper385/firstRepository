require('dotenv').config();
const express = require('express')
const app = express()
const morgan = require('morgan')
const connection = require('./db.js')

//settings
app.set('port', process.env.PORT || 3001)

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use('/api', require('./routes/routes.js'))

//database connection
connection

//starting server
app.listen(app.get('port'), () => {
    console.log(`listen on port ${app.get('port')}`)
})
