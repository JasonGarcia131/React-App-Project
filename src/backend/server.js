const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/Deluxity', ()=>console.log('Connected to Db'), {});

app.listen(3000, ()=> {
    console.log('Server connected on port 3000');
})