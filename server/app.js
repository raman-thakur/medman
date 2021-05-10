const express = require("express");
const app = express();
let bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
let jasonParser = bodyParser.json();
const verifyToken = require("./middlewares/authentication");
const mongoose = require("mongoose");
const Customer = require("./models/customer");
const Employee = require("./models/employee");
const Dealer = require("./models/dealer");
const Purchase = require("./models/purchase");
const Medicine = require("./models/medicine");
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const http = require("http");
const cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const saltRounds = 10;
const PORT = 5000;
const jwtkey = "ramanjithakur";

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

mongoose
  .connect(
  //this is because @ are transformed in string
    "mongodb://raman_111:Raman%40111@cluster0-shard-00-00.ses56.mongodb.net:27017,cluster0-shard-00-01.ses56.mongodb.net:27017,cluster0-shard-00-02.ses56.mongodb.net:27017/medman?ssl=true&replicaSet=atlas-21k2bd-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    console.warn("database connected!!!");
  })
  .catch((err) => {
    console.warn(err);
  });


app.get("/", (req, res) => {
  res.send("Hello World");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////POST ROUTES//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post("/register", jasonParser, function (req, res) {
  let data = new User({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
  });

  User.findOne({ email: req.body.email }).then((data) => {
    if (data) res.redirect("http://localhost:3000/");
  });

  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    if (err) throw err;

    data.password = hash;
    data.save().then((result) => {
      jwt.sign(
        { result },
        process.env.jwtkey,
        { expiresIn: "30000d" },
        (err, token) => {
          res.cookie("jwt", token);
          res.redirect("http://localhost:3000/");
        }
      );
    });
  });
});

app.post("/login", jasonParser, function (req, res) {
  User.findOne({ email: req.body.email }).then((data) => {
    if (!data) res.redirect("http://localhost:3000/");

    var password2 = req.body.password;
    bcrypt.compare(password2, data.password, function (err, result) {
      if (result) {
        jwt.sign({ data }, jwtkey, { expiresIn: "30000d" }, (err, token) => {
          res.cookie("jwt", token);
          res.redirect("http://localhost:3000/");
        });
      } else {
        res.redirect("http://localhost:3000/");
      }
    });
  });
});

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
    res.redirect("http://localhost:3000/viewPurchase");
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
    res.redirect("http://localhost:3000/viewCustomer");
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
    res.redirect("http://localhost:3000/viewDealer");
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
    res.redirect("http://localhost:3000/viewEmployee");
  });
});

app.post("/medicine", jasonParser, function (req, res) {
  let data = new Medicine({
    _id: mongoose.Types.ObjectId(),
    code: req.body.code,
    name: req.body.name,
    dealername: req.body.dealername,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
  });

  data.save().then((result) => {
    res.redirect("http://localhost:3000/viewMedicine");
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

app.get("/isloggedin", verifyToken, (req, res) => {
  res.send({
    loggedin: 1,
  });
});

app.get("/customer/:id", jasonParser, (req, res) => {
  const { id } = req.params;
  Customer.findById(id).then((data) => {
    res.send(data);
  });
});

app.get("/purchase/:id", jasonParser, (req, res) => {
  const { id } = req.params;
  Purchase.findById(id).then((data) => {
    res.send(data);
  });
});

app.get("/dealer/:id", jasonParser, (req, res) => {
  const { id } = req.params;
  Dealer.findById(id).then((data) => {
    res.send(data);
  });
});

app.get("/medicine/:id", jasonParser, (req, res) => {
  const { id } = req.params;
  Medicine.findById(id).then((data) => {
    res.send(data);
  });
});

app.get("/employee/:id", jasonParser, (req, res) => {
  const { id } = req.params;
  Employee.findById(id).then((data) => {
    res.send(data);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////PUT ROUTES///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.put("/customer/:id", jasonParser, async (req, res) => {
  let { id } = req.params; //this is for production
  id = id.slice(1, id.length); //this is for running

  const prevcustomer = await Customer.findById(id);
  await Customer.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect("http://localhost:3000/viewCustomer");
});

app.put("/dealer/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  // /console.log(id);
  const prevcustomer = await Dealer.findById(id);
  await Dealer.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect("http://localhost:3000/viewDealer");
});

app.put("/employee/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  // /console.log(id);
  const prevcustomer = await Employee.findById(id);
  await Employee.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect("http://localhost:3000/viewEmployee");
});

app.put("/purchase/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  // /console.log(id);
  const prevcustomer = await Purchase.findById(id);
  await Purchase.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect("http://localhost:3000/viewPurchase");
});

app.put("/medicine/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  // /console.log(id);
  const prevcustomer = await Medicine.findById(id);
  await Medicine.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect("http://localhost:3000/viewMedicine");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////PUT ROUTES///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.delete("/medicine/delete/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  await Medicine.findByIdAndDelete(id);
  res.redirect("http://localhost:3000/viewMedicine");
  // res.send("hii");
});

app.delete("/employee/delete/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  await Employee.findByIdAndDelete(id);
  res.redirect("http://localhost:3000/viewEmployee");
  // res.send("hii");
});

app.delete("/dealer/delete/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  await Dealer.findByIdAndDelete(id);
  res.redirect("http://localhost:3000/viewDealer");
  // res.send("hii");
});

app.delete("/customer/delete/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  await Customer.findByIdAndDelete(id);
  res.redirect("http://localhost:3000/viewCustomer");
  // res.send("hii");
});

app.delete("/purchase/delete/:id", jasonParser, async (req, res) => {
  let { id } = req.params;
  id = id.slice(1, id.length);
  await Purchase.findByIdAndDelete(id);
  res.redirect("http://localhost:3000/viewPurchase");
  // res.send("hii");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////MIDDLEWARES//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.delete("/employee/:id", function (req, res) {
  //destroy blog
  Employee.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.redirect("http://localhost:3000/viewEmployee");
    } else {
      res.redirect("http://localhost:3000/viewEmployee");
    }
  });
  //redirect somewhere
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
