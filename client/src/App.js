import { react, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useParams } from "react-router";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/screens/Home";
import AddDealer from "./components/screens/AddDealer";
import ViewDealer from "./components/screens/ViewDealer";

import AddMedicine from "./components/screens/AddMedicine";
import ViewMedicine from "./components/screens/ViewMedicine";

import AddEmployee from "./components/screens/AddEmployee";
import ViewEmployee from "./components/screens/ViewEmployee";

import AddCustomer from "./components/screens/AddCustomer";
import ViewCustomer from "./components/screens/ViewCustomer";

import AddPurchase from "./components/screens/AddPurchase";
import ViewPurchase from "./components/screens/ViewPurchase";

import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";

import updateCustomer from "./components/screens/updateCustomer";
import updateDealer from "./components/screens/updateDealer";
import updatePurchase from "./components/screens/updatePurchase";
import updateEmployee from "./components/screens/updateEmployee";
import updateMedicine from "./components/screens/updateMedicine";

/////////////////////////////////////////////customer updation and delation//////////////////////////////////
function User() {
  let { id } = useParams();
  return (
    <div
      className="hbg"
      style={{ backgroundImage: "url('../images/bg1.jpg')" }}
    >
      <div class="row">
        <div class="col s12 m8 offset-m2 l8 offset-l2">
          <div className="hh">
            <a href="addCustomer" className="btn1" style={{ passing: "5px" }}>
              Add Customer
            </a>
            <a href="viewCustomer" style={{ passing: "5px" }}>
              View Customer
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m8 offset-m2 l8 offset-l2">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <div class="card-title">Add Customer Details</div>
              <form
                action="http://localhost:5000/customer"
                method="POST"
                className="form"
              >
                <div className="div1">
                  <label className="label">Name:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      defaultValue={id}
                      placeholder="dealer name"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Email:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="dealer email"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Phone:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="dealer phone no."
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Address:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="dealer address"
                    />
                  </div>
                </div>
                <button className="button1">Add customer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function App() {
  // console.warn("okkkk");

  const [loggedin, setloggedin] = useState(0);
  //let p = 1;
  useEffect(() => {
    axios
      .get("http://localhost:5000/isloggedin", { withCredentials: true })
      .then((props) => {
        setloggedin(props.data.loggedin);
      });
  }, []);

  if (loggedin === 0) {
    return (
      <div>
        <Nav />
        <Login />
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/addDealer" component={AddDealer} />
          <Route exact path="/viewDealer" component={ViewDealer} />

          <Route exact path="/addMedicine" component={AddMedicine} />
          <Route exact path="/viewMedicine" component={ViewMedicine} />

          <Route exact path="/addEmployee" component={AddEmployee} />
          <Route exact path="/viewEmployee" component={ViewEmployee} />

          <Route exact path="/addCustomer" component={AddCustomer} />
          <Route exact path="/viewCustomer" component={ViewCustomer} />

          <Route exact path="/addPurchase" component={AddPurchase} />
          <Route exact path="/viewPurchase" component={ViewPurchase} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route path="/customer/:id" children={updateCustomer} />
          <Route path="/dealer/:id" children={updateDealer} />
          <Route path="/medicine/:id" children={updateMedicine} />
          <Route path="/purchase/:id" children={updatePurchase} />
          <Route path="/employee/:id" children={updateEmployee} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
