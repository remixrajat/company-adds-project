const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const companyRouter = require("./controller/companies");
const adsRouter = require("./controller/ads");
const searchRouter = require("./controller/search");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/adds-company-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/company", companyRouter());
app.use("/ad", adsRouter());
app.use("/search", searchRouter());
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
