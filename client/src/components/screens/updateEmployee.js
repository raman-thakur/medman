import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";

const AddEmployee = () => {
  const [name, setname] = useState("raman");
  const [email, setemail] = useState("@gmail");
  const [address, setaddress] = useState("burdwan");
  const [phone, setphone] = useState("123123123213");
  const [salary, setsalary] = useState(2212);

  let x = window.location.href;
  x = x.slice(1 + x.lastIndexOf("/"), x.length);

  useEffect(() => {
    console.log("called useeffect");
    axios.get("http://localhost:5000/employee/" + x).then((prop) => {
      setname(prop.data.name);
      setemail(prop.data.email);
      setaddress(prop.data.address);
      setphone(prop.data.phone);
      setsalary(prop.data.salary);
    });
  }, [x]);

  function namehandler(e) {
    setname(e.target.value);
  }
  function emailhandler(e) {
    setemail(e.target.value);
  }
  function phonehandler(e) {
    setphone(e.target.value);
  }
  function salaryhandler(e) {
    setsalary(e.target.value);
  }
  function addresshandler(e) {
    setaddress(e.target.value);
  }
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
                action={"http://localhost:5000/employee/:" + x + "?_method=PUT"}
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
                      value={name}
                      onChange={namehandler}
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
                      value={address}
                      onChange={addresshandler}
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
                      value={salary}
                      onChange={salaryhandler}
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
                      value={phone}
                      onChange={phonehandler}
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
                      value={email}
                      onChange={emailhandler}
                    />
                  </div>
                </div>

                <div className="buttondiv">
                  <button className="button1">Update Employee</button>
                  <form
                    className="formdelete"
                    action={
                      "http://localhost:5000/employee/delete/:" +
                      x +
                      "?_method=DELETE"
                    }
                    method="POST"
                  >
                    <button className="button2">Delete employee</button>
                  </form>
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
