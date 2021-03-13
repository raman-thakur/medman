import React from "react";
import "../../App.css";
import M from "materialize-css";

const AddCustomer = () => {
  let x = window.location.href;
  x = x.slice(1 + x.lastIndexOf("/"), x.length);
  // return <h2>{x}</h2>;
  // console.log(window.location.href);
  return (
    <div
      className="hbg"
      style={{ backgroundImage: "url('../images/bg1.jpg')" }}
    >
      <div class="row">
        <div class="col s12 m8 offset-m2 l8 offset-l2">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <div class="card-title">Update Customer Details</div>
              <form
                action={"http://localhost:5000/customer/:" + x + "?_method=PUT"}
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
                <div className="buttondiv">
                  <button className="button1">Update customer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
