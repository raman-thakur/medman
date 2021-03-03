const mongoose = require("mongoose");

let customerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  email: {
    type: String,
    unique: true,
  },
  address: { type: String },
  phone: { type: Number },
});

module.exports = mongoose.model("customer", customerSchema);
