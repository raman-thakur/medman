import React from "react";
import "../../App.css";
import M from "materialize-css";

const AddMedicine = () => {
  return (
    <div className="hbg" style={{ backgroundImage: "url('./images/bg1.jpg')" }}>
      <div class="row">
        <div class="col s12 m8 offset-m2 l8 offset-l2">
          <div className="hh">
            <a href="addMedicine" className="btn1" style={{ passing: "5px" }}>
              Add Medicine
            </a>
            <a href="viewMedicine" style={{ passing: "5px" }}>
              View Medicine
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m8 offset-m2 l8 offset-l2">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <div class="card-title">Add Medicine Details</div>
              <form
                action="http://localhost:5000/medicine"
                method="POST"
                className="form"
              >
                <div className="div1">
                  <label className="label">Code:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="code"
                      id="code"
                      placeholder="medicine code"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Name:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="medicine name"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Dealer:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="dealername"
                      id="dealername"
                      placeholder="dealer name"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Description:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="medicine description"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Price:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="medicine price"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Stock:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="stock"
                      id="stock"
                      placeholder="available stock"
                    />
                  </div>
                </div>
                <button className="button1">Add medicine</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
