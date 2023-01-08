const cardModel = require('../models/cardModel') 


// Show all cards
const getAllCards = async(req, res) => {
    const cards = await cardModel.find({})
    res.status(200).json(cards)
}


// Add a new card 
const addCard = async (req, res) => {
    const {question,answer} = req.body
    try {
        const newCard = await cardModel.create({question,answer})
        res.status(200).json(newCard)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

// delete a card

module.exports = {addCard,
                getAllCards}