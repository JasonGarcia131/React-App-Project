const mongoose = require('mongoose');

const SkuSchema = new mongoose.Schema({
    itemNumber : { type: String, require: true },
    color: { type: String, require: true },
    qty: { type: Number, require: true},
    location: {type: String, default: 'Not Scanned'} 
}, {timestamps: true});

module.exports = mongoose.model('sku', SkuSchema);