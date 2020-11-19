'use strict';

const mongoose = require('mongoose');
const serverModule = require('./lib/server')

const MONGODB_URL = process.env.MONGODB_URL

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  mongoose.connect(MONGODB_URL, mongooseOptions);
  
  serverModule.start();