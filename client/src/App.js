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
import example from "./components/screens/example";
/////////////////////////////////////////////customer updation and delation//////////////////////////////////

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

          <Route path="/customer/:id" component={updateCustomer} />
          <Route path="/dealer/:id" component={updateDealer} />
          <Route path="/medicine/:id" component={updateMedicine} />
          <Route path="/purchase/:id" component={updatePurchase} />
          <Route path="/employee/:id" component={updateEmployee} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
