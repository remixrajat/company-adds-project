const express = require("express");
const Ad = require("../models/ads");

function searchRouter() {
  return express
    .Router({ mergeParams: true })
    .use(express.json())
    .get("/searchData/:id", findData)
    .get("/search", searchData);
}

async function findData(req, res) {
  Ad.findOne({ _id: req.params.id })
    .populate("companyId")
    .exec(function (error, receivedData) {
      if (error)
        res.status(400).json({ success: false, message: error.message });
      else res.status(200).json(receivedData);
    });
}

async function searchData(req, res) {
  Ad.aggregate([
    {
      $lookup: {
        from: "companies",
        localField: "companyId",
        foreignField: "_id",
        as: "companies",
      },
    },
    {
      $match: {
        $or: [
          { primaryText: { $regex: req.query.searchTerm } },
          { headline: { $regex: req.query.searchTerm } },
          { description: { $regex: req.query.searchTerm } },
          { "companies.name": { $regex: req.query.searchTerm } },
        ],
      },
    },
  ]).exec((error, data) => {
    if (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(200).json(data);
    }
  });
}

module.exports = searchRouter;
