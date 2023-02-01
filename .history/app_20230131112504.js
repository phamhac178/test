const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const mainRoutes = require('./src/routes/main')
// set up DB
mongoose
    .connect(
        'mongodb+srv://new-user1:phamhac90@cluster0.wnxxduc.mongodb.net/node2?retryWrites=true&w=majority',

        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log('Database connected')
    })
    .catch((error) => { 
        console.log('Error connecting to database')
    })
    //Teamplate engine
app.use(express.static(path.join(__dirname, "src/public")));
app.set("views", path.join(__dirname, "src/resources", "views"));
app.set("view engine", "ejs");
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