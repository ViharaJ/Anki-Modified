require('dotenv').config()

const express = require('express')
const app = express()
const setRoutes = require('./routes/studySet')

//middle ware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use(setRoutes)

// listen
app.listen(process.env.PORT, () => {
    console.log('listening!')
})