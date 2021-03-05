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
              <form action="http://localhost:5000/medicine" method="POST">
                <div>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    placeholder="medicine code"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="medicine name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="dealername"
                    id="dealername"
                    placeholder="Dealer Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="stock"
                    id="stock"
                    placeholder="stock"
                  />
                </div>
                <button style={{ backgroundColor: "green" }}>
                  Add medicine
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
