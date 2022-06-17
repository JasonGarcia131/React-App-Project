const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
bin : {
    type: String,
    required: true
},
skus: [{
    itemNumber : {type: String, required : true},
    color: {type: String, required: true},
    qty: {type: Number, required: true}
}],
salesOrders : {type: String}
}, {timestamps: true});

module.exports = mongoose.model('location', LocationSchema);