import React from "react";
import "../../App.css";
import M from "materialize-css";

const Signup = () => {
  return (
    <div className="hbg" style={{ backgroundImage: "url('./images/bg1.jpg')" }}>
      <div class="row">
        <div class="col s12 m8 offset-m2 l8 offset-l2">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <div class="card-title">Add Signup Details</div>
              <form
                action="http://localhost:5000/register"
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
                      placeholder="User name"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Email:</label>
                  <div className="input1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="User email"
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Password:</label>
                  <div className="input1">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                    />
                  </div>
                </div>
                <button className="button1">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
