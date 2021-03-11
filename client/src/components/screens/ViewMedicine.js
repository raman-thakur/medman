import { react, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";

const ViewMedicine = () => {
  const [medicines, setmedicines] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/medicine").then((data) => {
      const fun = (prop) => {
        return prop.map((x) => {
          return x;
        });
      };
      const arr = fun(Object.values(data.data));
      //   console.log(arr);
      setmedicines(arr);
    });
  }, []);

  if (medicines.length < 1) {
    return (
      <div
        className="hbg"
        style={{ backgroundImage: "url('./images/bg1.jpg')" }}
      >
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div className="hh">
              <a href="addMedicine" style={{ passing: "5px" }}>
                Add Medicine
              </a>
              <a
                href="viewMedicine"
                className="btn1"
                style={{ passing: "5px" }}
              >
                View Medicine
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Medicine Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Medicine Code</th>
                      <th>Medicine Name</th>

                      <th>Dealer Name</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>13A</td>
                      <td>Mohit Raj</td>

                      <td>John</td>
                      <td>RS 4000</td>
                      <td>200</td>
                      <td>For recovery of stomach pain</td>
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
                  Click on a Medicine ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // return <h1>it works</h1>;
    let listelement = [];

    for (var i = 0; i < medicines.length; i++) {
      listelement.push(
        <tr key={i}>
          <td>
            <a href={"http://localhost:3000/medicine/" + medicines[i]._id}>
              {medicines[i]._id}
            </a>
          </td>
          <td>{medicines[i].code}</td>
          <td>{medicines[i].name}</td>
          <td>{medicines[i].dealername}</td>
          <td>{medicines[i].price}</td>

          <td>{medicines[i].description}</td>
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
              <a href="addMedicine" style={{ passing: "5px" }}>
                Add Medicine
              </a>
              <a
                href="viewMedicine"
                className="btn1"
                style={{ passing: "5px" }}
              >
                View Medicine
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Medicine Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Medicine ID</th>
                      <th>Medicine Code</th>
                      <th>Medicine Name</th>

                      <th>Dealer Name</th>
                      <th>Price</th>
                      <th>Description</th>
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
                  Click on a Medicine ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ViewMedicine;
