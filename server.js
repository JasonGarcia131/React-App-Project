const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/Deluxity', {useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log('Database Connected'));

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.use(cors())

const skuController = require('./src/backend/controllers/skuController')
app.use('/skus',skuController);


app.listen(3005, ()=>{
    console.log('connected to server')
});