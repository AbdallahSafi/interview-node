"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Status = Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Status", Status);
