const express = require('express')
const router = express.Router()
const sSetController = require('../controllers/studySetController')


// Show all study sets
router.get('/', sSetController.getAllCards)

// show cards under one set
router.get('/:subject', (req, res) => {
    res.json({mssg:'looking at subject'})
})

// test self
router.get('/:subject/test', (req,res) => {
    res.json({mssg:'testing subject'})
})

// adding a card
router.post('/:subject', sSetController.addCard)

// delete a card
router.delete('/:subject', (req,res) => {
    res.json({mssg:'deleted a card'})
})

// edit a card
router.patch('/:subject', (req,res) => {
    res.json({mssg:'modified a card'})
})

module.exports = router