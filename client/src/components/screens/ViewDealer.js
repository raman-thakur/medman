import { react, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";

const ViewDealer = () => {
  const [dealers, setdealers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dealer").then((data) => {
      const fun = (prop) => {
        return prop.map((x) => {
          return x;
        });
      };
      const arr = fun(Object.values(data.data));
      //   console.log(arr);
      setdealers(arr);
    });
  }, []);

  if (dealers.length < 1) {
    return (
      <div
        className="hbg"
        style={{ backgroundImage: "url('./images/bg1.jpg')" }}
      >
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            {" "}
            <div className="hh">
              <a href="addDealer" style={{ passing: "5px" }}>
                Add Dealer
              </a>
              <a href="viewDealer" className="btn1" style={{ passing: "5px" }}>
                View Dealer
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Dealer Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Dealer ID</th>
                      <th>Dealer Name</th>
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
                  Click on a Dealer ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let listelement = [];

    for (var i = 0; i < dealers.length; i++) {
      listelement.push(
        <tr key={i}>
          <td>
            <a href={"http://localhost:3000/dealer/" + dealers[i]._id}>
              {dealers[i]._id}
            </a>
          </td>
          <td>{dealers[i].name}</td>
          <td>{dealers[i].address}</td>
          <td>{dealers[i].phone}</td>
          <td>{dealers[i].email}</td>
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
            {" "}
            <div className="hh">
              <a href="addDealer" style={{ passing: "5px" }}>
                Add Dealer
              </a>
              <a href="viewDealer" className="btn1" style={{ passing: "5px" }}>
                View Dealer
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Dealer Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Dealer ID</th>
                      <th>Dealer Name</th>
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
                  Click on a Dealer ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ViewDealer;
