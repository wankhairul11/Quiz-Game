const express = require('express');
const Question = require('../models/Question');
const Room = require('../models/Room');
const router = express.Router();

// Get Questions
router.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find({ category: req.query.category });
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create Room
router.post('/rooms', async (req, res) => {
    try {
        const newRoom = new Room(req.body);
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
