const mongoose = require("mongoose");

let purchaseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productname: { type: String },
  customername: { type: String },
  phone: {
    type: String,
  },
  price: Number,
  quantity: { type: Number },
});

module.exports = mongoose.model("purchase", purchaseSchema);
