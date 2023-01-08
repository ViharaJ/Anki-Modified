const express = require('express')
const router = express.Router()
const sSetController = require('../controllers/studySetController')
const subjectControl = require('../controllers/subjectController')

// Show all subjects
router.get('/', sSetController.getAllCards)

//GET
// show decks under one subject
router.get('/:subject', subjectControl.getAllDecks)

// show cards in a deck --- need to finish implementation
router.get('/:subject/:deck', subjectControl.getDeck)

// test self
router.get('/:subject/:deck/test', (req,res) => {
    res.json({mssg:'testing subject'})
})

//POST
// add a subject
router.post('/', subjectControl.createSubject)

// add a deck
router.post('/:subject', subjectControl.createDeck)

// adding a card
router.post('/:subject/:deck', sSetController.addCard)


//DELETE
// delete a subject
router.delete('/:subject', (req,res) => {
    res.json({mssg:'deleted a card'})
})

// delete a card
router.delete('/:subject/:deck', (req,res) => {
    res.json({mssg:'deleted a card'})
})

//PATCH
// edit a card
router.patch('/:subject/:deck', (req,res) => {
    res.json({mssg:'modified a card'})
})

module.exports = router