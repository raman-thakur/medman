import { react, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";

const ViewCustomer = () => {
  const [customers, setcustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/customer").then((data) => {
      const fun = (prop) => {
        return prop.map((x) => {
          return x;
        });
      };
      const arr = fun(Object.values(data.data));
      //   console.log(arr);
      setcustomers(arr);
    });
  }, []);

  if (customers.length < 1) {
    return (
      <div
        className="hbg"
        style={{ backgroundImage: "url('./images/bg1.jpg')" }}
      >
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div className="hh">
              <a href="addCustomer" style={{ passing: "5px" }}>
                Add Customer
              </a>
              <a
                href="viewCustomer"
                className="btn1"
                style={{ passing: "5px" }}
              >
                View Customer
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Customer Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Customer ID</th>
                      <th>Customer Name</th>
                      <th>Address</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mohit Raj</td>
                      <td>Mumbai</td>
                      <td>9867541287</td>
                      <td>mohit123@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
                <p
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    color: "gray",
                  }}
                >
                  Click on a Customer ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let listelement = [];

    for (var i = 0; i < customers.length; i++) {
      listelement.push(
        <tr key={i}>
          <td>{customers[i]._id}</td>
          <td>{customers[i].name}</td>
          <td>{customers[i].address}</td>
          <td>{customers[i].phone}</td>
          <td>{customers[i].email}</td>
        </tr>
        //   <h1>{purchases[i].customername}</h1>
      );
    }

    return (
      <div
        className="hbg"
        style={{ backgroundImage: "url('./images/bg1.jpg')" }}
      >
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div className="hh">
              <a href="addCustomer" style={{ passing: "5px" }}>
                Add Customer
              </a>
              <a
                href="viewCustomer"
                className="btn1"
                style={{ passing: "5px" }}
              >
                View Customer
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Customer Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Customer ID</th>
                      <th>Customer Name</th>
                      <th>Address</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>{listelement}</tbody>
                </table>
                <p
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    color: "gray",
                  }}
                >
                  Click on a Customer ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ViewCustomer;
