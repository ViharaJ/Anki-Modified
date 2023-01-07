const express = require('express')
const router = express.Router()
const sSetController = require('../controllers/studySetController')


// Show all subjects
router.get('/', sSetController.getAllCards)

// show decks under one subject
router.get('/:subject', (req, res) => {
    res.json({mssg:'looking at subject'})
})

// show cards in a deck
router.get('/:subject/:deck', (req, res) => {
    res.json({mssg:'looking at subject'})
})

// test self
router.get('/:subject/:deck/test', (req,res) => {
    res.json({mssg:'testing subject'})
})

// add a subject
router.post('/', (req, res) => {
    res.json({mssg:'creating a subject'})
})

// adding a card
router.post('/:subject/:deck', sSetController.addCard)

// delete a card
router.delete('/:subject/:deck', (req,res) => {
    res.json({mssg:'deleted a card'})
})

// edit a card
router.patch('/:subject/:deck', (req,res) => {
    res.json({mssg:'modified a card'})
})

module.exports = router