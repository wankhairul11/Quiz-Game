const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    players: { type: Array, default: [] },
});

module.exports = mongoose.model('Room', roomSchema);
