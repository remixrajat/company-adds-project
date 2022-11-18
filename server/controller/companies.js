const express = require("express");
const Company = require("../models/companies");

function companyRouter() {
  return express
    .Router({ mergeParams: true })
    .use(express.json())
    .post("/company", createCompany);
}

async function createCompany(req, res) {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(200).json({ success: true, data: company });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

module.exports = companyRouter;
