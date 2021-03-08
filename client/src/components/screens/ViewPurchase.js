import { react, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";

const ViewPurchase = () => {
  const [purchases, setpurchases] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/purchase").then((data) => {
      const fun = (prop) => {
        return prop.map((x) => {
          return x;
        });
      };
      const arr = fun(Object.values(data.data));
      //   console.log(arr);
      setpurchases(arr);
    });
  }, []);

  if (purchases.length < 1) {
    return (
      <div
        className="hbg"
        style={{ backgroundImage: "url('./images/bg1.jpg')" }}
      >
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div className="hh">
              <a href="addPurchase" style={{ passing: "5px" }}>
                Add Purchase
              </a>
              <a
                href="viewPurchase"
                className="btn1"
                style={{ passing: "5px" }}
              >
                View Purchase
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Purchase Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Customer Name</th>
                      <th>Phone Number</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nice</td>
                      <td>Mohit Raj</td>
                      <td>9876542378</td>
                      <td>RS 4000</td>
                      <td>200</td>
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
                  Click on a Purchase ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let listelement = [];

    for (var i = 0; i < purchases.length; i++) {
      listelement.push(
        <tr key={i}>
          <td>{purchases[i].productname}</td>
          <td>{purchases[i].customername}</td>
          <td>{purchases[i].phone}</td>
          <td>{purchases[i].price}</td>
          <td>{purchases[i].quantity}</td>
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
              <a href="addPurchase" style={{ passing: "5px" }}>
                Add Purchase
              </a>
              <a
                href="viewPurchase"
                className="btn1"
                style={{ passing: "5px" }}
              >
                View Purchase
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l8 offset-l2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text res">
                <div class="card-title">Purchase Details</div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Customer Name</th>
                      <th>Phone Number</th>
                      <th>Price</th>
                      <th>Quantity</th>
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
                  Click on a Purchase ID to Update or Delete the record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    // return <div>{listelement}</div>;
  }
};

export default ViewPurchase;
