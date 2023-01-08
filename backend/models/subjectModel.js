const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subjectSchema = new Schema({
    name:{
        type: String,
        unique: true, 
        required: true
    },
    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }]
},{})

module.exports = mongoose.model('Subject', subjectSchema)