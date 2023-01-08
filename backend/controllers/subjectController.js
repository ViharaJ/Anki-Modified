const subjectModel = require('../models/subjectModel')
const deckModel = require('../models/deckModel')

//show all decks under
const getAllDecks = async(req, res) => {
    const decks = await deckModel.find({})
    res.status(200).json(decks)
}

//create a subject
const createSubject = async (req, res) => {
    const {subjectName,decks} = req.body
    try {
        const newSubject = await subjectModel.create({subjectName,decks})
        res.status(200).json(newSubject)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

 // create a deck 
const createDeck = async(req, res) => {
    const {name, cards} = req.body
    try {
        const newSubject = await deckModel.create({name, cards})
        res.status(200).json(newSubject)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}


module.exports = {createSubject, createDeck, getAllDecks}