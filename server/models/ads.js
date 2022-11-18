const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// mongoose.connect("mongodb://127.0.0.1:27017/adds-add-api", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const adSchema = new Schema({
  _id: {
    type: Number,
  },
  companyId: {
    type: Schema.Types.Number,
    ref: "Company",
    required: true,
  },
  primaryText: {
    type: String,
  },
  headline: {
    type: String,
  },
  description: {
    type: String,
  },
  CTA: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Ad", adSchema);

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
