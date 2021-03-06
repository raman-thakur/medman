const mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  email: {
    type: String,
    unique: true,
  },
  address: { type: String },
  phone: { type: String },
  salary: { type: Number },
});

module.exports = mongoose.model("employee", employeeSchema);
