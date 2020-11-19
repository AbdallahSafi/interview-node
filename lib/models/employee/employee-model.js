"use strict";
const schema = require("./employee-schema");

class Employee {
  constructor() {
    this.schema = schema;
  }

  get(_id) {
    let id = _id ? { _id } : {};
    return this.schema.find(id).populate("status");
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id){
      return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = new Employee;
