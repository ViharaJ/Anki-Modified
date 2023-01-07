const express = require('express')
const router = express.Router()
const Card = require('../models/cardModel') 

// Show all study sets
router.get('/', (req, res) => {
    res.json({mssg:'Welcome to the router'})
})

// show cards under one set
router.get('/:subject', (req, res) => {
    res.json({mssg:'looking at subject'})
})

// test self
router.get('/:subject/test', (req,res) => {
    res.json({mssg:'testing subject'})
})

// adding a card
router.post('/:subject', async (req,res) => {
    const {question,answer} = req.body
    try {
        const newCard = await Card.create({question,answer})
        res.status(200).json(newCard)
    } catch (e) {
        res.status(400).json({error: e.message})
    }
})

// delete a card
router.delete('/:subject', (req,res) => {
    res.json({mssg:'deleted a card'})
})

// edit a card
router.patch('/:subject', (req,res) => {
    res.json({mssg:'modified a card'})
})

module.exports = router