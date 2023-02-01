const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const mainRoutes = require('./src/routes/main')
// set up DB
mongoose
    .connect(
        'mongodb+srv://new-user:phamhac90@cluster0.6zq6hz9.mongodb.net/',
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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/api/', mainRoutes)
// set up port
const port = 3000
// set up route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Project with Nodejs Express and MongoDB',
    })
})
app.listen(port, () => {
    console.log(`Our server is running on port ${port}`)
})