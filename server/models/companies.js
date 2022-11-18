const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/adds-add-api", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const companySchema = new Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model("Company", companySchema);

// const cpny = new Company({
//   _id: 1,
//   name: "Levi's",
//   url: "http://levis.com/",
// });

// cpny
//   .save()
//   .then(() => {
//     console.log(cpny);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });
