const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mainRoutes = require('./src/routes/main')
// set up DB
mongoose
    .connect(
        'mongodb+srv://new-user1:kieuanh95189@cluster0.zcop1fy.mongodb.net/nodejs1?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log('Database connected')
    })
    .catch((error) => {
        console.log('Error connecting to database')
    })
// set up dependencies
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ }))