const express = require("express");
const app = express();
let bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
let jasonParser = bodyParser.json();
const mongoose = require("mongoose");

const Customer = require("./models/customer");
const Employee = require("./models/employee");
const Dealer = require("./models/dealer");
const Purchase = require("./models/purchase");
const Medicine = require("./models/medicine");

const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://raman_111:Raman@111@cluster0.ses56.mongodb.net/medman?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.warn("db dbdbdbdbdb");
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////POST ROUTES//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post("/purchase", jasonParser, function (req, res) {
  let data = new Purchase({
    _id: mongoose.Types.ObjectId(),
    productname: req.body.productname,
    customername: req.body.customername,
    phone: req.body.phone,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  data.save().then((result) => {
    console.warn(result);
    res.end("done");
  });
});

app.post("/customer", jasonParser, function (req, res) {
  let data = new Customer({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
  });

  data.save().then((result) => {
    console.warn(result);
    res.end("done");
  });
});

app.post("/dealer", jasonParser, function (req, res) {
  let data = new Dealer({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
  });

  data.save().then((result) => {
    console.warn(result);
    res.end("done");
  });
});

app.post("/employee", jasonParser, function (req, res) {
  let data = new Employee({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    salary: req.body.salary,
  });
  // console.warn(req);
  data.save().then((result) => {
    console.warn(result);
    res.end("done");
  });
});

app.post("/medicine", jasonParser, function (req, res) {
  let data = new Medicine({
    _id: mongoose.Types.ObjectId(),
    code: req.body.coe,
    name: req.body.name,
    dealername: req.body.dealername,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
  });

  data.save().then((result) => {
    console.warn(result);
    res.end("done");
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////GET ROUTES///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/medicine", (req, res) => {
  Medicine.find().then((data) => {
    res.send(data);
  });
});

app.get("/employee", (req, res) => {
  Employee.find().then((data) => {
    res.send(data);
  });
});

app.get("/dealer", (req, res) => {
  Dealer.find().then((data) => {
    res.send(data);
  });
});

app.get("/purchase", (req, res) => {
  Purchase.find().then((data) => {
    res.send(data);
  });
});

app.get("/customer", (req, res) => {
  Customer.find().then((data) => {
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port go and see on that port", PORT);
});
