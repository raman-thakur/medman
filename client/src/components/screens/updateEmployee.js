import React from "react";
import "../../App.css";
import M from "materialize-css";

const AddEmployee = () => {
  return (
    <div
      className="hbg"
      style={{ backgroundImage: "url('../images/bg1.jpg')" }}
    >
      <div class="row">
        <div class="col s12 m8 offset-m2 l8 offset-l2">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <div class="card-title">Update Employee Details</div>
              <form
                action="http://localhost:5000/employee"
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
                      placeholder="employee name"
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
                      placeholder="employee address"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Salary:</label>
                  <div className="input1">
                    <input
                      type="number"
                      name="salary"
                      id="salary"
                      placeholder="employee salary"
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
                      placeholder="Employee phone no."
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
                      placeholder="Employee email"
                    />
                  </div>
                </div>

                <div className="buttondiv">
                  <button className="button1">Update Employee</button>
                  <button className="button2">delete Employee</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
