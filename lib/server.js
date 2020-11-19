'use strict';


const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config('.env');
const api = require('./routes/api');

//----------------------

// Global Middleware
app.use(express.json());
app.use(cors());
app.use('/', api);




module.exports = {
    start : () =>{
        let PORT = process.env.PORT || 3000;
        app.listen(PORT, ()=>{
            console.log(`Listen for port ${PORT}`);
        })
    }
}