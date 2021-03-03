const mongoose = require("mongoose");

let medicineSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  code: {
    type: String,
    unique: true,
  },
  dealername: String,
  price: Number,
  description: { type: String },
  stock: { type: Number },
});

module.exports = mongoose.model("medicine", medicineSchema);
