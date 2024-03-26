const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    managerName: { type: String, required: true },
    scheduledDateTime: { type: Date, required: true },
    admission: { type: String, required: true },
    description: { type: String, required: true },
    availableSlots: { type: Number, required: true }
});

module.exports = mongoose.model('Game', gameSchema);
