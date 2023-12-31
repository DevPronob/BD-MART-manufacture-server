const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String, // You might want to use a numeric type like Number for price
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    Available: {
        type: String, // You might want to use a numeric type like Number for available quantity
        required: true
    }
});

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;