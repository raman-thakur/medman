const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  email: {
    type: String,
    unique: true,
  },
  address: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("users", userSchema);
