"use strict";

const express = require("express");
const router = express.Router();
const Employee = require("../models/employee/employee-model");
const Status = require("../models/status/status-model");


// ---------- Routes -----------
// --------Employee --------
// create
router.post("/employee", handlePost);

// read all
router.get("/employee", handleGetAll);

// read one
router.get("/employee/:id", handleGet);

// update
router.put("/employee/:id", handleUpdate);

// delete
router.delete("/employee/:id", handleDelete);

// --------Status --------
// create
router.post("/Status", handlePostStatus);

// read all
router.get("/Status", handleGetAllStatus);

// -------- Handlers ---------
// --------Employee --------

async function handlePost(req, res) {
    console.log("req.body", req.body);
  let record = req.body;

  try {
    let saved = await Employee.create(record);
    res.status(200).json(saved);
  } catch (error) {
    console.log(error);
  }
}


async function handleGetAll(req, res) {
  
    try {
      let readAll = await Employee.get();
      let response = {
          count : readAll.length,
          results: readAll
      }
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }

  

  async function handleGet(req, res) {
    let id = req.params.id;
  
    try {
      let readOne = await Employee.get(id);
      res.status(200).json(readOne);
    } catch (error) {
      console.log(error);
    }
  }

  

  async function handleUpdate(req, res) {
    let id = req.params.id;
    let record = req.body;
  
    try {
      let updated = await Employee.update(id, record);
      res.status(200).json(updated);
    } catch (error) {
      console.log(error);
    }
  }

  
  async function handleDelete(req, res) {
    let id = req.params.id;

  
    try {
      let deleted = await Employee.delete(id);
      res.status(200).json(deleted);
    } catch (error) {
      console.log(error);
    }
  }
  
// --------Status --------
async function handlePostStatus(req, res) {
  
  let record = req.body;

  try {
    let saved = await Status.create(record);
    res.status(200).json(saved);
  } catch (error) {
    console.log(error);
  }
}


async function handleGetAllStatus(req, res) {
  
    try {
      let readAll = await Status.get();
      let response = {
          count : readAll.length,
          results: readAll
      }
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }



  module.exports = router