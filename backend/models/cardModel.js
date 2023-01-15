const mongoose = require('mongoose')

const Schema = mongoose.Schema

// cards are nested in decks, decks are nested in subjects
const CardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    correctAns: {
        type: Number, 
        default: 0
    },
    totalTries:{
        type: Number, 
        default: 0
    }
},{})

module.exports = mongoose.model('Card', CardSchema)