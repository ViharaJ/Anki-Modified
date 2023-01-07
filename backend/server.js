require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const setRoutes = require('./routes/studySet')

//middle ware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use(setRoutes)

//connect to db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests on successfull connection
        app.listen(process.env.PORT, () => {
            console.log('listening!')
        })
    })
    .catch((e) => {
        console.log("error in connecting to database")
    })
