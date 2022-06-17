const express = require('express');
const router = express.Router();
const sku = require('../models/SkuSchema');

router.get('/', async (req, res) => {
   
    try{
        const allSkus = await sku.find();
        console.log(allSkus)
        res.status(200).json(allSkus)
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;