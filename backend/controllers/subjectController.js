const subjectModel = require('../models/subjectModel')
const deckModel = require('../models/deckModel')

//show all decks under this subject
const getAllDecks = async(req, res) => {
    const decks = await deckModel.find({})
    res.status(200).json(decks)
}

//get a single deck
const getDeck = async (req, res) => {
    const{s, d} = req.params
    console.log(req.params)
    const deck = await deckModel.find({d})
    // get cards now
    res.status(200).json(deck)
    //error if no cards
}

//create a subject
const createSubject = async (req, res) => {
    const {name, decks} = req.body

    try {
        const newSubject = await subjectModel.create({name,decks})
        res.status(200).json(newSubject)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

 // create a deck 
const createDeck = async(req, res) => {
    const {subject} = req.params
    let subjectId = await subjectModel.find({name: subject}, '_id')
    subjectId = subjectId[0]._id
    
    const {name, cards} = req.body
    try {
        const newSubject = await deckModel.create({name, cards, subjectId})
        res.status(200).json(newSubject)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

// delete a deck


module.exports = {createSubject, createDeck, getAllDecks, getDeck}