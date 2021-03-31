import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";

function AddDealer() {
  const [name, setname] = useState("raman");
  const [email, setemail] = useState("raman");
  const [address, setaddress] = useState("raman");
  const [phone, setphone] = useState("raman");

  let x = window.location.href;
  x = x.slice(1 + x.lastIndexOf("/"), x.length);

  useEffect(() => {
    console.log("called useeffect");
    axios.get("http://localhost:5000/dealer/" + x).then((prop) => {
      setname(prop.data.name);
      setaddress(prop.data.address);
      setemail(prop.data.email);
      setphone(prop.data.phone);
    });
  }, [x]);

  function namehandler(e) {
    setname(e.target.value);
  }
  function phonehandler(e) {
    setphone(e.target.value);
  }
  function emailhandler(e) {
    setemail(e.target.value);
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
              <div class="card-title">Update Dealer Details</div>
              <form
                action={"http://localhost:5000/dealer/:" + x + "?_method=PUT"}
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
                      value={name}
                      onChange={namehandler}
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
                      value={email}
                      onChange={emailhandler}
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
                      value={phone}
                      onChange={phonehandler}
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
                      value={address}
                      onChange={addresshandler}
                    />
                  </div>
                </div>
                <div className="buttondiv">
                  <div>
                    <button className="button1">Update dealer</button>
                  </div>
                  <div>
                    <form
                      className="formdelete"
                      action={
                        "http://localhost:5000/dealer/delete/:" +
                        x +
                        "?_method=DELETE"
                      }
                      method="POST"
                    >
                      <button className="button2">Delete dealer</button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDealer;
