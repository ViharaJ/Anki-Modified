const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DeckSchema = new Schema({
    subjectName:{
        type: String, 
        required: true
    },
    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }]
},{})

module.exports = mongoose.model('Subject', DeckSchema)