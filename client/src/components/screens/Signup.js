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
              <form action="http://localhost:5000/register" method="POST">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <button style={{ backgroundColor: "green" }}>SignUp</button>
              </form>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ paddingRight: "10px" }}>Already have an account?</p>
                <a href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
