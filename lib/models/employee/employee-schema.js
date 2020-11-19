"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Employee = Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  status: { type: Schema.Types.ObjectId, ref: "Status" },
});

module.exports = mongoose.model("Employee", Employee);
