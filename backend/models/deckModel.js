const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DeckSchema = new Schema({
    name:{
        type: String,
        unique:true, 
        required: true
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }], 
    subjectId: {
        type: Schema.Types.ObjectId, 
        required:true
    }, 
    scores: [{
        type: Number
    }], 
    attemptTimes: [{
        type: Number
    }]
},{})

module.exports = mongoose.model('Deck', DeckSchema)