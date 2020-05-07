var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name',
    },
    price: {
        type: Number,
        default: 0.0,
    },
    description: {
        type: String,
        default: '',
    },
});

module.exports = mongoose.model('product', productSchema, 'product');
