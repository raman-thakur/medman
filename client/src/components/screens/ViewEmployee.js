import { react, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";

const ViewEmployee = () => {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employee").then((data) => {
      const fun = (prop) => {
        return prop.map((x) => {
          return x;
        });
      };
      const arr = fun(Object.values(data.data));
      //   console.log(arr);
      setemployees(arr);
    });
  }, []);
  if (employees.length < 1) {
    return (
      <div
        className="hbg"
        style={{ backgroundImage: "url('./images/bg1.jpg')" }}
      >
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div className="hh">
              <a href="addEmployee" style={{ passing: "5px" }}>
                Add Employee
              </a>
              <a
                href="viewEmployee"
                className="btn1"
                style={{ passing: "5px" }}
              >
                View Employee
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Employee Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Employee Name</th>
                      <th>Address</th>
                      <th>Salary/annum</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mohit Raj</td>
                      <td>Mumbai</td>
                      <td>RS 400000</td>
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
                  Click on a Employee ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let listelement = [];

    for (var i = 0; i < employees.length; i++) {
      listelement.push(
        <tr key={i}>
          <td>{employees[i]._id}</td>
          <td>{employees[i].name}</td>
          <td>{employees[i].address}</td>
          <td>{employees[i].salary}</td>
          <td>{employees[i].phone}</td>
          <td>{employees[i].email}</td>
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
              <a href="addEmployee" style={{ passing: "5px" }}>
                Add Employee
              </a>
              <a
                href="viewEmployee"
                className="btn1"
                style={{ passing: "5px" }}
              >
                View Employee
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Employee Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Employee Name</th>
                      <th>Address</th>
                      <th>Salary/annum</th>
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
                  Click on a Employee ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ViewEmployee;
