const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    category: String,
    difficulty: String,
    question: String,
    answers: [String],
    correctAnswer: String,
});

module.exports = mongoose.model('Question', questionSchema);
