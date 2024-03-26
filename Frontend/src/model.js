const mongoose = require('mongoose');



const eventSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    date : {type: Date, required: true},
    cost : {type: Number, required: true},
    
})

//must export game schema to index.js to be able to create schema in post route
module.exports = mongoose.model('Event', eventSchema);