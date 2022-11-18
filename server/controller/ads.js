const express = require("express");
const Ad = require("../models/ads");

function adsRouter() {
  return express
    .Router({ mergeParams: true })
    .use(express.json())
    .post("/ad", createAd);
}

async function createAd(req, res) {
  try {
    const ad = new Ad(req.body);
    await ad.save();
    res.status(200).json({ success: true, data: ad });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

module.exports = adsRouter;
